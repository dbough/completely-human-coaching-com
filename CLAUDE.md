# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page static coaching website for Dan Bough at CompletelyHumanCoaching.com. No build tool, no framework, no dependencies — everything lives in `index.html`.

## Development

Open `index.html` directly in a browser. There is no build step, dev server, or package manager.

## Architecture

One file: `index.html`. All CSS is in a `<style>` block in `<head>`. All JS is an inline `<script>` block inside the connect section (handles async Formspree form submission). Sections use anchor IDs for nav: `#hero`, `#about`, `#conversation`, `#connect`.

**Contact form:** Formspree (`https://formspree.io/f/mlgwlgez`), async fetch submission with inline success/error state. A commented-out Calendly embed option exists in the CSS (labeled "Option A").

**Hosting:** GitHub Pages. `CNAME` contains the custom domain.

## Design system

All colors are CSS custom properties on `:root`:

| Token | Use |
|---|---|
| `--cream` / `--warm-off` | Section backgrounds |
| `--ink` / `--soil` | Headings / body text |
| `--bark` | Links, buttons, accents |
| `--clay` | Section labels, list markers |
| `--muted` | Secondary text |
| `--sand` | Borders, dividers |

Fonts: **Lora** (serif, headings) + **Inter** (sans-serif, body) via Google Fonts. Max content width: `680px` (`--max-w`).

## Voice and tone

Copy is warm, direct, and unpolished — "a human, not a brand." Avoid corporate, self-help, or motivational language. Dan's established voice: honest, unhurried, grounded. When editing or writing copy, match this register.

The coaching practice is open to everyone — not men-specific. Keep all copy gender-neutral.
