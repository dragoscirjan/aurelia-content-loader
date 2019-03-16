'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;
Object.defineProperty(exports, 'SvgCodeLoader', {
  enumerable: true,
  get: function get() {
    return _codeLoader.SvgCodeLoader;
  }
});
Object.defineProperty(exports, 'SvgContentLoader', {
  enumerable: true,
  get: function get() {
    return _contentLoader.SvgContentLoader;
  }
});
Object.defineProperty(exports, 'SvgFacebookLoader', {
  enumerable: true,
  get: function get() {
    return _facebookLoader.SvgFacebookLoader;
  }
});
Object.defineProperty(exports, 'SvgInstagramLoader', {
  enumerable: true,
  get: function get() {
    return _instagramLoader.SvgInstagramLoader;
  }
});
Object.defineProperty(exports, 'SvgListLoader', {
  enumerable: true,
  get: function get() {
    return _listLoader.SvgListLoader;
  }
});
exports.Config = void 0;

var _aureliaPal = require('aurelia-pal');

var _codeLoader = require('./code-loader');

var _contentLoader = require('./content-loader');

var _facebookLoader = require('./facebook-loader');

var _instagramLoader = require('./instagram-loader');

var _listLoader = require('./list-loader');

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

exports.Config = Config;

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
