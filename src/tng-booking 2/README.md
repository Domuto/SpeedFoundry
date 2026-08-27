# Tongue & Groove ATL — VIP Section Booking

Three self-contained HTML files, same architecture as the Celestia build: standalone pickers that run on their own or embed via iframe + postMessage.

## Files

| File | What it is |
|---|---|
| `index.html` | Landing page — tabs between the 3D walkthrough and 2D floor map, selection bar, request modal |
| `tng-vip-3d.html` | Standalone Three.js (r128, cdnjs CDN) 3D venue — main floor + upstairs mezzanine, orbit/pinch controls, `3D VIEW / TOP·MAIN / TOP·UPSTAIRS` buttons |
| `tng-vip-map.html` | Standalone 2D SVG poster map — large main-floor plan with the upstairs as its own offset box (matches the venue floor plan), tap-to-book sheet |

## Preview locally

Serve the folder (iframes + fonts behave better over http than file://):

```bash
cd tng-booking
python3 -m http.server 8000
# open http://localhost:8000
```

Each picker also works opened directly (they detect standalone vs embed mode).

## Editing prices, capacities, sold-out

All three files have a clearly marked config block at the top of their `<script>`:

- **`CATS`** — per-category label, color, default guests, default minimum. Current numbers are **placeholders** — set real T&G pricing here.
- **`SECTIONS` / `TABLES`** — per-table overrides (`T11`/`T12` show the pattern: `pax:8, min:1000`).
- **`SOLD_OUT`** — e.g. `['T3','D2']`. The 3D picker renders a SOLD label and blocks selection; the 2D map dims the zone and stamps SOLD.

Keep the three files' data in sync — `index.html` renders the selection bar/modal from its own copy.

In `tng-vip-3d.html`, table positions live in the `TABLES` array (`x`,`z` in venue meters, `lvl:1` = upstairs). Move a table by editing two numbers.

## Embed / postMessage API

Load either picker with `?embed=1` and it hides its own booking UI and posts to `window.parent`:

```js
{ type: 'tng-3d-select',  sectionId: 't4b' | null }   // selection changed
{ type: 'tng-3d-request', sectionId: 't4b' }          // user hit REQUEST
{ type: 'tng-map-select', sectionId: 'd2' | null }
{ type: 'tng-map-request', sectionId: 'd2' }
```

`sectionId` is lowercase (same convention as Celestia). `index.html` uppercases it against its `SECTIONS` keys.

## Dropping into a Next.js repo (Vercel)

1. Copy the three files into `public/` (e.g. `public/tng/`).
2. Duplicate your Celestia wrapper with the new message types:

```tsx
'use client';
import { useEffect, useRef } from 'react';

export default function Tng3DPicker({ onSelect, onRequest }:{
  onSelect?: (id: string | null) => void;
  onRequest?: (id: string) => void;
}) {
  const ref = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return;
      const d = e.data;
      if (d?.type === 'tng-3d-select') onSelect?.(d.sectionId ? d.sectionId.toUpperCase() : null);
      if (d?.type === 'tng-3d-request') onRequest?.(d.sectionId.toUpperCase());
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [onSelect, onRequest]);
  return <iframe ref={ref} src="/tng/tng-vip-3d.html?embed=1" className="h-[72vh] w-full rounded-2xl border-0" title="3D venue" />;
}
```

Same shape for the 2D map with `tng-map-select` / `tng-map-request`. Then `onRequest` can `router.push(`/book/${id.toLowerCase()}`)` exactly like the Celestia flow.

3. Static files — nothing else needed for Vercel.

## Wiring the request form

`index.html` → `mSend` handler builds the full payload and currently does `console.log('TNG_BOOKING_REQUEST', payload)`. A commented `fetch('/api/vip-request', …)` sits right above it — point that at your route/webhook (Resend email, Twilio SMS, Sheets, whatever you're using) and you're live.

## Notes

- Three.js pinned to r128 on cdnjs, matching the Celestia build — no bundler, no deps.
- Fonts: Cinzel + Jost via Google Fonts.
- All pricing/capacity numbers and table positions are best-guess placeholders from the floor plan — verify against T&G's actual layout before launch (there's no Table 9 upstairs, per the plan).
