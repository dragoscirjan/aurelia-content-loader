import { bindable, containerless, customElement, inlineView } from 'aurelia-templating';

import { SvgContentLoader } from './content-loader';
import { template } from './template';

/** @var {String} */
const divTemplate = '';

/** @var {String} */
const svgTemplate = `<rect if.bind="!bullets" repeat.for="i of lineRange" x="0" y="\${lineY(i)}" rx.bind="cornerRadius" ry.bind="cornerRadius" width="\${i % 3 === 0 ? randomWidth() : '100%'}" height.bind="lineHeight" />
<rect if.bind="bullets" repeat.for="i of lineRange" x="25" y="\${lineY(i)}" rx.bind="cornerRadius" ry.bind="cornerRadius" width="\${randomWidth()}" height.bind="lineHeight" />

<circle if.bind="bullets && !bulletsAsSquares" repeat.for="i of lineRange" cx="10" cy="\${bulletY(i)}" r.bind="bulletRadius" />
<rect if.bind="bullets && bulletsAsSquares" repeat.for="i of lineRange" x="10" y="\${bulletSquareY(i)}" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="bulletDiameter" height.bind="bulletDiameter" />
`;

/**
 * Content Loader class for list.
 */
@containerless
@customElement('svg-list-loader')
@inlineView(template(divTemplate, svgTemplate))
export class SvgListLoader extends SvgContentLoader {
  /**
   * @var {Boolean}
   */
  @bindable bullets = false;
  /**
   * @var {Boolean}
   */
  @bindable bulletsAsSquares = false;
  /**
   * @var {Number}
   */
  @bindable bulletRadius = 5;
  /**
   * Attached Event
   */
  attached(...args) {
    super.attached && super.attached(...args);

    this.addClass('svn-loader__inner--list');
  }
  /**
   * Getter - Compute diameter of bullet.
   * @return {Number}
   */
  get bulletDiameter() {
    return this.bulletRadius * 2;
  }
  /**
   * Compute possition of each list bullet.
   * @return {Number}
   */
  bulletY(i) {
    return this.lineY(i) + (this.bulletDiameter - this.lineHeight);
  }
  /**
   * Compute position of each list sqyare bullet.
   */
  bulletSquareY(i) {
    return this.lineY(i) - (this.bulletDiameter - this.lineHeight) / 2;
  }
  /**
   * Compute random width for the list text line.
   * @return {Number}
   */
  randomWidth() {
    return Math.random() * 16 + 70 + '%';
  }
}
