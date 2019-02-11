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

<rect x="0" y.bind="instagramImageY" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="width" height.bind="instagramImageHeight" />`;

/**
 * Content Loader class for Instagram post.
 */
@containerless
@customElement('svg-instagram-loader')
@inlineView(template(divTemplate, svgTemplate))
export class SvgInstagramLoader extends SvgContentLoader {
  /**
   * Attached Event
   */
  attached(...args) {
    super.attached && super.attached(...args);

    this.addClass('svg-loader__inner--instagram');
  }
  /**
   * @var {Number}
   */
  get instagramImageY() {
    return this.imageDiameter + 20;
  }
  /**
   * @return {Number}
   */
  get instagramImageHeight() {
    let height = this.height - this.instagramImageY;
    if (height <= 0 && !this.logged) {
      console.warn('Instagram loader height too small.'); // eslint-disable-line no-console
      this.logged = false;
    }
    return height < 0 ? 0 : height;
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
