
const { build } = require('./build/tasks/build');
const { buildDevEnv, updatOwnDeps } = require('./build/tasks/clean');
const { clean } = require('./build/tasks/clean');
const { cover, tdd, test } = require('./build/tasks/test');
const { doc, docGenerate } = require('./build/tasks/doc');
const { lint } = require('./build/tasks/lint');
const { bumpVersion, changelog, prepareRelease } = require('./build/tasks/prepare-release');
const { series } = require('gulp');

exports.build = build;
exports['build-dev-env'] = buildDevEnv;
exports.clean = clean;
exports.default = series(clean);
exports.doc = series(docGenerate, doc);
exports['doc-generate'] = docGenerate;
exports.lint = lint;
exports['updat-own-deps'] = updatOwnDeps;

// prepare-release
exports['bump-version'] = bumpVersion;
exports.changelog = changelog;
exports['prepare-release'] = prepareRelease;

// test
exports.cover = cover;
exports.tdd = tdd;
exports.test = test;
