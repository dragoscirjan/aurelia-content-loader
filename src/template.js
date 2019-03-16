/** @var {String} */
export const defaultDivTemplate = '<slot></slot>';

/** @var {String} */
export const defaultSvgTemplate = '';

/**
 * Template generator for all SVG Content Loaders
 * @param {String} divTemplate
 * @param {String} svgTemplate
 * @return {String}
 */
export const template = (divTemplate, svgTemplate) => `<template>
  <div
    animate.bind="animate"
    class="svg-loader"
    class.bind="cssClass"
    style.bind="cssStyle"
  >
    <div
      class="svg-loader__inner"
      class.bind="cssClassInner"
      id.bind="containerId"
      style.bind="cssStyleInner"
    >
      ${divTemplate}
    </div>
    <svg
      baseProfile="full"
      direction.bind="svgDirection"
      height.bind="0"
      preserveAspectRatio.bind="svgPreserveAspectRatio"
      version="1.1"
      width.bind="width"
      xmlns="http://www.w3.org/2000/svg"
    >
      <clipPath id.bind="svgId">${svgTemplate}</clipPath>
    </svg>
  </div>
</template>`;
