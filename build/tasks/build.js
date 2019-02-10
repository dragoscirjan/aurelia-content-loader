const assign = Object.assign || require('object.assign');
const { clean } = require('./clean');
const compilerOptions = require('../babel-options');
const to5 = require('gulp-babel');
const paths = require('../paths');
const { dest, series, src } = require('gulp');

const buildHtml = function() {
  return src(paths.html)
    .pipe(dest(paths.output + 'es2015/'))
    .pipe(dest(paths.output + 'commonjs/'))
    .pipe(dest(paths.output + 'amd/'))
    .pipe(dest(paths.output + 'system/'));
};

const buildCss = function() {
  return src(paths.css)
    .pipe(dest(paths.output + 'es2015/'))
    .pipe(dest(paths.output + 'commonjs/'))
    .pipe(dest(paths.output + 'amd/'))
    .pipe(dest(paths.output + 'system/'));
};

const buildEs2015 = function() {
  return src(paths.source)
    .pipe(to5(assign({}, compilerOptions.es2015())))
    .pipe(dest(paths.output + 'es2015/'));
};

const buildCommonjs = function() {
  return src(paths.source)
    .pipe(to5(assign({}, compilerOptions.commonjs())))
    .pipe(dest(paths.output + 'commonjs/'));
};

const buildAmd = function() {
  return src(paths.source)
    .pipe(to5(assign({}, compilerOptions.amd())))
    .pipe(dest(paths.output + 'amd/'));
};

const buildSystem = function() {
  return src(paths.source)
    .pipe(to5(assign({}, compilerOptions.system())))
    .pipe(dest(paths.output + 'system/'));
};

exports.build = buildEs2015;
exports.build = series(clean, buildHtml, buildCss, buildEs2015, buildCommonjs, buildAmd, buildSystem);
