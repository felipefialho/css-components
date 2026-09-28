![Pure CSS Components Logo](public/logo-pcc.jpg "Pure CSS Components")

# Pure CSS Components

[![Netlify Status](https://api.netlify.com/api/v1/badges/566334bb-2cd1-4548-91b0-b2869a85158b/deploy-status)](https://app.netlify.com/sites/css-components/deploys)
[![license](https://img.shields.io/github/license/felipefialho/css-components.svg)](./license.md)

> A set of common UI components built in 2014 using the power of CSS and without JavaScript

**[See the components](https://css-components.felipefialho.com)** · [Read the story](https://css-components.felipefialho.com/story/)

## ⚠️ This project is an archive

I made this in 2014 to explore how far HTML and CSS could go on their own, using hidden form inputs and `:target` to hold state. A lot of people used these components in production, and so did I.

The web platform now does all of this natively, with far better accessibility. The site keeps each original component working next to its native version: `<details>`, `<dialog>`, the Popover API, anchor positioning and CSS carousels. **If you are building something today, use the native version.**

The original Stylus sources and the zip downloads are available in the [v2.0.0 release](https://github.com/felipefialho/css-components/releases/tag/v2.0.0).

## Components

- [Carousel](https://css-components.felipefialho.com/#carousel)
- [Collapse](https://css-components.felipefialho.com/#collapse)
- [Dropdown](https://css-components.felipefialho.com/#dropdown)
- [Modal](https://css-components.felipefialho.com/#modal)
- [Tab](https://css-components.felipefialho.com/#tab)
- [Tooltip](https://css-components.felipefialho.com/#tooltip)

## Running the site

Requires Node.js 22.12+ and [pnpm](https://pnpm.io/). The site is built with [Astro](https://astro.build/).

```sh
pnpm install
pnpm dev
```

- `pnpm dev`: start the dev server
- `pnpm build`: type-check and build to `dist`
- `pnpm lint`: lint scripts and styles

Each component lives in `src/exhibits/<name>/`: `then.*` is the 2014 original, `now.*` is the native version.

## License

MIT License © Felipe Fialho
