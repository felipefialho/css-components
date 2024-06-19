
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
| Windows  | Yes     | Yes      | Yes      | Yes  |


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

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## ⚠️ Atenção

Este é um projeto antigo. Quando o criei em 2014, estava experimentando algumas possibilidades com HTML/CSS e adorei o resultado. Por isso, conheço muitas pessoas que usaram esses componentes em projetos de produção (eu mesmo os usei muitas vezes).

Mas as coisas mudaram nos anos seguintes e existem melhores opções para fazer esses componentes.

Portanto, mantenho este projeto apenas como uma coisa experimental e provavelmente não farei mais mudanças.

Mas você é livre para usá-lo como quiser 😁❤️

___

![Pure CSS Components Logo](logo-pcc.jpg "Pure CSS Components")

[![Netlify Status](https://api.netlify.com/api/v1/badges/566334bb-2cd1-4548-91b0-b2869a85158b/deploy-status)](https://app.netlify.com/sites/css-components/deploys)
[![license](https://img.shields.io/github/license/felipefialho/css-components.svg)](./license.md)
[![GitHub contributors](https://img.shields.io/github/contributors/felipefialho/css-components.svg)](https://github.com/felipefialho/css-components/graphs/contributors)

> Um conjunto de componentes de interface do usuário comuns usando o poder do CSS e sem JavaScript.

[View the project](https://css-components.felipefialho.com)

## Instalação

Instale via [Bower](https://bower.io/) ou
[faça o download do zip](https://css-components.felipefialho.com/build/css-components.zip)

```bash
bower install css-components
```

## Componentes

- [Carousel](https://css-components.felipefialho.com/#component-carousel "Carousel")
- [Collapse](https://css-components.felipefialho.com/#component-collapse "Collapse")
- [Dropdown](https://css-components.felipefialho.com/#component-dropdown "Dropdown")
- [Modal](https://css-components.felipefialho.com/#component-modal "Modal")
- [Tab](https://css-components.felipefialho.com/#component-tab "Tab")
- [Tooltip](https://css-components.felipefialho.com/#component-tooltip "Tooltip")

## Suporte pro Navegador

|          | Chrome  | Firefox  | Edge     | Safari 
| -------- | ------- | -------- | -------- | ---- |
| Android  | Sim     | Sim      | Sim      | Sim  | 
| iOS      | Sim     | Sim      | Sim      | Sim  | 
| Mac OS X | Sim     | Sim      | Sim      | Sim  | 
| Windows  | Sim     | Sim      | Sim      | Sim  |


\* [CSS3 transitions](https://caniuse.com/#search=css%20transition) are not supported in IE8 and below.
\*\* Janky z-index. See [tooltip on right example](https://css-components.felipefialho.com/#component-tooltip).

**Notas:**

- A maioria dos testes realizados com o Browserstack.
- Componentes que executam ações ao passar o mouse podem não funcionar em telas sensíveis ao toque eg. _dropdown with hover_. Oddly _tooltip_ funciona. Bootstrap menciona isso, “[Sticky :hover/:focus on mobile.](https://getbootstrap.com/getting-started/#support-sticky-hover-mobile)
 Embora o hover real não seja possível na maioria das telas sensíveis ao toque, a maioria dos navegadores móveis emula o suporte ao hover e torna o :hover "pegajoso". Em outras palavras, os estilos :hover começam a ser aplicados após tocar em um elemento e só param de ser aplicados após o usuário tocar em outro elemento.
- Provavelmente, o principal motivo pelo qual os componentes falham em versões anteriores do IE é porque eles usam [advanced CSS selectors](https://caniuse.com/#search=CSS3%20selectors) que não são suportados. Pode ser possível corrigir isso com o uso de algo como  [selectivizr](https://selectivizr.com). Isso pode contrariar o propósito de usar esses componentes JavaScript gratuitos, mas por outro lado, pode ser aceitável para o IE antigo.
- Os componentes não falham graciosamente. Na maioria dos casos, alguns elementos são visíveis, mas a interação não terá nenhum efeito. O _carousel_ componente não mostrará nada.
- Alguns problemas de layout com _tab_ ao envolver em tamanhos de tela menores.
- Flash estranho quando _carousel_ gira em torno do primeiro slide.
  
## Contribuindo 

Por favor leia isso [Coding Style](https://github.com/felipefialho/coding-style/) para [Issues](https://github.com/felipefialho/css-components/issues), solicitações de pull e padrões de codificação
Todas as alterações devem ser feitas na `/dev` pasta. O CSS deve ser modificado usando o [Stylus](https://learnboost.github.io/stylus/) pré-processador.

### Começando

```bash

# 1. Crie um fork deste repositório e clone-o no diretório atual
 https://github.com/<your-username>/css-components.git

# 2. Navegue para o diretório
 recém-clonado

# 3. Instale as dependências

```

### Desenvolvimento

```bash

# For start the server, watching your .styl files changes and compile CSS
grunt w

```

### Solicitações

```bash

# Compactar arquivos zip

# Construir o projeto para implantação

# Visualize seu lançamento do projeto no GhPages
https://<your-username>.github.io/css-components/

# Abra sua solicitação
