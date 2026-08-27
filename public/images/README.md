# /public/images — Image Guide

Every image on the site lives in this folder and is referenced by the
paths below. The dark gradient placeholders that ship with the project
are just stand-ins — **replace each file with a real photo using the
exact same filename** and the site updates instantly (no code changes).

## Files the site expects

| File | Used in | Recommended size | Aspect |
|---|---|---|---|
| `hero.jpg` | Fullscreen hero | 1920 × 1200 (or larger) | ~16:10 landscape |
| `intro.jpg` | Intro section (left rail) | 1200 × 1500 | 4:5 portrait |
| `eat.jpg` | Eat card + Eat directory fallback | 1200 × 1500 | 4:5 portrait |
| `shop.jpg` | Shop card + Shop directory fallback | 1200 × 1500 | 4:5 portrait |
| `play.jpg` | Play card + Play directory fallback | 1200 × 1500 | 4:5 portrait |
| `stay.jpg` | Stay card + Stay fallback + hotel panel | 1200 × 1500 | 4:5 portrait |
| `live.jpg` | Live card + Live fallback + residences panel | 1200 × 1500 | 4:5 portrait |
| `work.jpg` | Work card + Work fallback + offices panel | 1200 × 1500 | 4:5 portrait |
| `visit.jpg` | Plan Your Visit banner | 1920 × 900 | wide banner |
| `tenant-1.jpg` | Featured spotlight #1 | 1600 × 1100 | ~16:11 landscape |
| `tenant-2.jpg` | Featured spotlight #2 | 1600 × 1100 | ~16:11 landscape |
| `tenant-3.jpg` | Featured spotlight #3 | 1600 × 1100 | ~16:11 landscape |
| `gallery-1.jpg` → `gallery-6.jpg` | Gallery grid | 1080 × 1080 | 1:1 square |

## Tips for the best result

- **Go dark and moody.** The design layers dark gradient overlays on
  top of every image, so dusk/night shots, warm interiors, and neon
  work far better than bright daylight photos.
- **Exact aspect ratios don't need to be perfect** — every image uses
  `object-cover`, so it will crop to fit. Just keep the subject near
  the center (or lower third for the hero, since the headline sits low).
- **Keep files under ~400 KB each** (export JPG at 70–80% quality).
  The hero can go up to ~600 KB.
- **Per-tenant directory photos:** add any image here (e.g.
  `puttshack.jpg`) and set `image: "/images/puttshack.jpg"` on that
  tenant in `src/data/directory.js`. Tenants without an `image` fall
  back to their category photo automatically.
- **Adding more gallery tiles:** drop in `gallery-7.jpg`, etc., then
  add the path to the `IMAGES` array in `src/components/Gallery.jsx`.
