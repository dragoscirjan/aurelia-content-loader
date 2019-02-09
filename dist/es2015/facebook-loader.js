var _dec, _dec2, _class;

import { bindable, containerless, customElement, inlineView } from 'aurelia-templating';

import { SvgContentLoader } from './content-loader';
import { template } from './template';

const divTemplate = '';

const svgTemplate = `<circle if.bind="imageAsCircle" cx.bind="imageRadius" cy.bind="imageRadius" r.bind="imageRadius" />
<rect if.bind="!imageAsCircle" x="0" y="0" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="imageDiameter" height.bind="imageDiameter" />

<rect x="\${imageDiameter + 10}" y="\${titleLineSpace}" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="firstTitleLineWidth" height.bind="lineHeight" />
<rect x="\${imageDiameter + 10}" y="\${titleLineSpace * 2 + lineHeight}" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="seccondTitleLineWidth" height.bind="lineHeight" />

<rect
  repeat.for="i of lineRange"
  x="0"
  y="\${lineY(i)}"
  rx.bind="cornerRadius"
  ry.bind="cornerRadius"
  width="\${lineWidth}"
  height.bind="lineHeight"
/>`;

export let SvgFacebookLoader = (_dec = customElement('svg-facebook-loader'), _dec2 = inlineView(template(divTemplate, svgTemplate)), containerless(_class = _dec(_class = _dec2(_class = class SvgFacebookLoader extends SvgContentLoader {
  attached(...args) {
    super.attached && super.attached(...args);

    this.addClass('svg-loader__inner--facebook');
  }

  get lineRange() {
    let remainingHeight = this.height - this.imageDiameter - 10;
    if (remainingHeight <= 0) {
      console.warn('Facebook loader height too small. Can\'t add text lines.');
      return this.arrayRangeFromNumber(1);
    }
    let completeLineHeight = this.lineHeight + 2 * this.linePadding;
    let rangeLength = Math.floor(remainingHeight / completeLineHeight);
    rangeLength = this.lineMaxNumber < rangeLength ? this.lineMaxNumber : rangeLength;
    return this.arrayRangeFromNumber(rangeLength);
  }

  lineY(i) {
    return this.imageDiameter + 10 + i * this.linePadding + (i - 1) * (this.linePadding + this.lineHeight);
  }

  get lineWidth() {
    if (!this.lineWidthRandomize) {
      return this.width;
    }
    return this.width / 4 * 3 + Math.random() * this.width / 4;
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