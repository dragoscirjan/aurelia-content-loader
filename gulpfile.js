
const { clean } = require('./build/tasks/clean');
const { series } = require('gulp');

exports.clean = clean;

exports.default = series(clean);
