# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Coaching website for Dan Bough at CompletelyHumanCoaching.com. Static site processed by Jekyll (GitHub Pages). No npm, no webpack — Jekyll is the only build step.

## Development

Pages use Jekyll layouts, so opening HTML files directly with `file://` won't work. For local preview run `jekyll serve` (requires the `github-pages` gem or `jekyll` installed). Push to GitHub Pages to see the live result.

## Architecture

Pages are HTML files with YAML front matter. Shared structure lives in `_layouts/default.html`.

**Shared assets:**
- `shared.css` — design tokens, reset, typography, header, footer, scroll reveal
- `shared.js` — nav toggle + IntersectionObserver scroll reveal
- `_layouts/default.html` — `<head>`, header HTML, footer HTML, grain SVG, shared asset links

**Per-page assets** (CSS only, page-specific styles):
- `index.css`, `intake.css`, `schedule/style.css`, `resources/style.css`

**Front matter keys** used by the layout:
- `title`, `description` — `<title>` and meta description
- `stylesheet` — path to page-specific CSS (e.g. `/index.css`)
- `robots` — robots meta value (e.g. `"noindex"`, `"noindex, nofollow"`)
- `minimal_header: true` — hides nav (logo only); used on intake page
- `og_title`, `og_description`, `og_url`, `og_image` — OG/Twitter tags

**Contact form:** Formspree (`https://formspree.io/f/mlgwlgez`), async fetch submission with inline success/error state.

**Hosting:** GitHub Pages. `CNAME` contains the custom domain.

## Design system

All colors are CSS custom properties on `:root`:

| Token | Use |
|---|---|
| `--cream` / `--warm-off` | Section backgrounds |
| `--ink` / `--soil` | Headings / body text |
| `--bark` | Links, buttons, accents (denim navy) |
| `--clay` | Section labels, list markers (denim navy, lighter) |
| `--ember` | Decorative-only warm terracotta accent (divider motif, hero photo backdrop) — never used for text |
| `--muted` | Secondary text |
| `--sand` | Borders, dividers |

Fonts: **Lora** (serif, headings) + **Instrument Sans** (sans-serif, body) via Google Fonts. Max content width: `680px` (`--max-w`).

## Voice and tone

Copy is warm, direct, and unpolished — "a human, not a brand." Avoid corporate, self-help, or motivational language. Dan's established voice: honest, unhurried, grounded. When editing or writing copy, match this register.

The coaching practice is open to everyone — not men-specific. Keep all copy gender-neutral.
