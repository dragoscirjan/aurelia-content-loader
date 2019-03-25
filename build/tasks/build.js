const assign = Object.assign || require('object.assign');
const { clean } = require('./clean');
const compilerOptions = require('../babel-options');
const path = require('path');
const paths = require('../paths');
const less = require('gulp-less');
const to5 = require('gulp-babel');
const { dest, series, src } = require('gulp');
// const uglifycss = require('gulp-uglifycss'); // not sure whether to apply it, yet

const buildHtml = function() {
  return src(paths.html)
    .pipe(dest(paths.output + 'es2015/'))
    .pipe(dest(paths.output + 'commonjs/'))
    .pipe(dest(paths.output + 'amd/'))
    .pipe(dest(paths.output + 'system/'));
};

const buildCss = function() {
  return src(paths.css)
    // .pipe(uglifycss())
    .pipe(dest(paths.output + 'es2015/'))
    .pipe(dest(paths.output + 'commonjs/'))
    .pipe(dest(paths.output + 'amd/'))
    .pipe(dest(paths.output + 'system/'));
  };
  
const buildLess = function() {
    return src(paths.less)
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      // .pipe(uglifycss())
      .pipe(dest(paths.output + 'es2015/'))
      .pipe(dest(paths.output + 'commonjs/'))
      .pipe(dest(paths.output + 'amd/'))
      .pipe(dest(paths.output + 'system/'));
   
}

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
exports.build = series(clean, buildHtml, buildCss, buildLess, buildEs2015, buildCommonjs, buildAmd, buildSystem);
