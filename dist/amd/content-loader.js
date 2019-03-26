define(['exports', 'aurelia-templating', 'aurelia-framework', 'uuid-js', './template'], function(
  _exports,
  _aureliaTemplating,
  _aureliaFramework,
  _uuidJs,
  _template
) {
  'use strict';

  Object.defineProperty(_exports, '__esModule', {
    value: true
  });
  _exports.SvgContentLoader = void 0;
  _uuidJs = _interopRequireDefault(_uuidJs);

  var _dec,
    _dec2,
    _dec3,
    _class,
    _class2,
    _descriptor,
    _descriptor2,
    _descriptor3,
    _descriptor4,
    _descriptor5,
    _descriptor6,
    _descriptor7,
    _descriptor8,
    _descriptor9,
    _descriptor10,
    _descriptor11,
    _descriptor12,
    _descriptor13,
    _descriptor14,
    _descriptor15,
    _temp;

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object.keys(descriptor).forEach(function(key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }
    desc = decorators
      .slice()
      .reverse()
      .reduce(function(desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);
    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
      Object.defineProperty(target, property, desc);
      desc = null;
    }
    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error(
      'Decorating class property failed. Please ensure that ' +
        'proposal-class-properties is enabled and set to use loose mode. ' +
        'To use proposal-class-properties in spec mode with decorators, wait for ' +
        'the next major version of decorators in stage 2.'
    );
  }

  var CSS_CLASS_ANIMATED = 'svg-loader__inner--animated';
  var SvgContentLoader = ((_dec = (0, _aureliaTemplating.customElement)('svg-content-loader')),
  (_dec2 = (0, _aureliaTemplating.inlineView)(
    (0, _template.template)(_template.defaultDivTemplate, _template.defaultSvgTemplate)
  )),
  (_dec3 = (0, _aureliaFramework.inject)(Element)),
  (0, _aureliaTemplating.containerless)(
    (_class =
      _dec(
        (_class =
          _dec2(
            (_class =
              _dec3(
                (_class = ((_class2 = ((_temp = (function() {
                  function SvgContentLoader(element) {
                    _initializerDefineProperty(this, 'animate', _descriptor, this);

                    _initializerDefineProperty(this, 'animateDuration', _descriptor2, this);

                    _initializerDefineProperty(this, 'cornerRadius', _descriptor3, this);

                    _initializerDefineProperty(this, 'cssClass', _descriptor4, this);

                    _initializerDefineProperty(this, 'cssClassInner', _descriptor5, this);

                    _initializerDefineProperty(this, 'imageRadius', _descriptor6, this);

                    _initializerDefineProperty(this, 'imageAsCircle', _descriptor7, this);

                    _initializerDefineProperty(this, 'lineHeight', _descriptor8, this);

                    _initializerDefineProperty(this, 'lineMaxNumber', _descriptor9, this);

                    _initializerDefineProperty(this, 'linePadding', _descriptor10, this);

                    _initializerDefineProperty(this, 'lineWidthRandomize', _descriptor11, this);

                    _initializerDefineProperty(this, 'width', _descriptor12, this);

                    _initializerDefineProperty(this, 'height', _descriptor13, this);

                    _initializerDefineProperty(this, 'svgDirection', _descriptor14, this);

                    _initializerDefineProperty(this, 'svgPreserveAspectRatio', _descriptor15, this);

                    this.svgId = '';
                    this.cssStyle = '';
                    this.cssStyleInner = '';
                    this.element = element;
                  }

                  var _proto = SvgContentLoader.prototype;

                  _proto.addClass = function addClass(value, element) {
                    element = element || this.element.querySelector('div');
                    var classes = (element.className || '').split(' ');
                    classes.push(value);
                    element.className = classes.join(' ');
                    return;
                  };

                  _proto.animateChanged = function animateChanged(newValue) {
                    if (newValue) {
                      this.addClass(CSS_CLASS_ANIMATED);
                    } else {
                      this.removeClass(CSS_CLASS_ANIMATED);
                    }
                  };

                  _proto.arrayRangeFromNumber = function arrayRangeFromNumber(length) {
                    return Array(length)
                      .join(0)
                      .split(0)
                      .map(function(v, i) {
                        return i + 1;
                      });
                  };

                  _proto.attached = function attached() {
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

                  _proto.bind = function bind() {
                    this.svgId = 'svg-clip-path-' + _uuidJs.default.create(4).toString();
                    this.renderCssStyle();
                    this.renderCssStyleInner();
                  };

                  _proto.heightChanged = function heightChanged(newValue) {
                    this.renderCssStyle();
                  };

                  _proto.lineY = function lineY(i) {
                    return i * this.linePadding + (i - 1) * (this.linePadding + this.lineHeight);
                  };

                  _proto.removeClass = function removeClass(value, element) {
                    element = element || this.element.querySelector('div');
                    var classes = (element.className || '').split(' ').filter(function(v) {
                      return v && v !== value;
                    });
                    element.className = classes.join(' ');
                    return;
                  };

                  _proto.renderCssStyle = function renderCssStyle() {
                    this.cssStyle = [].join(' ');
                  };

                  _proto.renderCssStyleInner = function renderCssStyleInner() {
                    this.cssStyleInner = [
                      '-webkit-clip-path: url(#' + this.svgId + ');',
                      'clip-path: url(#' + this.svgId + ');',
                      '-webkit-animation-duration: ' + this.animateDuration + ';',
                      'animation-duration: ' + this.animateDuration + ';'
                    ].join(' ');
                  };

                  _proto.widthChanged = function widthChanged(newValue) {
                    this.renderCssStyleInner();
                  };

                  _createClass(SvgContentLoader, [
                    {
                      key: 'imageDiameter',
                      get: function get() {
                        return this.imageRadius * 2;
                      }
                    },
                    {
                      key: 'lineRange',
                      get: function get() {
                        var completeLineHeight = this.lineHeight + 2 * this.linePadding;
                        var rangeLength = Math.floor(this.height / completeLineHeight);
                        rangeLength = this.lineMaxNumber < rangeLength ? this.lineMaxNumber : rangeLength;
                        return this.arrayRangeFromNumber(rangeLength);
                      }
                    }
                  ]);

                  return SvgContentLoader;
                })()),
                _temp)),
                ((_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'animate', [_aureliaTemplating.bindable], {
                  configurable: true,
                  enumerable: true,
                  writable: true,
                  initializer: function initializer() {
                    return false;
                  }
                })),
                (_descriptor2 = _applyDecoratedDescriptor(
                  _class2.prototype,
                  'animateDuration',
                  [_aureliaTemplating.bindable],
                  {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function initializer() {
                      return '1s';
                    }
                  }
                )),
                (_descriptor3 = _applyDecoratedDescriptor(
                  _class2.prototype,
                  'cornerRadius',
                  [_aureliaTemplating.bindable],
                  {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function initializer() {
                      return 0;
                    }
                  }
                )),
                (_descriptor4 = _applyDecoratedDescriptor(
                  _class2.prototype,
                  'cssClass',
                  [_aureliaTemplating.bindable],
                  {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function initializer() {
                      return '';
                    }
                  }
                )),
                (_descriptor5 = _applyDecoratedDescriptor(
                  _class2.prototype,
                  'cssClassInner',
                  [_aureliaTemplating.bindable],
                  {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function initializer() {
                      return '';
                    }
                  }
                )),
                (_descriptor6 = _applyDecoratedDescriptor(
                  _class2.prototype,
                  'imageRadius',
                  [_aureliaTemplating.bindable],
                  {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function initializer() {
                      return 30;
                    }
                  }
                )),
                (_descriptor7 = _applyDecoratedDescriptor(
                  _class2.prototype,
                  'imageAsCircle',
                  [_aureliaTemplating.bindable],
                  {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function initializer() {
                      return false;
                    }
                  }
                )),
                (_descriptor8 = _applyDecoratedDescriptor(
                  _class2.prototype,
                  'lineHeight',
                  [_aureliaTemplating.bindable],
                  {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function initializer() {
                      return 7;
                    }
                  }
                )),
                (_descriptor9 = _applyDecoratedDescriptor(
                  _class2.prototype,
                  'lineMaxNumber',
                  [_aureliaTemplating.bindable],
                  {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function initializer() {
                      return 5;
                    }
                  }
                )),
                (_descriptor10 = _applyDecoratedDescriptor(
                  _class2.prototype,
                  'linePadding',
                  [_aureliaTemplating.bindable],
                  {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function initializer() {
                      return 5;
                    }
                  }
                )),
                (_descriptor11 = _applyDecoratedDescriptor(
                  _class2.prototype,
                  'lineWidthRandomize',
                  [_aureliaTemplating.bindable],
                  {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function initializer() {
                      return false;
                    }
                  }
                )),
                (_descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_aureliaTemplating.bindable], {
                  configurable: true,
                  enumerable: true,
                  writable: true,
                  initializer: function initializer() {
                    return '320';
                  }
                })),
                (_descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'height', [_aureliaTemplating.bindable], {
                  configurable: true,
                  enumerable: true,
                  writable: true,
                  initializer: function initializer() {
                    return '110';
                  }
                })),
                (_descriptor14 = _applyDecoratedDescriptor(
                  _class2.prototype,
                  'svgDirection',
                  [_aureliaTemplating.bindable],
                  {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function initializer() {
                      return 'ltr';
                    }
                  }
                )),
                (_descriptor15 = _applyDecoratedDescriptor(
                  _class2.prototype,
                  'svgPreserveAspectRatio',
                  [_aureliaTemplating.bindable],
                  {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function initializer() {
                      return 'none';
                    }
                  }
                ))),
                _class2))
              ) || _class)
          ) || _class)
      ) || _class)
  ) || _class);
  _exports.SvgContentLoader = SvgContentLoader;
});
