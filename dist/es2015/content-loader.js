var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;

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
import { inject } from 'aurelia-framework';
import UUID from 'uuid-js';

import { defaultDivTemplate, defaultSvgTemplate, template } from './template';

const CSS_CLASS_ANIMATED = 'svg-loader__inner--animated';

export let SvgContentLoader = (_dec = customElement('svg-content-loader'), _dec2 = inlineView(template(defaultDivTemplate, defaultSvgTemplate)), _dec3 = inject(Element), containerless(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class SvgContentLoader {
  constructor(element) {
    _initDefineProp(this, 'animate', _descriptor, this);

    _initDefineProp(this, 'animateDuration', _descriptor2, this);

    _initDefineProp(this, 'cornerRadius', _descriptor3, this);

    _initDefineProp(this, 'cssClass', _descriptor4, this);

    _initDefineProp(this, 'cssClassInner', _descriptor5, this);

    _initDefineProp(this, 'imageRadius', _descriptor6, this);

    _initDefineProp(this, 'imageAsCircle', _descriptor7, this);

    _initDefineProp(this, 'lineHeight', _descriptor8, this);

    _initDefineProp(this, 'lineMaxNumber', _descriptor9, this);

    _initDefineProp(this, 'linePadding', _descriptor10, this);

    _initDefineProp(this, 'lineWidthRandomize', _descriptor11, this);

    _initDefineProp(this, 'width', _descriptor12, this);

    _initDefineProp(this, 'height', _descriptor13, this);

    _initDefineProp(this, 'svgDirection', _descriptor14, this);

    _initDefineProp(this, 'svgPreserveAspectRatio', _descriptor15, this);

    this.svgId = '';
    this.cssStyle = '';
    this.cssStyleInner = '';

    this.element = element;
  }

  addClass(value, element) {
    element = element || this.element.querySelector('div');
    let classes = (element.className || '').split(' ');
    classes.push(value);
    element.className = classes.join(' ');
    return;
  }

  animateChanged(newValue) {
    if (newValue) {
      this.addClass(CSS_CLASS_ANIMATED);
    } else {
      this.removeClass(CSS_CLASS_ANIMATED);
    }
  }

  arrayRangeFromNumber(length) {
    return Array(length).join(0).split(0).map((v, i) => i + 1);
  }

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

  bind(...args) {
    this.svgId = 'svg-clip-path-' + UUID.create(4).toString();

    this.renderCssStyle();
    this.renderCssStyleInner();
  }

  heightChanged(newValue) {
    this.renderCssStyle();
  }

  get imageDiameter() {
    return this.imageRadius * 2;
  }

  get lineRange() {
    let completeLineHeight = this.lineHeight + 2 * this.linePadding;
    let rangeLength = Math.floor(this.height / completeLineHeight);
    rangeLength = this.lineMaxNumber < rangeLength ? this.lineMaxNumber : rangeLength;
    return this.arrayRangeFromNumber(rangeLength);
  }

  lineY(i) {
    return i * this.linePadding + (i - 1) * (this.linePadding + this.lineHeight);
  }

  removeClass(value, element) {
    element = element || this.element.querySelector('div');
    let classes = (element.className || '').split(' ').filter(v => v && v !== value);
    element.className = classes.join(' ');
    return;
  }

  renderCssStyle() {
    this.cssStyle = [].join(' ');
  }

  renderCssStyleInner() {
    this.cssStyleInner = [`-webkit-clip-path: url(#${this.svgId});`, `clip-path: url(#${this.svgId});`, `-webkit-animation-duration: ${this.animateDuration};`, `animation-duration: ${this.animateDuration};`].join(' ');
  }

  widthChanged(newValue) {
    this.renderCssStyleInner();
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'animate', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'animateDuration', [bindable], {
  enumerable: true,
  initializer: function () {
    return '1s';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'cornerRadius', [bindable], {
  enumerable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'cssClass', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'cssClassInner', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'imageRadius', [bindable], {
  enumerable: true,
  initializer: function () {
    return 30;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'imageAsCircle', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'lineHeight', [bindable], {
  enumerable: true,
  initializer: function () {
    return 7;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'lineMaxNumber', [bindable], {
  enumerable: true,
  initializer: function () {
    return 5;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'linePadding', [bindable], {
  enumerable: true,
  initializer: function () {
    return 5;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'lineWidthRandomize', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'width', [bindable], {
  enumerable: true,
  initializer: function () {
    return '320';
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'height', [bindable], {
  enumerable: true,
  initializer: function () {
    return '110';
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'svgDirection', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'ltr';
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'svgPreserveAspectRatio', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'none';
  }
})), _class2)) || _class) || _class) || _class) || _class);