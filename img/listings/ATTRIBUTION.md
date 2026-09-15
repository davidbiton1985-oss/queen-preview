# Listing photography — attribution & usage

All photos in this folder are **illustrative stock photography** used as stand-ins until the
partners supply real, cleared property photos. Every card renders them with a visible
"צילום להמחשה / Illustrative photo" chip, and the `alt` text says so too — they are never
presented as the actual property.

Source: [Pexels](https://www.pexels.com) — **Pexels License** (free for commercial use,
no attribution required, modifications allowed; photos may not be sold unaltered or used
to imply endorsement). Unsplash's public search JSON now requires an API key from this
environment, so the brief's Unsplash step was fulfilled with Pexels (the plan's named fallback).

Each photo was downloaded at full resolution, verified as a real JPEG ≥ 1200 px wide,
then resized (Lanczos) to two widths — `*-1600.jpg` (≤ 220 KB) and `*-800.jpg` — as
progressive JPEGs, quality 67–82.

| File (base name)        | Photographer          | Pexels page                              | Original size |
|-------------------------|-----------------------|------------------------------------------|---------------|
| living-stairs           | Viaceslav Kat         | https://www.pexels.com/photo/1571460/    | 3400 × 2186   |
| dining-green            | Max Vakhtbovych       | https://www.pexels.com/photo/6585598/    | 4693 × 3083   |
| living-garden-light     | Jason Boyd            | https://www.pexels.com/photo/3209045/    | 4500 × 3000   |
| living-white            | Terry Magallanes      | https://www.pexels.com/photo/2988860/    | 6016 × 4016   |
| living-kitchen          | Viaceslav Kat         | https://www.pexels.com/photo/1643383/    | 3500 × 2304   |
| bedroom-classic         | Jean van der Meulen   | https://www.pexels.com/photo/1454806/    | 4201 × 2584   |
| living-tall-windows     | Leah Newhouse         | https://www.pexels.com/photo/6480707/    | 5301 × 3534   |
| bedroom-elegant         | Max Vakhtbovych       | https://www.pexels.com/photo/6782567/    | 4712 × 3156   |
| kitchen-island          | Mark McCammon         | https://www.pexels.com/photo/2724749/    | 5568 × 3712   |
| bedroom-marble          | Max Vakhtbovych       | https://www.pexels.com/photo/6585757/    | 7360 × 4912   |
| sofa-velvet             | Rachel Claire         | https://www.pexels.com/photo/4846097/    | 2689 × 1793   |
| bedroom-modern          | Max Vakhtbovych       | https://www.pexels.com/photo/6444258/    | 7195 × 4802   |

## Assignment (2 per property, `media.images[]` in `content/properties/*.json`)

| Property (slug)                    | Photo 1              | Photo 2          |
|------------------------------------|----------------------|------------------|
| ahuza-5r-demo                      | living-stairs        | dining-green     |
| neve-zemer-4r-demo                 | living-white         | living-garden-light |
| kiryat-ganim-4r-rent-demo          | living-kitchen       | bedroom-classic  |
| lev-hapark-5r-rent-demo            | living-tall-windows  | bedroom-elegant  |
| raanana-hayeruka-6r-penthouse-demo | kitchen-island       | bedroom-marble   |
| neot-sade-3r-rent-demo             | sofa-velvet          | bedroom-modern   |

## Replacing with real photography

1. Drop the real photos here as `<slug>-<n>-1600.jpg` / `-800.jpg` (same two widths, ≤ 220 KB for the 1600).
2. Point `media.images[].src` / `.small` at them and set `"illustrative": false` on the image
   (the chip disappears only when the image is explicitly marked non-illustrative).
3. Write honest `alt_he` / `alt_en` for each.
