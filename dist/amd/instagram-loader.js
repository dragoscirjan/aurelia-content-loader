define(['exports', 'aurelia-templating', './content-loader', './template'], function (exports, _aureliaTemplating, _contentLoader, _template) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SvgInstagramLoader = undefined;

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

  var _dec, _dec2, _class;

  var divTemplate = '';

  var svgTemplate = '<circle if.bind="imageAsCircle" cx.bind="imageRadius" cy.bind="imageRadius" r.bind="imageRadius" />\n<rect if.bind="!imageAsCircle" x="0" y="0" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="imageDiameter" height.bind="imageDiameter" />\n\n<rect x="${imageDiameter + 10}" y="${titleLineSpace}" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="firstTitleLineWidth" height.bind="lineHeight" />\n<rect x="${imageDiameter + 10}" y="${titleLineSpace * 2 + lineHeight}" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="seccondTitleLineWidth" height.bind="lineHeight" />\n\n<rect x="0" y.bind="instagramImageY" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="width" height.bind="instagramImageHeight" />';

  var SvgInstagramLoader = exports.SvgInstagramLoader = (_dec = (0, _aureliaTemplating.customElement)('svg-instagram-loader'), _dec2 = (0, _aureliaTemplating.inlineView)((0, _template.template)(divTemplate, svgTemplate)), (0, _aureliaTemplating.containerless)(_class = _dec(_class = _dec2(_class = function (_SvgContentLoader) {
    _inherits(SvgInstagramLoader, _SvgContentLoader);

    function SvgInstagramLoader() {
      _classCallCheck(this, SvgInstagramLoader);

      return _possibleConstructorReturn(this, _SvgContentLoader.apply(this, arguments));
    }

    SvgInstagramLoader.prototype.attached = function attached() {
      var _SvgContentLoader$pro;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _SvgContentLoader.prototype.attached && (_SvgContentLoader$pro = _SvgContentLoader.prototype.attached).call.apply(_SvgContentLoader$pro, [this].concat(args));

      this.addClass('svg-loader__inner--instagram');
    };

    _createClass(SvgInstagramLoader, [{
      key: 'instagramImageY',
      get: function get() {
        return this.imageDiameter + 20;
      }
    }, {
      key: 'instagramImageHeight',
      get: function get() {
        var height = this.height - this.instagramImageY;
        if (height <= 0 && !this.logged) {
          console.warn('Instagram loader height too small.');
          this.logged = false;
        }
        return height < 0 ? 0 : height;
      }
    }, {
      key: 'titleLineSpace',
      get: function get() {
        return Math.floor((this.imageDiameter - 2 * this.lineHeight) / 3);
      }
    }, {
      key: 'firstTitleLineWidth',
      get: function get() {
        return Math.floor(this.width - this.imageDiameter - 10);
      }
    }, {
      key: 'seccondTitleLineWidth',
      get: function get() {
        return Math.floor(this.firstTitleLineWidth * 0.8);
      }
    }]);

    return SvgInstagramLoader;
  }(_contentLoader.SvgContentLoader)) || _class) || _class) || _class);
});