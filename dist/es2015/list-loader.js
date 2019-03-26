'use strict';

exports.__esModule = true;
exports.SvgListLoader = void 0;

var _aureliaTemplating = require('aurelia-templating');

var _contentLoader = require('./content-loader');

var _template = require('./template');

var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
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

var divTemplate = '';
var svgTemplate =
  '<rect if.bind="!bullets" repeat.for="i of lineRange" x="0" y="${lineY(i)}" rx.bind="cornerRadius" ry.bind="cornerRadius" width="${i % 3 === 0 ? randomWidth() : \'100%\'}" height.bind="lineHeight" />\n<rect if.bind="bullets" repeat.for="i of lineRange" x="25" y="${lineY(i)}" rx.bind="cornerRadius" ry.bind="cornerRadius" width="${randomWidth()}" height.bind="lineHeight" />\n\n<circle if.bind="bullets && !bulletsAsSquares" repeat.for="i of lineRange" cx="10" cy="${bulletY(i)}" r.bind="bulletRadius" />\n<rect if.bind="bullets && bulletsAsSquares" repeat.for="i of lineRange" x="10" y="${bulletSquareY(i)}" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="bulletDiameter" height.bind="bulletDiameter" />\n';
var SvgListLoader = ((_dec = (0, _aureliaTemplating.customElement)('svg-list-loader')),
(_dec2 = (0, _aureliaTemplating.inlineView)((0, _template.template)(divTemplate, svgTemplate))),
(0, _aureliaTemplating.containerless)(
  (_class =
    _dec(
      (_class =
        _dec2(
          (_class = ((_class2 = ((_temp = (function(_SvgContentLoader) {
            _inheritsLoose(SvgListLoader, _SvgContentLoader);

            function SvgListLoader() {
              var _this;

              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              _this = _SvgContentLoader.call.apply(_SvgContentLoader, [this].concat(args)) || this;

              _initializerDefineProperty(_this, 'bullets', _descriptor, _assertThisInitialized(_this));

              _initializerDefineProperty(_this, 'bulletsAsSquares', _descriptor2, _assertThisInitialized(_this));

              _initializerDefineProperty(_this, 'bulletRadius', _descriptor3, _assertThisInitialized(_this));

              return _this;
            }

            var _proto = SvgListLoader.prototype;

            _proto.attached = function attached() {
              var _SvgContentLoader$pro;

              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              _SvgContentLoader.prototype.attached &&
                (_SvgContentLoader$pro = _SvgContentLoader.prototype.attached).call.apply(
                  _SvgContentLoader$pro,
                  [this].concat(args)
                );
              this.addClass('svn-loader__inner--list');
            };

            _proto.bulletY = function bulletY(i) {
              return this.lineY(i) + (this.bulletDiameter - this.lineHeight);
            };

            _proto.bulletSquareY = function bulletSquareY(i) {
              return this.lineY(i) - (this.bulletDiameter - this.lineHeight) / 2;
            };

            _proto.randomWidth = function randomWidth() {
              return Math.random() * 16 + 70 + '%';
            };

            _createClass(SvgListLoader, [
              {
                key: 'bulletDiameter',
                get: function get() {
                  return this.bulletRadius * 2;
                }
              }
            ]);

            return SvgListLoader;
          })(_contentLoader.SvgContentLoader)),
          _temp)),
          ((_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'bullets', [_aureliaTemplating.bindable], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function initializer() {
              return false;
            }
          })),
          (_descriptor2 = _applyDecoratedDescriptor(
            _class2.prototype,
            'bulletsAsSquares',
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
          (_descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'bulletRadius', [_aureliaTemplating.bindable], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function initializer() {
              return 5;
            }
          }))),
          _class2))
        ) || _class)
    ) || _class)
) || _class);
exports.SvgListLoader = SvgListLoader;
