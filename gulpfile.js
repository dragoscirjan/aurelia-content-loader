
const { build } = require('./build/tasks/build');
const { buildDevEnv, updatOwnDeps } = require('./build/tasks/clean');
const { clean } = require('./build/tasks/clean');
const { doc, docGenerate } = require('./build/tasks/doc');
const { lint } = require('./build/tasks/lint');
const { bumpVersion, changelog } = require('./build/tasks/prepare-release');
const { series } = require('gulp');

exports['bump-version'] = bumpVersion;
exports.build = build;
exports['build-dev-env'] = buildDevEnv;
exports.changelog = changelog;
exports.clean = clean;
exports.default = series(clean);
exports.doc = series(docGenerate, doc);
exports['doc-generate'] = docGenerate;
exports.lint = lint;
exports['prepare-release'] = series(
  build,
  lint,
  bumpVersion,
  changelog
);
exports['updat-own-deps'] = updatOwnDeps;

// test.js
