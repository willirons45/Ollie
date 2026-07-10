# ⚡ TakeSmith

An AI content engine for sports content creators. Pick a sport, pick a format, set the spice level, and get a punchy spoken-word script ready to read on camera.

## Run it

It's a single self-contained file — no build step, no dependencies:

- Open `index.html` directly in a browser, or
- Serve the folder: `npx serve takesmith` (or any static host / GitHub Pages)

## Features

- **Sports:** Football (soccer), NBA, WWE 🔒, UFC/MMA 🔒 (locked sports are Pro-tier)
- **Formats:** Hot Take, Debate Script, Tier List, Unpopular Opinion, Matchday Reaction
- **Spice slider:** Mild / Medium / Nuclear — controls how bold the takes are
- **Regenerate** and **"Counter it"** (generates the opposing argument) on every output
- **Copy to clipboard** on every output
- **Library:** save favourites locally (free tier holds 5, Pro unlimited)
- **Free tier:** 3 generations per day; **Pro:** paywall/upgrade screen placeholder — no real payments yet, the upgrade button unlocks a local "Pro preview"

## AI generation

Out of the box the app runs in **demo mode** — a built-in template writer produces varied sample takes so the whole flow works with zero setup.

To generate real AI takes, open **Settings (⚙︎)** and paste a Claude API key. The key is stored only in the browser's `localStorage` and calls go straight from the browser to the Anthropic API (`claude-sonnet-5`). The prompts behind each format are tuned for spoken-word delivery: short sentences, no hashtags, made to be read aloud.

> Note: a client-side API key is fine for personal use and prototyping. Before launching publicly, move generation behind a small backend so the key is never shipped to users.

## Data

Everything (saved takes, plan, daily usage, API key) lives in `localStorage` on the device. "Reset app data" in Settings clears it all.
