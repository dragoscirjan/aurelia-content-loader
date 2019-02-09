'use strict';

System.register(['aurelia-templating', './content-loader', './template'], function (_export, _context) {
  "use strict";

  var bindable, containerless, customElement, inlineView, SvgContentLoader, template, _createClass, _dec, _dec2, _class, divTemplate, svgTemplate, SvgFacebookLoader;

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

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      containerless = _aureliaTemplating.containerless;
      customElement = _aureliaTemplating.customElement;
      inlineView = _aureliaTemplating.inlineView;
    }, function (_contentLoader) {
      SvgContentLoader = _contentLoader.SvgContentLoader;
    }, function (_template) {
      template = _template.template;
    }],
    execute: function () {
      _createClass = function () {
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

      divTemplate = '';
      svgTemplate = '<circle if.bind="imageAsCircle" cx.bind="imageRadius" cy.bind="imageRadius" r.bind="imageRadius" />\n<rect if.bind="!imageAsCircle" x="0" y="0" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="imageDiameter" height.bind="imageDiameter" />\n\n<rect x="${imageDiameter + 10}" y="${titleLineSpace}" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="firstTitleLineWidth" height.bind="lineHeight" />\n<rect x="${imageDiameter + 10}" y="${titleLineSpace * 2 + lineHeight}" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="seccondTitleLineWidth" height.bind="lineHeight" />\n\n<rect\n  repeat.for="i of lineRange"\n  x="0"\n  y="${lineY(i)}"\n  rx.bind="cornerRadius"\n  ry.bind="cornerRadius"\n  width="${lineWidth}"\n  height.bind="lineHeight"\n/>';

      _export('SvgFacebookLoader', SvgFacebookLoader = (_dec = customElement('svg-facebook-loader'), _dec2 = inlineView(template(divTemplate, svgTemplate)), containerless(_class = _dec(_class = _dec2(_class = function (_SvgContentLoader) {
        _inherits(SvgFacebookLoader, _SvgContentLoader);

        function SvgFacebookLoader() {
          _classCallCheck(this, SvgFacebookLoader);

          return _possibleConstructorReturn(this, _SvgContentLoader.apply(this, arguments));
        }

        SvgFacebookLoader.prototype.attached = function attached() {
          var _SvgContentLoader$pro;

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _SvgContentLoader.prototype.attached && (_SvgContentLoader$pro = _SvgContentLoader.prototype.attached).call.apply(_SvgContentLoader$pro, [this].concat(args));

          this.addClass('svg-loader__inner--facebook');
        };

        SvgFacebookLoader.prototype.lineY = function lineY(i) {
          return this.imageDiameter + 10 + i * this.linePadding + (i - 1) * (this.linePadding + this.lineHeight);
        };

        _createClass(SvgFacebookLoader, [{
          key: 'lineRange',
          get: function get() {
            var remainingHeight = this.height - this.imageDiameter - 10;
            if (remainingHeight <= 0) {
              console.warn('Facebook loader height too small. Can\'t add text lines.');
              return this.arrayRangeFromNumber(1);
            }
            var completeLineHeight = this.lineHeight + 2 * this.linePadding;
            var rangeLength = Math.floor(remainingHeight / completeLineHeight);
            rangeLength = this.lineMaxNumber < rangeLength ? this.lineMaxNumber : rangeLength;
            return this.arrayRangeFromNumber(rangeLength);
          }
        }, {
          key: 'lineWidth',
          get: function get() {
            if (!this.lineWidthRandomize) {
              return this.width;
            }
            return this.width / 4 * 3 + Math.random() * this.width / 4;
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

        return SvgFacebookLoader;
      }(SvgContentLoader)) || _class) || _class) || _class));

      _export('SvgFacebookLoader', SvgFacebookLoader);
    }
  };
});