'use strict';

System.register(
  ['aurelia-pal', './code-loader', './content-loader', './facebook-loader', './instagram-loader', './list-loader'],
  function(_export, _context) {
    'use strict';

    var PLATFORM, SvgCodeLoader, SvgContentLoader, SvgFacebookLoader, SvgInstagramLoader, SvgListLoader, Config;

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

    _export('configure', configure);

    return {
      setters: [
        function(_aureliaPal) {
          PLATFORM = _aureliaPal.PLATFORM;
        },
        function(_codeLoader) {
          SvgCodeLoader = _codeLoader.SvgCodeLoader;
        },
        function(_contentLoader) {
          SvgContentLoader = _contentLoader.SvgContentLoader;
        },
        function(_facebookLoader) {
          SvgFacebookLoader = _facebookLoader.SvgFacebookLoader;
        },
        function(_instagramLoader) {
          SvgInstagramLoader = _instagramLoader.SvgInstagramLoader;
        },
        function(_listLoader) {
          SvgListLoader = _listLoader.SvgListLoader;
        }
      ],
      execute: function() {
        _export(
          'Config',
          (Config = (function() {
            function Config() {}

            var _proto = Config.prototype;

            _proto.configure = function configure(aurelia) {
              aurelia.globalResources(PLATFORM.moduleName('./code-loader'));
              aurelia.globalResources(PLATFORM.moduleName('./content-loader'));
              aurelia.globalResources(PLATFORM.moduleName('./facebook-loader'));
              aurelia.globalResources(PLATFORM.moduleName('./instagram-loader'));
              aurelia.globalResources(PLATFORM.moduleName('./list-loader'));
            };

            return Config;
          })())
        );

        _export('SvgCodeLoader', SvgCodeLoader);

        _export('SvgContentLoader', SvgContentLoader);

        _export('SvgFacebookLoader', SvgFacebookLoader);

        _export('SvgInstagramLoader', SvgInstagramLoader);

        _export('SvgListLoader', SvgListLoader);
      }
    };
  }
);
