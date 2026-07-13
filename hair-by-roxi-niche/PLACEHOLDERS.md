# PLACEHOLDERS — everything to confirm with Roxi before launch

Every unknown on the site is visibly marked **[PLACEHOLDER — CONFIRM WITH ROXI]**
(yellow tags on the pages, plus matching HTML comments in the code). This file is
the master checklist for swapping in real content after the pitch.

## 1. Business details

- [ ] **Full street address** — used in: footer (all pages), `contact.html` "Find us", JSON-LD schema in `index.html`. Confirm whether the full address should be public, or shared on booking only (common for home salons).
- [ ] **Postcode** (RM14 ___) — JSON-LD schema in `index.html`.
- [ ] **Phone number** — footer (all pages), `contact.html` "Call" button (`tel:` link), JSON-LD schema.
- [ ] **Email address** — footer (all pages), JSON-LD schema, and the booking form's `mailto:` destination in `js/main.js` (search for `PLACEHOLDER@CONFIRM-WITH-ROXI`).
- [ ] **Opening hours** — `contact.html` "Find us" section, JSON-LD `openingHours`.
- [ ] **Final domain name** — JSON-LD `url` field in `index.html`.

## 2. Socials & messaging

- [ ] **Instagram handle + profile URL** — `index.html` "Follow the transformations" section, "DM on Instagram" button on `contact.html`, footer (all pages), JSON-LD `sameAs`.
- [ ] **WhatsApp number** — "WhatsApp Us" button on `contact.html` (format: `https://wa.me/44XXXXXXXXXX`).

## 3. Services & pricing

- [ ] **Extension service list** — real service names and methods (e.g. tapes, weft, micro/nano rings). Update the cards on `services.html` and the 3 featured cards on `index.html`.
- [ ] **"From" prices for each extension service** — every `£[PLACEHOLDER]` on `services.html` and `index.html`.
- [ ] **Other (non-extension) salon services + prices** — the "Other salon services" section on `services.html`.
- [ ] **Service dropdown options** — the booking form on `contact.html` should mirror the confirmed service list.
- [ ] **Deposit amount & terms** — deposit notes on `services.html` and `contact.html` (how much, how to pay, refund terms).

## 4. Photos & branding

- [ ] **Logo artwork** — currently a text logo "Hair by Roxi Niche" in the header/footer of all pages.
- [ ] **Hero image** — full-bleed transformation photo for the `index.html` hero (landscape, min 1920px wide). Replace the gradient in `.hero-media`.
- [ ] **Photo of Roxi** — "Meet Roxi" section on `index.html`.
- [ ] **Before/after transformation photos** — 4 teaser slots on `index.html`, 8+ slots on `gallery.html`. Portrait 4:5 crop; drop in as `<img loading="lazy">` per the comment patterns in `gallery.html`.
- [ ] **Extension shade/colour swatch photos** — 12 slots in the shade gallery on `gallery.html`. Depends on which hair brand Roxi uses (shade names/numbers).
- [ ] **Instagram post thumbnails** (optional) — 4 stub tiles on `index.html`; can be replaced with real post embeds or images.

## 5. About / bio

- [ ] **Roxi's bio details** — years of experience, training/certifications, extension methods offered ("Meet Roxi" section on `index.html`).

## 6. Reviews

- [ ] **2 real client review quotes** (with first names and permission to publish) — social proof section on `index.html`. Ideally one from a 7+ year client.

## 7. Map

- [ ] **Google Maps embed** — `contact.html` map placeholder; needs the confirmed address first.

---

### Where placeholders live in code

| File | What's placeholder |
| --- | --- |
| `index.html` | JSON-LD schema fields, hero image, Roxi photo, featured service names/prices, review quotes, Instagram handle/links, footer contact details |
| `services.html` | All service names, descriptions and prices; deposit amount; footer contact details |
| `gallery.html` | All transformation photos, all shade swatches; footer contact details |
| `contact.html` | WhatsApp/Instagram/phone links, service dropdown, deposit amount, address, opening hours, map embed; footer contact details |
| `js/main.js` | Booking form destination email (`PLACEHOLDER@CONFIRM-WITH-ROXI`) |
