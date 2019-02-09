'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgListLoader = exports.SvgInstagramLoader = exports.SvgFacebookLoader = exports.SvgContentLoader = exports.SvgCodeLoader = exports.Config = undefined;
exports.configure = configure;

var _aureliaPal = require('aurelia-pal');

var _contentLoader = require('./content-loader');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = exports.Config = function () {
  function Config() {
    _classCallCheck(this, Config);
  }

  Config.prototype.configure = function configure(aurelia) {
    aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./content-loader'));
  };

  return Config;
}();

function configure(aurelia) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var config = aurelia.container.get(Config);

  if (typeof callback === 'function') {
    callback(config);
  }

  config.configure(aurelia);
}

exports.SvgCodeLoader = SvgCodeLoader;
exports.SvgContentLoader = _contentLoader.SvgContentLoader;
exports.SvgFacebookLoader = SvgFacebookLoader;
exports.SvgInstagramLoader = SvgInstagramLoader;
exports.SvgListLoader = SvgListLoader;