var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { bindable, containerless, customElement, inlineView } from 'aurelia-templating';

import { SvgContentLoader } from './content-loader';
import { template } from './template';

const divTemplate = '';

const svgTemplate = `<rect repeat.for="codeRange of codeRanges()" x="0" y.bind="lineY($index)" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="width" height.bind="lineHeight">
  <rect repeat.for="range of codeRange" x.bind="range.start" y.bind="lineY($parent.$index)" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="range.length" height.bind="lineHeight"/>
</rect>`;

export let SvgCodeLoader = (_dec = customElement('svg-code-loader'), _dec2 = inlineView(template(divTemplate, svgTemplate)), containerless(_class = _dec(_class = _dec2(_class = (_class2 = class SvgCodeLoader extends SvgContentLoader {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), _initDefineProp(this, 'maxCodeChunks', _descriptor, this), _temp;
  }

  attached(...args) {
    super.attached && super.attached(...args);

    let clipPath = this.element.querySelector('clipPath');
    let rects = Array.prototype.slice.call(this.element.querySelectorAll('clipPath > rect'));
    clipPath.innerHTML = rects.map(rect => rect.innerHTML).join('');

    this.addClass('svg-loader__inner--code');
  }

  codeRanges() {
    return this.lineRange.map(() => {
      let chunkNr = Math.ceil(Math.random() * 5);
      let chunkRange = this.arrayRangeFromNumber(chunkNr).map(() => Math.ceil(Math.random() * this.width)).sort((a, b) => a - b);
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
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'maxCodeChunks', [bindable], {
  enumerable: true,
  initializer: function () {
    return 3;
  }
})), _class2)) || _class) || _class) || _class);