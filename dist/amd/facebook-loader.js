define(['exports', 'aurelia-templating', './content-loader', './template'], function(
  _exports,
  _aureliaTemplating,
  _contentLoader,
  _template
) {
  'use strict';

  Object.defineProperty(_exports, '__esModule', {
    value: true
  });
  _exports.SvgFacebookLoader = void 0;

  var _dec, _dec2, _class;

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

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var divTemplate = '';
  var svgTemplate =
    '<circle if.bind="imageAsCircle" cx.bind="imageRadius" cy.bind="imageRadius" r.bind="imageRadius" />\n<rect if.bind="!imageAsCircle" x="0" y="0" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="imageDiameter" height.bind="imageDiameter" />\n\n<rect x="${imageDiameter + 10}" y="${titleLineSpace}" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="firstTitleLineWidth" height.bind="lineHeight" />\n<rect x="${imageDiameter + 10}" y="${titleLineSpace * 2 + lineHeight}" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="seccondTitleLineWidth" height.bind="lineHeight" />\n\n<rect\n  repeat.for="i of lineRange"\n  x="0"\n  y="${lineY(i)}"\n  rx.bind="cornerRadius"\n  ry.bind="cornerRadius"\n  width="${lineWidth}"\n  height.bind="lineHeight"\n/>';
  var SvgFacebookLoader = ((_dec = (0, _aureliaTemplating.customElement)('svg-facebook-loader')),
  (_dec2 = (0, _aureliaTemplating.inlineView)((0, _template.template)(divTemplate, svgTemplate))),
  (0, _aureliaTemplating.containerless)(
    (_class =
      _dec(
        (_class =
          _dec2(
            (_class = (function(_SvgContentLoader) {
              _inheritsLoose(SvgFacebookLoader, _SvgContentLoader);

              function SvgFacebookLoader() {
                return _SvgContentLoader.apply(this, arguments) || this;
              }

              var _proto = SvgFacebookLoader.prototype;

              _proto.attached = function attached() {
                var _SvgContentLoader$pro;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _SvgContentLoader.prototype.attached &&
                  (_SvgContentLoader$pro = _SvgContentLoader.prototype.attached).call.apply(
                    _SvgContentLoader$pro,
                    [this].concat(args)
                  );
                this.addClass('svg-loader__inner--facebook');
              };

              _proto.lineY = function lineY(i) {
                return this.imageDiameter + 10 + i * this.linePadding + (i - 1) * (this.linePadding + this.lineHeight);
              };

              _createClass(SvgFacebookLoader, [
                {
                  key: 'lineRange',
                  get: function get() {
                    var remainingHeight = this.height - this.imageDiameter - 10;

                    if (remainingHeight <= 0) {
                      console.warn("Facebook loader height too small. Can't add text lines.");
                      return this.arrayRangeFromNumber(1);
                    }

                    var completeLineHeight = this.lineHeight + 2 * this.linePadding;
                    var rangeLength = Math.floor(remainingHeight / completeLineHeight);
                    rangeLength = this.lineMaxNumber < rangeLength ? this.lineMaxNumber : rangeLength;
                    return this.arrayRangeFromNumber(rangeLength);
                  }
                },
                {
                  key: 'lineWidth',
                  get: function get() {
                    if (!this.lineWidthRandomize) {
                      return this.width;
                    }

                    return (this.width / 4) * 3 + (Math.random() * this.width) / 4;
                  }
                },
                {
                  key: 'titleLineSpace',
                  get: function get() {
                    return Math.floor((this.imageDiameter - 2 * this.lineHeight) / 3);
                  }
                },
                {
                  key: 'firstTitleLineWidth',
                  get: function get() {
                    return Math.floor(this.width - this.imageDiameter - 10);
                  }
                },
                {
                  key: 'seccondTitleLineWidth',
                  get: function get() {
                    return Math.floor(this.firstTitleLineWidth * 0.8);
                  }
                }
              ]);

              return SvgFacebookLoader;
            })(_contentLoader.SvgContentLoader))
          ) || _class)
      ) || _class)
  ) || _class);
  _exports.SvgFacebookLoader = SvgFacebookLoader;
});
