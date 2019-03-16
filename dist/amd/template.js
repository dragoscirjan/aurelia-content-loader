define(['exports'], function(_exports) {
  'use strict';

  Object.defineProperty(_exports, '__esModule', {
    value: true
  });
  _exports.template = _exports.defaultSvgTemplate = _exports.defaultDivTemplate = void 0;
  var defaultDivTemplate = '<slot></slot>';
  _exports.defaultDivTemplate = defaultDivTemplate;
  var defaultSvgTemplate = '';
  _exports.defaultSvgTemplate = defaultSvgTemplate;

  var template = function template(divTemplate, svgTemplate) {
    return (
      '<template>\n  <div\n    animate.bind="animate"\n    class="svg-loader"\n    class.bind="cssClass"\n    style.bind="cssStyle"\n  >\n    <div\n      class="svg-loader__inner"\n      class.bind="cssClassInner"\n      id.bind="containerId"\n      style.bind="cssStyleInner"\n    >\n      ' +
      divTemplate +
      '\n    </div>\n    <svg\n      baseProfile="full"\n      direction.bind="svgDirection"\n      height.bind="0"\n      preserveAspectRatio.bind="svgPreserveAspectRatio"\n      version="1.1"\n      width.bind="width"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <clipPath id.bind="svgId">' +
      svgTemplate +
      '</clipPath>\n    </svg>\n  </div>\n</template>'
    );
  };

  _exports.template = template;
});
