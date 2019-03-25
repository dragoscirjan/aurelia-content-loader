define([
  'exports',
  'aurelia-pal',
  './code-loader',
  './content-loader',
  './facebook-loader',
  './instagram-loader',
  './list-loader'
], function(_exports, _aureliaPal, _codeLoader, _contentLoader, _facebookLoader, _instagramLoader, _listLoader) {
  'use strict';

  Object.defineProperty(_exports, '__esModule', {
    value: true
  });
  _exports.configure = configure;
  Object.defineProperty(_exports, 'SvgCodeLoader', {
    enumerable: true,
    get: function get() {
      return _codeLoader.SvgCodeLoader;
    }
  });
  Object.defineProperty(_exports, 'SvgContentLoader', {
    enumerable: true,
    get: function get() {
      return _contentLoader.SvgContentLoader;
    }
  });
  Object.defineProperty(_exports, 'SvgFacebookLoader', {
    enumerable: true,
    get: function get() {
      return _facebookLoader.SvgFacebookLoader;
    }
  });
  Object.defineProperty(_exports, 'SvgInstagramLoader', {
    enumerable: true,
    get: function get() {
      return _instagramLoader.SvgInstagramLoader;
    }
  });
  Object.defineProperty(_exports, 'SvgListLoader', {
    enumerable: true,
    get: function get() {
      return _listLoader.SvgListLoader;
    }
  });
  _exports.Config = void 0;

  var Config = (function() {
    function Config() {}

    var _proto = Config.prototype;

    _proto.configure = function configure(aurelia) {
      aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./code-loader'));
      aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./content-loader'));
      aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./facebook-loader'));
      aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./instagram-loader'));
      aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./list-loader'));
    };

    return Config;
  })();

  _exports.Config = Config;

  function configure(aurelia, callback) {
    if (callback === void 0) {
      callback = null;
    }

    var config = aurelia.container.get(Config);

    if (typeof callback === 'function') {
      callback(config);
    }

    config.configure(aurelia);
  }
});
