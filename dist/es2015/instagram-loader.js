var _dec, _dec2, _class;

import { bindable, containerless, customElement, inlineView } from 'aurelia-templating';

import { SvgContentLoader } from './content-loader';
import { template } from './template';

const divTemplate = '';

const svgTemplate = `<circle if.bind="imageAsCircle" cx.bind="imageRadius" cy.bind="imageRadius" r.bind="imageRadius" />
<rect if.bind="!imageAsCircle" x="0" y="0" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="imageDiameter" height.bind="imageDiameter" />

<rect x="\${imageDiameter + 10}" y="\${titleLineSpace}" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="firstTitleLineWidth" height.bind="lineHeight" />
<rect x="\${imageDiameter + 10}" y="\${titleLineSpace * 2 + lineHeight}" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="seccondTitleLineWidth" height.bind="lineHeight" />

<rect x="0" y.bind="instagramImageY" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="width" height.bind="instagramImageHeight" />`;

export let SvgInstagramLoader = (_dec = customElement('svg-instagram-loader'), _dec2 = inlineView(template(divTemplate, svgTemplate)), containerless(_class = _dec(_class = _dec2(_class = class SvgInstagramLoader extends SvgContentLoader {
  attached(...args) {
    super.attached && super.attached(...args);

    this.addClass('svg-loader__inner--instagram');
  }

  get instagramImageY() {
    return this.imageDiameter + 20;
  }

  get instagramImageHeight() {
    let height = this.height - this.instagramImageY;
    if (height <= 0 && !this.logged) {
      console.warn('Instagram loader height too small.');
      this.logged = false;
    }
    return height < 0 ? 0 : height;
  }

  get titleLineSpace() {
    return Math.floor((this.imageDiameter - 2 * this.lineHeight) / 3);
  }

  get firstTitleLineWidth() {
    return Math.floor(this.width - this.imageDiameter - 10);
  }

  get seccondTitleLineWidth() {
    return Math.floor(this.firstTitleLineWidth * 0.8);
  }
}) || _class) || _class) || _class);