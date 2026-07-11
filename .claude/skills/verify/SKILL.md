---
name: verify
description: How to build/launch/drive this repo's static sites for runtime verification.
---

# Verifying this repo

This repo is a collection of self-contained static sites (no build step):
- `index.html` — CFM landing page
- `pipetech/index.html` — PipeTech Solutions one-pager
- `pot/index.html` — Round Pot night-out kitty app (localStorage, vanilla JS)

## Launch

No server needed — pages work over `file://`. Playwright is installed
globally; Chromium is pre-provisioned:

```bash
NODE_PATH=/opt/node22/lib/node_modules node <script>.js
```

```js
const { chromium } = require('playwright');
const browser = await chromium.launch(); // finds /opt/pw-browsers/chromium via env
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } }); // mobile-first
const page = await ctx.newPage();
await page.goto('file:///home/user/Ollie/pot/index.html');
```

## Driving the pot app

- State lives in `localStorage` under key `roundpot-v1`. To skip the setup
  flow, seed it with `page.evaluate(() => localStorage.setItem('roundpot-v1', JSON.stringify({...})))`
  then `page.reload()`. Shape: `{name, buyIn, startedAt, people:[{id, name, contributions:[{amount, paid, label}]}], rounds:[{id, amount, note, buyerId, time}]}`.
- Bottom sheets animate in over ~0.2s — `waitForTimeout(400)` before
  screenshotting or they capture ghosted mid-fade.
- "Owes" chips render in BOTH the warning card and the crew list, so
  `.chip.owes` counts double per unpaid person.
- Clipboard test needs `ctx.grantPermissions(['clipboard-read','clipboard-write'])`.

## Flows worth driving

Setup (add ≥2 people, buy-in) → mark paid → log round (pot decreases) →
top-up (everyone owes again) → overdraw (warn banner) → settle sheet
(split-back / shortfall / never-paid) → wipe (confirm dialog, clears storage).
