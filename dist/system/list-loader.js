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
    _descriptor2,
    _descriptor3,
    _temp,
    divTemplate,
    svgTemplate,
    SvgListLoader;

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

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
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
        '<rect if.bind="!bullets" repeat.for="i of lineRange" x="0" y="${lineY(i)}" rx.bind="cornerRadius" ry.bind="cornerRadius" width="${i % 3 === 0 ? randomWidth() : \'100%\'}" height.bind="lineHeight" />\n<rect if.bind="bullets" repeat.for="i of lineRange" x="25" y="${lineY(i)}" rx.bind="cornerRadius" ry.bind="cornerRadius" width="${randomWidth()}" height.bind="lineHeight" />\n\n<circle if.bind="bullets && !bulletsAsSquares" repeat.for="i of lineRange" cx="10" cy="${bulletY(i)}" r.bind="bulletRadius" />\n<rect if.bind="bullets && bulletsAsSquares" repeat.for="i of lineRange" x="10" y="${bulletSquareY(i)}" rx.bind="cornerRadius" ry.bind="cornerRadius" width.bind="bulletDiameter" height.bind="bulletDiameter" />\n';

      _export(
        'SvgListLoader',
        (SvgListLoader = ((_dec = customElement('svg-list-loader')),
        (_dec2 = inlineView(template(divTemplate, svgTemplate))),
        containerless(
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

                      _initializerDefineProperty(
                        _this,
                        'bulletsAsSquares',
                        _descriptor2,
                        _assertThisInitialized(_this)
                      );

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
                  })(SvgContentLoader)),
                  _temp)),
                  ((_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'bullets', [bindable], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function initializer() {
                      return false;
                    }
                  })),
                  (_descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'bulletsAsSquares', [bindable], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function initializer() {
                      return false;
                    }
                  })),
                  (_descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'bulletRadius', [bindable], {
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
        ) || _class))
      );
    }
  };
});
