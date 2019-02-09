define(['exports', 'aurelia-templating', './content-loader', './template'], function (exports, _aureliaTemplating, _contentLoader, _template) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SvgListLoader = undefined;

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

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

  var divTemplate = '';

  var svgTemplate = '<rect if.bind="!bullets" repeat.for="i of lineRange" x="0" y="${lineY(i)}" rx.bind="cornerRadius" ry.bind="cornerRadius" width="${i % 3 === 0 ? randomWidth() : \'100%\'}" height.bind="lineHeight" />\n<rect if.bind="bullets" repeat.for="i of lineRange" x="25" y="${lineY(i)}" rx.bind="cornerRadius" ry.bind="cornerRadius" width="${randomWidth()}" height.bind="lineHeight" />\n\n<circle if.bind="bullets && !bulletsAsSquares" repeat.for="i of lineRange" cx="10" cy="${bulletY(i)}" r.bind="bulletRadius" />\n<rect if.bind="bullets && bulletsAsSquares" repeat.for="i of lineRange" x="10" y="${bulletSquareY(i)}" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="bulletDiameter" height.bind="bulletDiameter" />\n';

  var SvgListLoader = exports.SvgListLoader = (_dec = (0, _aureliaTemplating.customElement)('svg-list-loader'), _dec2 = (0, _aureliaTemplating.inlineView)((0, _template.template)(divTemplate, svgTemplate)), (0, _aureliaTemplating.containerless)(_class = _dec(_class = _dec2(_class = (_class2 = function (_SvgContentLoader) {
    _inherits(SvgListLoader, _SvgContentLoader);

    function SvgListLoader() {
      var _temp, _this, _ret;

      _classCallCheck(this, SvgListLoader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _SvgContentLoader.call.apply(_SvgContentLoader, [this].concat(args))), _this), _initDefineProp(_this, 'bullets', _descriptor, _this), _initDefineProp(_this, 'bulletsAsSquares', _descriptor2, _this), _initDefineProp(_this, 'bulletRadius', _descriptor3, _this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    SvgListLoader.prototype.attached = function attached() {
      var _SvgContentLoader$pro;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _SvgContentLoader.prototype.attached && (_SvgContentLoader$pro = _SvgContentLoader.prototype.attached).call.apply(_SvgContentLoader$pro, [this].concat(args));

      this.addClass('svn-loader__inner--list');
    };

    SvgListLoader.prototype.bulletY = function bulletY(i) {
      return this.lineY(i) + (this.bulletDiameter - this.lineHeight);
    };

    SvgListLoader.prototype.bulletSquareY = function bulletSquareY(i) {
      return this.lineY(i) - (this.bulletDiameter - this.lineHeight) / 2;
    };

    SvgListLoader.prototype.randomWidth = function randomWidth() {
      return Math.random() * 16 + 70 + '%';
    };

    _createClass(SvgListLoader, [{
      key: 'bulletDiameter',
      get: function get() {
        return this.bulletRadius * 2;
      }
    }]);

    return SvgListLoader;
  }(_contentLoader.SvgContentLoader), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'bullets', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'bulletsAsSquares', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'bulletRadius', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 5;
    }
  })), _class2)) || _class) || _class) || _class);
});