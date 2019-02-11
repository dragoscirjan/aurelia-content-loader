
const { build } = require('./build/tasks/build');
const { buildDevEnv, updatOwnDeps } = require('./build/tasks/dev');
const { clean } = require('./build/tasks/clean');
const { cover, tdd, test } = require('./build/tasks/test');
const { doc, docGenerate } = require('./build/tasks/doc');
const { lint } = require('./build/tasks/lint');
const { bumpVersion, changelog, prepareRelease } = require('./build/tasks/prepare-release');
const { series } = require('gulp');

// build/tasks/clean
exports.clean = clean;

// build/tasks/build
exports.build = build;

// build/tasks/dev
exports['build-dev-env'] = buildDevEnv;
exports['update-own-deps'] = updatOwnDeps;

// build/tasks/doc
exports.doc = series(docGenerate, doc);
exports['doc-generate'] = docGenerate;

// build/tasks/lint
exports.lint = lint;

// build/tasks/prepare-release
exports['bump-version'] = bumpVersion;
exports.changelog = changelog;
exports['prepare-release'] = prepareRelease;

// build/tasks/test
exports.cover = cover;
exports.tdd = tdd;
exports.test = test;

// default
exports.default = series(clean, lint, build);
