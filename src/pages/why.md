---
layout: ../layouts/Story.astro
title: Why
description: Why Pure CSS Components was built in 2014, how it worked, and why it is kept as an archive.
---

I have always loved things built with nothing but CSS. It started in 2012, when I drew [Cartman in pure CSS](https://codepen.io/felipefialho/pen/qzDCJ) and never really stopped. After that drawing and other experiments, I started looking for something more useful: CSS solutions I could ship in real projects.

I had built a few interface components on their own, and it made sense to put them together in one place. In March 2014 that became Pure CSS Components: a carousel, a collapse, a dropdown, a modal, tabs and tooltips, with no JavaScript at all.

## Two tricks

Every component relies on one of two techniques, both ways to give an element a state that CSS can read.

The first is a hidden form input. A checkbox or radio button sits right before the component, a `<label>` pointing at it acts as the button, and selectors like `.collapse-open:checked ~ .collapse-panel` show or hide whatever comes after it. Radios with the same `name` give you exclusive behavior for free, which is how the accordion and the tabs work.

The second is `:target`. A link points to an element's `id`, the URL hash changes, and `:target` styles that element as the active one.

## Did it work?

To find out, I removed all the JavaScript from my own site and used the modal and collapse components instead. The result was good enough to answer the question in the title of the [original post](https://felipefialho.com/blog/e-possivel-utilizar-componentes-desenvolvidos-apenas-com-css/): yes, it is possible to use components built only with CSS, especially in smaller projects. I closed that post with a guess:

> I wouldn't be surprised if this becomes a trend.

Many developers used these components in production, including me, and the repository collected hundreds of stars and forks over the years.

## Why it's an archive now

The tricks had real limits. Hidden inputs are invisible to assistive technology, a checkbox is not a dialog, and focus, Escape and keyboard navigation were never handled.

And the guess turned out right, just not the way I pictured it. The browser learned to do these things itself: `<details>` for disclosure, `<dialog>` for modals, the Popover API and anchor positioning for dropdowns and tooltips, scroll snapping and scroll markers for carousels. Each exhibit on the [home page](/) shows the 2014 original next to its native version, so you can compare them.

The original code is kept as it was, working, for history. If you are building something today, use the native version.

## Read more (in Portuguese)

- <a href="https://felipefialho.com/blog/e-possivel-utilizar-componentes-desenvolvidos-apenas-com-css/" hreflang="pt-BR" lang="pt-BR">É possível utilizar componentes desenvolvidos apenas com CSS?</a>, the 2014 post that explains each component step by step
- <a href="https://felipefialho.com/blog/html-criando-um-componente-de-collapse-nativo-com-as-tags-details-e-summary/" hreflang="pt-BR" lang="pt-BR">Criando um componente de collapse nativo com as tags details e summary</a>

## Support

This archive is kept online on my own time. If it helped you back then, or today, you can [sponsor my work on GitHub](https://github.com/sponsors/felipefialho).
