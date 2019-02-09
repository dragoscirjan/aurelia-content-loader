
const del = require('del');
const paths = require('../paths');

// deletes all files in the output path
exports.clean = function(cb) {
  return del([paths.output + '/**/*']);
};
