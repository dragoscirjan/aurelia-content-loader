import { bindable, containerless, customElement, inlineView } from 'aurelia-templating';
import { inject } from 'aurelia-framework';
import UUID from 'uuid-js';

import { defaultDivTemplate, defaultSvgTemplate, template } from './template';

const CSS_CLASS_ANIMATED = 'svg-loader__inner--animated';

/**
 * Content Loader class for generic items.
 */
@containerless
@customElement('svg-content-loader')
@inlineView(template(defaultDivTemplate, defaultSvgTemplate))
@inject(Element)
export class SvgContentLoader {
  /**
   * Whether to animate the loader or not.
   * @var {Boolean}
   */
  @bindable animate = false;
  /**
   * @var {String}
   */
  @bindable animateDuration = '1s';
  /**
   * Usable only in extending classes.
   * @var {Number}
   */
  @bindable cornerRadius = 0;
  /**
   * @var {String}
   */
  @bindable cssClass = '';
  /**
   * @var {String}
   */
  @bindable cssClassInner = '';
  /**
   * Image Component Property. Image radius.
   * Usable only in extending classes.
   * @var {Number}
   */
  @bindable imageRadius = 30;
  /**
   * Image Component Property. Display image as a circle and not as a rect.
   * Usable only in extending classes.
   * @var {Boolean}
   */
  @bindable imageAsCircle = false;
  /**
   * Line/Rect Component Property. Height.
   * Usable only in extending classes.
   * @var {Number}
   */
  @bindable lineHeight = 7;
  /**
   * Line/Rect Component Property. Max number of lines.
   * Usable only in extending classes.
   * @var {Number}
   */
  @bindable lineMaxNumber = 5;
  /**
   * Line/Rect Component Property. Padding.
   * Usable only in extending classes.
   * @var {Number}
   */
  @bindable linePadding = 5;
  /**
   * Line/Rect Component Property. Randomize Line Width.
   * Usable only in extending classes.
   */
  @bindable lineWidthRandomize = false;
  /**
   * @var {Number}
   */
  @bindable width = '320';
  /**
   * @var {Number}
   */
  @bindable height = '110';
  /**
   * SVG Property. Direction
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/direction
   * @var {String}
   */
  @bindable svgDirection = 'ltr';
  /**
   * SVG Property. preserveAspectRatio
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio
   * @var {String}
   */
  @bindable svgPreserveAspectRatio = 'none';
  /**
   * @var {String}
   * @private
   */
  svgId = '';
  /**
   * @var {String}
   * @private
   */
  cssStyle = '';
  /**
   * @var {String}
   * @private
   */
  cssStyleInner = '';
  /**
   * Constructor
   * @param {HTMLElement} element
   */
  constructor(element) {
    this.element = element;
  }
  /**
   * Add a CSS class to a HTML element
   * @param {String} value
   * @param {Element} element
   */
  addClass(value, element) {
    element = element || this.element.querySelector('div');
    let classes = (element.className || '').split(' ');
    classes.push(value);
    element.className = classes.join(' ');
    return;
  }
  /**
   * Event Handler
   */
  animateChanged(newValue) {
    if (newValue) {
      this.addClass(CSS_CLASS_ANIMATED);
    } else {
      this.removeClass(CSS_CLASS_ANIMATED);
    }
  }
  /**
   * Converts a number 'n' into an array containing values from 1 to n
   * @param {Number} length
   * @return {Array}
   */
  arrayRangeFromNumber(length) {
    return Array(length)
      .join(0)
      .split(0)
      .map((v, i) => i + 1);
  }
  /**
   * Attached Event
   */
  attached(...args) {
    this.element = this.element.nodeType !== 8 ? this.element : this.element.previousElementSibling;

    this.animateChanged(this.animate);

    let div = this.element.querySelector('div');
    let svg = this.element.querySelector('clipPath');

    if (svg && div && div.innerHTML && div.innerHTML.trim().length) {
      svg.innerHTML = div.innerHTML;
      div.innerHTML = '';
      return;
    }
  }
  /**
   *  Bind Event
   */
  bind(...args) {
    this.svgId = 'svg-clip-path-' + UUID.create(4).toString();

    this.renderCssStyle();
    this.renderCssStyleInner();
  }
  /**
   * Event Handler
   */
  heightChanged(newValue) {
    this.renderCssStyle();
  }
  /**
   * Getter
   * Image Component Property. Display image as a circle and not as a rect.
   * Usable only in extending classes.
   * @return {Number}
   */
  get imageDiameter() {
    return this.imageRadius * 2;
  }
  /**
   * Getter - generate an array meaning the line items to be rendered.
   * @return {Number}
   */
  get lineRange() {
    let completeLineHeight = this.lineHeight + 2 * this.linePadding;
    let rangeLength = Math.floor(this.height / completeLineHeight);
    rangeLength = this.lineMaxNumber < rangeLength ? this.lineMaxNumber : rangeLength;
    return this.arrayRangeFromNumber(rangeLength);
  }
  /**
   * Compute the Y position of the following line.
   * @param {Number} i
   * @return {Number}
   */
  lineY(i) {
    return i * this.linePadding + (i - 1) * (this.linePadding + this.lineHeight);
  }
  /**
   * Remove a CSS class from a HTML element
   * @param {String} value
   * @param {Element} element
   */
  removeClass(value, element) {
    element = element || this.element.querySelector('div');
    let classes = (element.className || '').split(' ').filter(v => v && v !== value);
    element.className = classes.join(' ');
    return;
  }
  /**
   * Render the cssStyle variable according to bindable properties
   * @private
   */
  renderCssStyle() {
    this.cssStyle = [
      // `width: ${parseFloat(this.width) != this.width ? this.width : this.width + 'px'};`
    ].join(' ');
  }
  /**
   * Render the cssStyleInner variable according to bindable properties
   * @private
   */
  renderCssStyleInner() {
    this.cssStyleInner = [
      `-webkit-clip-path: url(#${this.svgId});`,
      `clip-path: url(#${this.svgId});`,
      `-webkit-animation-duration: ${this.animateDuration};`,
      `animation-duration: ${this.animateDuration};`
    ].join(' ');
  }
  /**
   * Event Handler
   */
  widthChanged(newValue) {
    this.renderCssStyleInner();
  }
}
