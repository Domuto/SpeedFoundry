# The Speed Foundry

A bold, cinematic marketing site for **The Speed Foundry** — a performance
parts shop in Peachtree Corners, GA. Engine, exhaust, suspension, and intake
upgrades with outstanding service, exclusive pricing, and industry expertise.

Stack: Vite, React 19, Tailwind CSS v4

## Quick start

```bash
npm install
npm run dev
```

Production build and preview:

```bash
npm run build
npm run preview
```

## Project structure

- index.html — document head, meta, fonts, favicon
- vite.config.js
- package.json
- public/images/sf — Speed Foundry product & category imagery
- public/favicon.svg — SF wordmark favicon
- src/main.jsx — React entry
- src/App.jsx — section order
- src/index.css — design tokens (colors, fonts) + animations
- src/data — value props (nightlyEvents.js) and FAQ (faq.js)
- src/components — one file per section

## Blog

The blog is available at `/blog`; use **Manage posts** to create, edit, or
delete posts and upload a cover image. Post content and compressed images are
saved in this browser's IndexedDB. They do not sync to another device or appear
to other visitors. The editor has no sign-in, so this is intended for local
preview and personal use rather than publishing shared website content.

## Appointment scheduler (AutoOps)

The AutoOps script is loaded at the end of `<body>` in `index.html`. Any
`<BookButton />` (`src/components/BookButton.jsx`) opens the scheduler via
`AutoOps.show()`; it currently appears in the navbar, hero, and Visit section.
If the script fails to load, the button opens Instagram instead.

## Sections

Hero → About (`Story`) → Shop by Category (`Spaces`) → Why Us
(`NightlyEvents`) → Swag (`PrivateEvents`) → Gallery → Visit (`PlanVisit`)
→ FAQ → Contact → Footer.

## Notes

- Brand colors and fonts live in `src/index.css` (the `@theme` block).
- Value props and FAQ content are in `src/data`.
- Categories, merch, address, and links are the arrays at the top of each
  component in `src/components`.
- The logo is a text wordmark (`src/components/Wordmark.jsx`) — no image needed.
- Category/merch images in `public/images/sf` came from thespeedfoundry.com and
  were resized for web — swap in real in-house photography before launch.
- "Shop Parts" buttons link out to thespeedfoundry.com (the Shopify store).
- The contact form is front-end only (logs to the console) — wire it to
  Formspree/Web3Forms to actually send.
