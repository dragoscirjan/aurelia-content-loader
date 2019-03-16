'use strict';

System.register(['aurelia-templating', './content-loader', './template'], function(_export, _context) {
  'use strict';

  var bindable,
    containerless,
    customElement,
    inlineView,
    SvgContentLoader,
    template,
    _dec,
    _dec2,
    _class,
    _class2,
    _descriptor,
    _temp,
    divTemplate,
    svgTemplate,
    SvgCodeLoader;

  function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function(key) {
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
      Object['define' + 'Property'](target, property, desc);
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

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [
      function(_aureliaTemplating) {
        bindable = _aureliaTemplating.bindable;
        containerless = _aureliaTemplating.containerless;
        customElement = _aureliaTemplating.customElement;
        inlineView = _aureliaTemplating.inlineView;
      },
      function(_contentLoader) {
        SvgContentLoader = _contentLoader.SvgContentLoader;
      },
      function(_template) {
        template = _template.template;
      }
    ],
    execute: function() {
      divTemplate = '';
      svgTemplate =
        '<rect repeat.for="codeRange of codeRanges()" x="0" y.bind="lineY($index)" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="width" height.bind="lineHeight">\n  <rect repeat.for="range of codeRange" x.bind="range.start" y.bind="lineY($parent.$index)" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="range.length" height.bind="lineHeight"/>\n</rect>';

      _export(
        'SvgCodeLoader',
        (SvgCodeLoader = ((_dec = customElement('svg-code-loader')),
        (_dec2 = inlineView(template(divTemplate, svgTemplate))),
        containerless(
          (_class =
            _dec(
              (_class =
                _dec2(
                  (_class = ((_class2 = ((_temp = (function(_SvgContentLoader) {
                    _inheritsLoose(SvgCodeLoader, _SvgContentLoader);

                    function SvgCodeLoader() {
                      var _this;

                      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                      }

                      _this = _SvgContentLoader.call.apply(_SvgContentLoader, [this].concat(args)) || this;

                      _initializerDefineProperty(
                        _this,
                        'maxCodeChunks',
                        _descriptor,
                        _assertThisInitialized(_assertThisInitialized(_this))
                      );

                      return _this;
                    }

                    var _proto = SvgCodeLoader.prototype;

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
                      var clipPath = this.element.querySelector('clipPath');
                      var rects = Array.prototype.slice.call(this.element.querySelectorAll('clipPath > rect'));
                      clipPath.innerHTML = rects
                        .map(function(rect) {
                          return rect.innerHTML;
                        })
                        .join('');
                      this.addClass('svg-loader__inner--code');
                    };

                    _proto.codeRanges = function codeRanges() {
                      var _this2 = this;

                      return this.lineRange.map(function() {
                        var chunkNr = Math.ceil(Math.random() * 5);

                        var chunkRange = _this2
                          .arrayRangeFromNumber(chunkNr)
                          .map(function() {
                            return Math.ceil(Math.random() * _this2.width);
                          })
                          .sort(function(a, b) {
                            return a - b;
                          });

                        return chunkRange.map(function(value, i) {
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
                  })(SvgContentLoader)),
                  _temp)),
                  (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'maxCodeChunks', [bindable], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function initializer() {
                      return 3;
                    }
                  })),
                  _class2))
                ) || _class)
            ) || _class)
        ) || _class))
      );
    }
  };
});
