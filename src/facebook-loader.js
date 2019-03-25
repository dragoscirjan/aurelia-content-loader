import { containerless, customElement, inlineView } from 'aurelia-templating';

import { SvgContentLoader } from './content-loader';
import { template } from './template';

/** @var {String} */
const divTemplate = '';

/** @var {String} */
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

/**
 * Content Loader class for Facebook post.
 */
@containerless
@customElement('svg-facebook-loader')
@inlineView(template(divTemplate, svgTemplate))
export class SvgFacebookLoader extends SvgContentLoader {
  /**
   * Attached Event
   */
  attached(...args) {
    super.attached && super.attached(...args);

    this.addClass('svg-loader__inner--facebook');
  }
  /**
   * Getter - generate an array meaning the line items to be rendered
   * @return {Number}
   */
  get lineRange() {
    let remainingHeight = this.height - this.imageDiameter - 10;
    if (remainingHeight <= 0) {
      console.warn("Facebook loader height too small. Can't add text lines."); // eslint-disable-line no-console
      return this.arrayRangeFromNumber(1);
    }
    let completeLineHeight = this.lineHeight + 2 * this.linePadding;
    let rangeLength = Math.floor(remainingHeight / completeLineHeight);
    rangeLength = this.lineMaxNumber < rangeLength ? this.lineMaxNumber : rangeLength;
    return this.arrayRangeFromNumber(rangeLength);
  }
  /**
   * Compute the Y position of the following line.
   * @param {Number} i
   * @return {Number}
   */
  lineY(i) {
    return this.imageDiameter + 10 + i * this.linePadding + (i - 1) * (this.linePadding + this.lineHeight);
  }
  /**
   * Getter - Compute the width of the line.
   * @return {Number}
   */
  get lineWidth() {
    if (!this.lineWidthRandomize) {
      return this.width;
    }
    return (this.width / 4) * 3 + (Math.random() * this.width) / 4;
  }
  /**
   * Getter - Compute the space between the title lines.
   * @return {Number}
   */
  get titleLineSpace() {
    return Math.floor((this.imageDiameter - 2 * this.lineHeight) / 3);
  }
  /**
   * Getter - Compute the width of the first title line.
   * @return {Number}
   */
  get firstTitleLineWidth() {
    return Math.floor(this.width - this.imageDiameter - 10);
  }
  /**
   * Getter - Compute the width of the seccond title line.
   * @return {Number}
   */
  get seccondTitleLineWidth() {
    return Math.floor(this.firstTitleLineWidth * 0.8);
  }
}
