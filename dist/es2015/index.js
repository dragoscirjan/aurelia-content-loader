'use strict';

exports.__esModule = true;
exports.configure = configure;
exports.Config = void 0;

var _aureliaPal = require('aurelia-pal');

var _codeLoader = require('./code-loader');

exports.SvgCodeLoader = _codeLoader.SvgCodeLoader;

var _contentLoader = require('./content-loader');

exports.SvgContentLoader = _contentLoader.SvgContentLoader;

var _facebookLoader = require('./facebook-loader');

exports.SvgFacebookLoader = _facebookLoader.SvgFacebookLoader;

var _instagramLoader = require('./instagram-loader');

exports.SvgInstagramLoader = _instagramLoader.SvgInstagramLoader;

var _listLoader = require('./list-loader');

exports.SvgListLoader = _listLoader.SvgListLoader;

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
