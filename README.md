# Aurelia Content Loader

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
        - [List Component](#list-component)
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
| `` | String |   | _Optional._ |
| `` | String |   | _Optional._ |

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

##### List Component

```html
<svg-list-loader
  animate="1"
  corner-radius="3"
></svg-list-loader>
```

![List Style](https://user-images.githubusercontent.com/4838076/36352948-b8931430-149e-11e8-9f4b-3f00bc444a6d.gif)

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

> TODO: 

`$ git clone git@github.com:YourUsername/aurelia-content-loader.git && cd aurelia-content-loader`

(or `$ npm install --global gulp-cli`): Install Gulp cli tool.

`$ yarn` (or `$ npm i`): Install the dependencies;

`$ yarn build` (or `$ npm run build`): Build to production;

`$ yarn dev`: Run the docz to see your changes;

`$ yarn test`: Run all tests: type checking and unit tests;

`$ yarn test:watch`: Watch unit tests;

`$ yarn tsc`: Typescript checking;

`$ yarn tsc:watch`: Typescript checking with watching;


## License

[MIT](https://github.com/dragoscirjan/aurelia-content-loader/blob/master/LICENSE)
