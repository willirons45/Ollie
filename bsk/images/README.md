# BSK Builders — gallery photos

Drop job photos in this folder, then uncomment/duplicate the prepared
`<div class="gal-item">` tiles in `bsk/index.html` (see the comment inside
`.gal-grid`).

Rules (from the site brief):

- Real files only — never embed images as base64.
- Always add `loading="lazy"` and honest, descriptive `alt` text.
- Compress anything over ~300KB to a max-1200px-wide JPEG before committing,
  e.g. `convert in.jpg -resize '1200>' -quality 82 out.jpg`.

Expected first batch (filenames already referenced in the commented tiles):

- `kitchen-refit-1.jpg` … `kitchen-refit-4.jpg` — completed kitchen refit
  (grey gloss units, marble-effect tiling, integrated Bosch appliances)
- `kitchen-install.jpg` — white kitchen, mid-install ("Work in progress")
