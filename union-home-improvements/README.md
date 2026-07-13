# Union Home Improvements Ltd — website

Static two-page site (plain HTML/CSS/vanilla JS, no build step). Works by opening
`index.html` directly in a browser; deploys to Vercel as-is.

- `index.html` — main one-page site
- `quote.html` — standalone quote page (this URL gets pasted into Facebook job posts)
- `styles.css` / `script.js` — single stylesheet and script shared by both pages
- `assets/` — images (logo + job photos)

## Real assets still needed from the client

| # | Asset | Where it goes | Notes |
|---|-------|---------------|-------|
| 1 | `logo.jpeg` | `assets/logo.jpeg` | Will drops this in. It's a JPEG on a solid slate-navy (#454C65) background — the header shows it on a matching chip so the edges blend. |
| 2 | **Transparent logo (PNG/SVG)** | replaces `assets/logo.jpeg` | Ideal fix — ask the client for a transparent-background version so the chip workaround can be removed. |
| 3 | **6+ job photos** | `assets/job-1.jpg` … `assets/job-6.jpg` | Pull from the client's Facebook job posts. Replace the grey `PHOTO 1`–`PHOTO 6` placeholder divs in `index.html` (all 6) and `quote.html` (first 3) with `<img>` tags, and edit the `<figcaption>` captions to match. |
| 4 | **Google review quotes** | Reviews section in `index.html` | Paste real reviews into the commented-out template in `#reviews`. Do **not** invent quotes or reviewer names. Also confirm the real review count and replace `REPLACE_WITH_REVIEW_COUNT` in the JSON-LD in `index.html`. |
| 5 | **Google reviews URL** | "Read our reviews on Google" button in `index.html` | Replace the `href="#"` with the Google Business Profile reviews link. |
| 6 | **Accreditation confirmations** | Accreditations strip in `index.html` | TrustMark / Checkatrade / CompetentRoofer placeholders are commented out and the section is `hidden`. Confirm with the client which they genuinely hold, add the logo images to `assets/`, uncomment, and remove `hidden`. Do not show unverified accreditations. |
| 7 | **Formspree form ID** | `quote.html` form `action` | Create a form at formspree.io and replace `PLACEHOLDER` in `https://formspree.io/f/PLACEHOLDER`. |
| 8 | **OG image** | `assets/og-image.jpg` | 1200×630 image (best job photo + logo) for Facebook link previews. |
| 9 | **Live domain** | both HTML files | Replace `PLACEHOLDER-DOMAIN` in the Open Graph tags and JSON-LD once the Vercel domain is known. |
