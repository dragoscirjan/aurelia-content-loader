'use strict';

System.register(['aurelia-pal', './content-loader'], function (_export, _context) {
  "use strict";

  var PLATFORM, SvgContentLoader, Config;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function configure(aurelia) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var config = aurelia.container.get(Config);

    if (typeof callback === 'function') {
      callback(config);
    }

    config.configure(aurelia);
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }, function (_contentLoader) {
      SvgContentLoader = _contentLoader.SvgContentLoader;
    }],
    execute: function () {
      _export('Config', Config = function () {
        function Config() {
          _classCallCheck(this, Config);
        }

        Config.prototype.configure = function configure(aurelia) {
          aurelia.globalResources(PLATFORM.moduleName('./content-loader'));
        };

        return Config;
      }());

      _export('Config', Config);

      _export('SvgCodeLoader', SvgCodeLoader);

      _export('SvgContentLoader', SvgContentLoader);

      _export('SvgFacebookLoader', SvgFacebookLoader);

      _export('SvgInstagramLoader', SvgInstagramLoader);

      _export('SvgListLoader', SvgListLoader);
    }
  };
});