var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

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

const svgTemplate = `<rect if.bind="!bullets" repeat.for="i of lineRange" x="0" y="\${lineY(i)}" rx.bind="cornerRadius" ry.bind="cornerRadius" width="\${i % 3 === 0 ? randomWidth() : '100%'}" height.bind="lineHeight" />
<rect if.bind="bullets" repeat.for="i of lineRange" x="25" y="\${lineY(i)}" rx.bind="cornerRadius" ry.bind="cornerRadius" width="\${randomWidth()}" height.bind="lineHeight" />

<circle if.bind="bullets && !bulletsAsSquares" repeat.for="i of lineRange" cx="10" cy="\${bulletY(i)}" r.bind="bulletRadius" />
<rect if.bind="bullets && bulletsAsSquares" repeat.for="i of lineRange" x="10" y="\${bulletSquareY(i)}" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="bulletDiameter" height.bind="bulletDiameter" />
`;

export let SvgListLoader = (_dec = customElement('svg-list-loader'), _dec2 = inlineView(template(divTemplate, svgTemplate)), containerless(_class = _dec(_class = _dec2(_class = (_class2 = class SvgListLoader extends SvgContentLoader {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), _initDefineProp(this, 'bullets', _descriptor, this), _initDefineProp(this, 'bulletsAsSquares', _descriptor2, this), _initDefineProp(this, 'bulletRadius', _descriptor3, this), _temp;
  }

  attached(...args) {
    super.attached && super.attached(...args);

    this.addClass('svn-loader__inner--list');
  }

  get bulletDiameter() {
    return this.bulletRadius * 2;
  }

  bulletY(i) {
    return this.lineY(i) + (this.bulletDiameter - this.lineHeight);
  }

  bulletSquareY(i) {
    return this.lineY(i) - (this.bulletDiameter - this.lineHeight) / 2;
  }

  randomWidth() {
    return Math.random() * 16 + 70 + '%';
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'bullets', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'bulletsAsSquares', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'bulletRadius', [bindable], {
  enumerable: true,
  initializer: function () {
    return 5;
  }
})), _class2)) || _class) || _class) || _class);