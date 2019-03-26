'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.template = exports.defaultSvgTemplate = exports.defaultDivTemplate = void 0;
var defaultDivTemplate = '<slot></slot>';
exports.defaultDivTemplate = defaultDivTemplate;
var defaultSvgTemplate = '';
exports.defaultSvgTemplate = defaultSvgTemplate;

var template = function template(divTemplate, svgTemplate) {
  return (
    '<template>\n  <div\n    animate.bind="animate"\n    class="svg-loader"\n    class.bind="cssClass"\n    style.bind="cssStyle"\n  >\n    <div\n      class="svg-loader__inner"\n      class.bind="cssClassInner"\n      id.bind="containerId"\n      style.bind="cssStyleInner"\n    >\n      ' +
    divTemplate +
    '\n    </div>\n    <svg\n      baseProfile="full"\n      direction.bind="svgDirection"\n      height.bind="0"\n      preserveAspectRatio.bind="svgPreserveAspectRatio"\n      version="1.1"\n      width.bind="width"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <clipPath id.bind="svgId">' +
    svgTemplate +
    '</clipPath>\n    </svg>\n  </div>\n</template>'
  );
};

exports.template = template;
