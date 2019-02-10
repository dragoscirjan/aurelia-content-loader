const { dest, series, src } = require('gulp');
const tools = require('aurelia-tools');
const paths = require('../paths');
const yuidoc = require('gulp-yuidoc');

const docGenerate = function() {
  return src(paths.source)
    .pipe(yuidoc.parser(null, 'api.json'))
    .pipe(yuidoc.reporter())
    .pipe(yuidoc.generator())
    .pipe(dest(paths.doc));
};

const doc = function() {
  tools.transformAPIModel(paths.doc);
};

exports['docGenerate'] = docGenerate;
exports.doc = series(docGenerate, doc);
