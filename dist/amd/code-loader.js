define(['exports', 'aurelia-templating', './content-loader', './template'], function (exports, _aureliaTemplating, _contentLoader, _template) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SvgCodeLoader = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
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

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

  var divTemplate = '';

  var svgTemplate = '<rect repeat.for="codeRange of codeRanges()" x="0" y.bind="lineY($index)" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="width" height.bind="lineHeight">\n  <rect repeat.for="range of codeRange" x.bind="range.start" y.bind="lineY($parent.$index)" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="range.length" height.bind="lineHeight"/>\n</rect>';

  var SvgCodeLoader = exports.SvgCodeLoader = (_dec = (0, _aureliaTemplating.customElement)('svg-code-loader'), _dec2 = (0, _aureliaTemplating.inlineView)((0, _template.template)(divTemplate, svgTemplate)), (0, _aureliaTemplating.containerless)(_class = _dec(_class = _dec2(_class = (_class2 = function (_SvgContentLoader) {
    _inherits(SvgCodeLoader, _SvgContentLoader);

    function SvgCodeLoader() {
      var _temp, _this, _ret;

      _classCallCheck(this, SvgCodeLoader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _SvgContentLoader.call.apply(_SvgContentLoader, [this].concat(args))), _this), _initDefineProp(_this, 'maxCodeChunks', _descriptor, _this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    SvgCodeLoader.prototype.attached = function attached() {
      var _SvgContentLoader$pro;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _SvgContentLoader.prototype.attached && (_SvgContentLoader$pro = _SvgContentLoader.prototype.attached).call.apply(_SvgContentLoader$pro, [this].concat(args));

      var clipPath = this.element.querySelector('clipPath');
      var rects = Array.prototype.slice.call(this.element.querySelectorAll('clipPath > rect'));
      clipPath.innerHTML = rects.map(function (rect) {
        return rect.innerHTML;
      }).join('');

      this.addClass('svg-loader__inner--code');
    };

    SvgCodeLoader.prototype.codeRanges = function codeRanges() {
      var _this2 = this;

      return this.lineRange.map(function () {
        var chunkNr = Math.ceil(Math.random() * 5);
        var chunkRange = _this2.arrayRangeFromNumber(chunkNr).map(function () {
          return Math.ceil(Math.random() * _this2.width);
        }).sort(function (a, b) {
          return a - b;
        });
        return chunkRange.map(function (value, i) {
          if (i > 0) {
            var length = value - chunkRange[i - 1] - _this2.lineHeight;
            return {
              start: chunkRange[i - 1] + _this2.lineHeight,
              length: length > 0 ? length : 0
            };
          }
          return {
            start: 0,
            length: value
          };
        });
      });
    };

    return SvgCodeLoader;
  }(_contentLoader.SvgContentLoader), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'maxCodeChunks', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 3;
    }
  })), _class2)) || _class) || _class) || _class);
});