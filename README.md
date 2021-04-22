
## ⚠️ Disclaimer

This is an old project, when I made it in 2014 I was tried use some possibilities about HTML/CSS and I loved the result. So I know a lot of people that used these components in production projects (I've used a lot of times).

But the things changed in the nexts years and there are better choices to made these components.

So I just maintain this project as an experimental thing and I probability won't make changes anymore.

But you is free to use it as you want 😁❤️

___

![Pure CSS Components Logo](logo-pcc.jpg "Pure CSS Components")

[![Netlify Status](https://api.netlify.com/api/v1/badges/566334bb-2cd1-4548-91b0-b2869a85158b/deploy-status)](https://app.netlify.com/sites/css-components/deploys)
[![license](https://img.shields.io/github/license/felipefialho/css-components.svg)](./license.md)
[![GitHub contributors](https://img.shields.io/github/contributors/felipefialho/css-components.svg)](https://github.com/felipefialho/css-components/graphs/contributors)

> A set of common UI Components using the power of CSS and without Javascript

[View the project](https://css-components.felipefialho.com)

## Install

Install via [Bower](https://bower.io/) or
[download the zip](https://css-components.felipefialho.com/build/css-components.zip)

```bash
bower install css-components
```

## Components

- [Carousel](https://css-components.felipefialho.com/#component-carousel "Carousel")
- [Collapse](https://css-components.felipefialho.com/#component-collapse "Collapse")
- [Dropdown](https://css-components.felipefialho.com/#component-dropdown "Dropdown")
- [Modal](https://css-components.felipefialho.com/#component-modal "Modal")
- [Tab](https://css-components.felipefialho.com/#component-tab "Tab")
- [Tooltip](https://css-components.felipefialho.com/#component-tooltip "Tooltip")

## Browser Support

|          | Chrome  | Firefox  | Edge     | Safari 
| -------- | ------- | -------- | -------- | ---- |
| Android  | Yes     | Yes      | Yes      | Yes  | 
| iOS      | Yes     | Yes      | Yes      | Yes  | 
| Mac OS X | Yes     | Yes      | Yes      | Yes  | 
| Windows  | Yes     | Yes      | Yes.     | Yes  |


\* [CSS3 transitions](https://caniuse.com/#search=css%20transition) are not supported in IE8 and below.
\*\* Janky z-index. See [tooltip on right example](https://css-components.felipefialho.com/#component-tooltip).

**Notes:**

- Most tests performed with Browserstack.
- Components that perform action on hover may not work on touchscreens eg. _dropdown with hover_. Oddly _tooltip_ does work. Bootstrap mentions this, “[Sticky :hover/:focus on mobile.](https://getbootstrap.com/getting-started/#support-sticky-hover-mobile)
  Even though real hovering isn't possible on most touchscreens, most mobile browsers emulate hovering support and make :hover ‘sticky’. In other words, :hover styles start applying after tapping an element and only stop applying after the user taps some other element.”
- Probably the main reason why the components fail in earlier versions of IE is because they use [advanced CSS selectors](https://caniuse.com/#search=CSS3%20selectors) which aren’t supported. It may be possible to patch this with the use of something like [selectivizr](https://selectivizr.com). This may defeat the purpose of using these javascript free components but on the other hand it may be acceptable for older IE.
- The components do not fail gracefully. In most cases some elements are visible but interaction will not have any effect. The _carousel_ component won't show anything.
- Some layout issues with _tab_ when wrapping on smaller screen sizes.
- Weird flash when _carousel_ loops around to first slide.

## Contributing

Please read this [Coding Style](https://github.com/felipefialho/coding-style/) for [Issues](https://github.com/felipefialho/css-components/issues), pull requests and coding standards.

All changes must be made in `/dev` folder. The CSS should be modified using the [Stylus](https://learnboost.github.io/stylus/) preprocessor.

### Getting Started

```bash

# 1. Fork this repository and clone it into the current directory
git clone https://github.com/<your-username>/css-components.git

# 2. Navigate to the newly cloned directory
cd css-components

# 3. Install the dependencies
npm install

```

### Development

```bash

# For start the server, watching your .styl files changes and compile CSS
grunt w

```

### Pull Requests

```bash

# Compress zip files
grunt build

# Build the project for deploy
grunt dist

# View your project release in GhPages
https://<your-username>.github.io/css-components/

# Open your Pull Request

```

## License

MIT License © Felipe Fialho
