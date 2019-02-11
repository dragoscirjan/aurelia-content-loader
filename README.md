# Aurelia Content Loader

[![Npm Version](https://img.shields.io/npm/v/aurelia-content-loader.svg)](https://www.npmjs.com/package/aurelia-content-loader)
[![HitCount](http://hits.dwyl.io/dragoscirjan/aurelia-content-loader.svg)](http://hits.dwyl.io/dragoscirjan/aurelia-content-loader)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dragoscirjan/aurelia-content-loader/issues)

[![TravisCI](https://travis-ci.org/dragoscirjan/aurelia-content-loader.svg?branch=master)](https://travis-ci.org/dragoscirjan/aurelia-content-loader)
[![CircleCI](https://circleci.com/gh/dragoscirjan/aurelia-content-loader.svg?style=shield)](https://circleci.com/gh/dragoscirjan/aurelia-content-loader)

[![Donate to this project using Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://patreon.com/dragoscirjan)
<!-- [![Donate to this project using Flattr](https://img.shields.io/badge/flattr-donate-yellow.svg)](https://flattr.com/profile/balupton)
[![Donate to this project using Liberapay](https://img.shields.io/badge/liberapay-donate-yellow.svg)](https://liberapay.com/dragoscirjan)
[![Donate to this project using Thanks App](https://img.shields.io/badge/thanksapp-donate-yellow.svg)](https://givethanks.app/donate/npm/badges)
[![Donate to this project using Boost Lab](https://img.shields.io/badge/boostlab-donate-yellow.svg)](https://boost-lab.app/dragoscirjan/badges)
[![Donate to this project using Buy Me A Coffee](https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg)](https://buymeacoffee.com/balupton)
[![Donate to this project using Open Collective](https://img.shields.io/badge/open%20collective-donate-yellow.svg)](https://opencollective.com/dragoscirjan)
[![Donate to this project using Cryptocurrency](https://img.shields.io/badge/crypto-donate-yellow.svg)](https://dragoscirjan.me/crypto)
[![Donate to this project using Paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://dragoscirjan.me/paypal)
[![Buy an item on our wishlist for us](https://img.shields.io/badge/wishlist-donate-yellow.svg)](https://dragoscirjan.me/wishlist) -->



SVG-Powered component to easily create placeholder loadings (like Facebook's cards loading).

## Index

- [Aurelia Content Loader](#aurelia-content-loader)
  - [Index](#index)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Options](#options)
  - [Examples](#examples)
        - [Facebook Component](#facebook-component)
        - [Instagram Component](#instagram-component)
        - [Code Component](#code-component)
          - [Additional Options](#additional-options)
        - [List Component](#list-component)
          - [Additional Options](#additional-options-1)
        - [Bullet list Style](#bullet-list-style)
    - [Custom Style](#custom-style)
    - [Extending component](#extending-component)
      - [Javascript Class](#javascript-class)
      - [Importing new component](#importing-new-component)
      - [Using within HTML Templates](#using-within-html-templates)
  - [Similar packages](#similar-packages)
  - [Development](#development)
  - [License](#license)

## Getting Started

```sh
npm i aurelia-content-loader --save
```

or

```sh
yarn add aurelia-content-loader
```

## Usage

In your aurelia `main.js` add:

```jsx
aurelia.use.plugin(PLATFORM.moduleName('aurelia-content-loader'));
```

## Options

| Option | Type | Default | Description |
|---|---|---|---|
| `animate` | Boolean | `false` | _Optional._ Activate animations with `true`, `1`, `any`. |
| `animate-duration` | String  |  `1s` | _Optional._ Change to any time value. i.e. `10s`. |
| `css-class` | String |   | _Optional._ Additional CSS classes to add on the main container of the component. |
| `css-class-inner` | String |   | _Optional._ Additional CSS classes to add on the inner container of the component. |
| `height` | Number | `110`  | _Optional._ Represents the max height of the `<svg />`. |
| `image-radius` | Number | `30` | _Optional._ Radius of the main image (see Facebook or Instagram components) - does not matter if the image is a square. If square, image width/height will be the diameter (2 * radius). |
| `image-as-circle` | Boolean | `false` | _Optional._ Activate circle image with `true`, `1`, `any`. |
| `line-height` | Number | `7` | _Optional._ Used for components like (`Facebook`, `List` and `Code`), represents the height of the lines representing texts. Can be changed to any number. |
| `line-max-number` | Number | `5` | _Optional._ Used for components like (`Facebook`, `List` and `Code`), represents the maximum number of rendered text lines. If given a very large number, the text lines will fill all the available space according to svg height. |
| `line-padding` | Number | `5` | _Optional._ Used for components like (`Facebook`, `List` and `Code`), represents the top/bottom padding of the lines representing texts. Can be changed to any number. |
| `line-width-randomize` | Boolean | `false` | _Optional._ Used for components like (`Facebook`, `List`), allows 'text' lines to have random widths. |
| `width` | Number | `320` | _Optional._ Represents the max width of the `<svg />`. |
| `svg-direction` | Number | `ltr` | _Optional._ Defines the orientation of the `<svg />`. Can be changed to `rtl`. |
| `svg-preserve-aspect-ratio` | String | `none` | _Optional._ Defaults to `none`. Read more in the [preserveAspectRatio](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio) attribute documentation. |

## Examples

##### Facebook Component

```html
<svg-facebook-loader
  animate="1"
  corner-radius="3"
  image-as-circle="1"
></svg-facebook-loader>
```

##### Instagram Component

```html
<svg-instagram-loader
  animate="1"
  height="220"
  corner-radius="3"
  image-as-circle="1"
></svg-instagram-loader>
```

##### Code Component

```html
<svg-code-loader
  animate="1"
></svg-code-loader>
```

###### Additional Options

| Option | Type | Default | Description |
|---|---|---|---|
| `max-code-cuhnks` | Number | `5` | _Optional._ Number of chunks in a line. |

##### List Component

```html
<svg-list-loader
  animate="1"
  corner-radius="3"
></svg-list-loader>
```

###### Additional Options

| Option | Type | Default | Description |
|---|---|---|---|
| `bullets` | Boolean | `false` | _Optional._ Activate bullets with `true`, `1`, `any`. |
| `bullets-as-squares` | Boolean | `false` | _Optional._ Activate rendering bullets as squares with `true`, `1`, `any`. |
| `bullet-radius` | Number | `5` | _Optional._ Set the radius of the list's bullets. |

##### Bullet list Style

```html
<svg-list-loader
  animate="1"
  bullets="1"
  bullets-as-squares="1"
></svg-list-loader>
```

### Custom Style

```html
<svg-content-loader
  animate="1"
>
  <rect x="0" y="0" rx="3" ry="3" width="60" height="60"></rect>

  <rect x="70" y="15" rx="3" ry="3" width="250" height="7"></rect>
  <rect x="70" y="37" rx="3" ry="3" width="200" height="7"></rect>

  <rect x="0" y="75" rx="3" ry="3" width="320" height="7"></rect>
  <rect x="0" y="92" rx="3" ry="3" width="320" height="7"></rect>
</svg-content-loader>
```

### Extending component

#### Javascript Class

Let's say `./resources/elements/custom-loader.js`.

```js
import { bindable, containerless, customElement, inlineView } from 'aurelia-templating';

import { SvgContentLoader } from 'aurelia-content-loader/content-loader';
import { template } from 'aurelia-content-loader/template';

/** @var {String} */
const divTemplate = '';

/** @var {String} */
const svgTemplate = `<rect x="0" y="0" rx="3" ry="3" width="60" height="60"></rect>

<rect x="70" y="15" rx="3" ry="3" width="250" height="7"></rect>
<rect x="70" y="37" rx="3" ry="3" width="200" height="7"></rect>

<rect x="0" y="75" rx="3" ry="3" width="320" height="7"></rect>
<rect x="0" y="92" rx="3" ry="3" width="320" height="7"></rect>`;

/**
 * 
 */
@containerless
@customElement('svg-custom-loader')
@inlineView(template(divTemplate, svgTemplate))
export class SvgCustomLoader extends SvgContentLoader { }
```

#### Importing new component

Add to `./resources/index.js`.

```js
import { PLATFORM } from 'aurelia-pal';

export function configure(aurelia) {
  aurelia.globalResources(PLATFORM.moduleName('resources/elements/custom-loader'));
}

```

#### Using within HTML Templates

```html
<svg-custom-loader
  animate="1"
></svg-custom-loader>
```

## Similar packages

- [React](https://github.com/danilowoz/react-content-loader)
- [React Native](https://github.com/virusvn/react-native-svg-animated-linear-gradient);
- [Preact](https://github.com/bonitasoft/preact-content-loader);
- Vue.js: [vue-content-loading](https://github.com/LucasLeandro1204/vue-content-loading), [vue-content-loader](https://github.com/egoist/vue-content-loader);
- [Angular](https://github.com/Gbuomprisco/ngx-content-loading).

## Development

Fork the repo then clone it

`$ git clone git@github.com:dragoscirjan/aurelia-content-loader-dev.git && cd aurelia-content-loader`

`yarn global add gulp-cli` (or `$ npm install --global gulp-cli`): Install Gulp cli tool.

`$ yarn` (or `$ npm i`): Install the dependencies;

`$ yarn build` (or `$ npm run build`): Build to production;

`$ yarn dev`: Run the docz to see your changes;

> Momentarely I do not use the testing environment. I'm using [this project](github.com:dragoscirjan/aurelia-content-loader-dev) to develop. You're all invited to help with the unit tests, if you wish to.

`$ yarn test`: Run all tests: type checking and unit tests;

`$ yarn test:watch`: Watch unit tests;

`$ yarn tsc`: Typescript checking;

`$ yarn tsc:watch`: Typescript checking with watching;


## License

[MIT](https://github.com/dragoscirjan/aurelia-content-loader/blob/master/LICENSE)
