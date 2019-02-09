import { bindable, containerless, customElement, inlineView } from 'aurelia-templating';

import { SvgContentLoader } from './content-loader';
import { template } from './template';

/** @var {String} */
const divTemplate = '';

/** @var {String} */
const svgTemplate = `<rect repeat.for="codeRange of codeRanges()" x="0" y.bind="lineY($index)" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="width" height.bind="lineHeight">
  <rect repeat.for="range of codeRange" x.bind="range.start" y.bind="lineY($parent.$index)" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="range.length" height.bind="lineHeight"/>
</rect>`;

/**
 * 
 */
@containerless
@customElement('svg-code-loader')
@inlineView(template(divTemplate, svgTemplate))
export class SvgCodeLoader extends SvgContentLoader {
  /**
   * @var {Number}
   */
  @bindable maxCodeChunks = 3;
  /**
   * Attached Event
   */
  attached(...args) {
    super.attached && super.attached(...args);

    let clipPath = this.element.querySelector('clipPath');
    let rects = Array.prototype.slice.call(this.element.querySelectorAll('clipPath > rect'));
    clipPath.innerHTML = rects.map(rect => rect.innerHTML).join('');

    this.addClass('svg-loader__inner--code');
  }
  /**
   * https://stackoverflow.com/questions/8495687/split-array-into-chunks
   * @return {Array{Array}}
   */
  codeRanges() {
    return this.lineRange.map(() => {
      let chunkNr = Math.ceil(Math.random() * 5);
      let chunkRange = this.arrayRangeFromNumber(chunkNr)
        .map(() => Math.ceil(Math.random() * this.width))
        .sort((a, b) => a - b);
      return chunkRange.map((value, i) => {
        if (i > 0) {
          let length = value - chunkRange[i - 1] - this.lineHeight;
          return {
            start: chunkRange[i - 1] + this.lineHeight,
            length: length > 0 ? length : 0
          };
        }
        return {
          start: 0,
          length: value
        };
      });
    });
  }
}
