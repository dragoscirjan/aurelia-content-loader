'use strict';

exports.__esModule = true;
exports.SvgInstagramLoader = void 0;

var _aureliaTemplating = require('aurelia-templating');

var _contentLoader = require('./content-loader');

var _template = require('./template');

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
  '<circle if.bind="imageAsCircle" cx.bind="imageRadius" cy.bind="imageRadius" r.bind="imageRadius" />\n<rect if.bind="!imageAsCircle" x="0" y="0" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="imageDiameter" height.bind="imageDiameter" />\n\n<rect x="${imageDiameter + 10}" y="${titleLineSpace}" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="firstTitleLineWidth" height.bind="lineHeight" />\n<rect x="${imageDiameter + 10}" y="${titleLineSpace * 2 + lineHeight}" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="seccondTitleLineWidth" height.bind="lineHeight" />\n\n<rect x="0" y.bind="instagramImageY" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="width" height.bind="instagramImageHeight" />';
var SvgInstagramLoader = ((_dec = (0, _aureliaTemplating.customElement)('svg-instagram-loader')),
(_dec2 = (0, _aureliaTemplating.inlineView)((0, _template.template)(divTemplate, svgTemplate))),
(0, _aureliaTemplating.containerless)(
  (_class =
    _dec(
      (_class =
        _dec2(
          (_class = (function(_SvgContentLoader) {
            _inheritsLoose(SvgInstagramLoader, _SvgContentLoader);

            function SvgInstagramLoader() {
              return _SvgContentLoader.apply(this, arguments) || this;
            }

            var _proto = SvgInstagramLoader.prototype;

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
              this.addClass('svg-loader__inner--instagram');
            };

            _createClass(SvgInstagramLoader, [
              {
                key: 'instagramImageY',
                get: function get() {
                  return this.imageDiameter + 20;
                }
              },
              {
                key: 'instagramImageHeight',
                get: function get() {
                  var height = this.height - this.instagramImageY;

                  if (height <= 0 && !this.logged) {
                    console.warn('Instagram loader height too small.');
                    this.logged = false;
                  }

                  return height < 0 ? 0 : height;
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

            return SvgInstagramLoader;
          })(_contentLoader.SvgContentLoader))
        ) || _class)
    ) || _class)
) || _class);
exports.SvgInstagramLoader = SvgInstagramLoader;
