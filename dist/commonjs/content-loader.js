'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgContentLoader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaFramework = require('aurelia-framework');

var _uuidJs = require('uuid-js');

var _uuidJs2 = _interopRequireDefault(_uuidJs);

var _template = require('./template');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var CSS_CLASS_ANIMATED = 'svg-loader__inner--animated';

var SvgContentLoader = exports.SvgContentLoader = (_dec = (0, _aureliaTemplating.customElement)('svg-content-loader'), _dec2 = (0, _aureliaTemplating.inlineView)((0, _template.template)(_template.defaultDivTemplate, _template.defaultSvgTemplate)), _dec3 = (0, _aureliaFramework.inject)(Element), (0, _aureliaTemplating.containerless)(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
  function SvgContentLoader(element) {
    _classCallCheck(this, SvgContentLoader);

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

  SvgContentLoader.prototype.addClass = function addClass(value, element) {
    element = element || this.element.querySelector('div');
    var classes = (element.className || '').split(' ');
    classes.push(value);
    element.className = classes.join(' ');
    return;
  };

  SvgContentLoader.prototype.animateChanged = function animateChanged(newValue) {
    if (newValue) {
      this.addClass(CSS_CLASS_ANIMATED);
    } else {
      this.removeClass(CSS_CLASS_ANIMATED);
    }
  };

  SvgContentLoader.prototype.arrayRangeFromNumber = function arrayRangeFromNumber(length) {
    return Array(length).join(0).split(0).map(function (v, i) {
      return i + 1;
    });
  };

  SvgContentLoader.prototype.attached = function attached() {
    this.element = this.element.nodeType !== 8 ? this.element : this.element.previousElementSibling;

    this.animateChanged(this.animate);

    var div = this.element.querySelector('div');
    var svg = this.element.querySelector('clipPath');

    if (svg && div && div.innerHTML && div.innerHTML.trim().length) {
      svg.innerHTML = div.innerHTML;
      div.innerHTML = '';
      return;
    }
  };

  SvgContentLoader.prototype.bind = function bind() {
    this.svgId = 'svg-clip-path-' + _uuidJs2.default.create(4).toString();

    this.renderCssStyle();
    this.renderCssStyleInner();
  };

  SvgContentLoader.prototype.heightChanged = function heightChanged(newValue) {
    this.renderCssStyle();
  };

  SvgContentLoader.prototype.lineY = function lineY(i) {
    return i * this.linePadding + (i - 1) * (this.linePadding + this.lineHeight);
  };

  SvgContentLoader.prototype.removeClass = function removeClass(value, element) {
    element = element || this.element.querySelector('div');
    var classes = (element.className || '').split(' ').filter(function (v) {
      return v && v !== value;
    });
    element.className = classes.join(' ');
    return;
  };

  SvgContentLoader.prototype.renderCssStyle = function renderCssStyle() {
    this.cssStyle = [].join(' ');
  };

  SvgContentLoader.prototype.renderCssStyleInner = function renderCssStyleInner() {
    this.cssStyleInner = ['-webkit-clip-path: url(#' + this.svgId + ');', 'clip-path: url(#' + this.svgId + ');', '-webkit-animation-duration: ' + this.animateDuration + ';', 'animation-duration: ' + this.animateDuration + ';'].join(' ');
  };

  SvgContentLoader.prototype.widthChanged = function widthChanged(newValue) {
    this.renderCssStyleInner();
  };

  _createClass(SvgContentLoader, [{
    key: 'imageDiameter',
    get: function get() {
      return this.imageRadius * 2;
    }
  }, {
    key: 'lineRange',
    get: function get() {
      var completeLineHeight = this.lineHeight + 2 * this.linePadding;
      var rangeLength = Math.floor(this.height / completeLineHeight);
      rangeLength = this.lineMaxNumber < rangeLength ? this.lineMaxNumber : rangeLength;
      return this.arrayRangeFromNumber(rangeLength);
    }
  }]);

  return SvgContentLoader;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'animate', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'animateDuration', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return '1s';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'cornerRadius', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'cssClass', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'cssClassInner', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'imageRadius', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 30;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'imageAsCircle', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'lineHeight', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 7;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'lineMaxNumber', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 5;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'linePadding', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 5;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'lineWidthRandomize', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return '320';
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'height', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return '110';
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'svgDirection', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 'ltr';
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'svgPreserveAspectRatio', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 'none';
  }
})), _class2)) || _class) || _class) || _class) || _class);