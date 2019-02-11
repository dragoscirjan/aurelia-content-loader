const args = require('../args');
const { build } = require('./build');
const { lint } = require('./lint');
const bump = require('gulp-bump');
const conventionalChangelog = require('conventional-changelog');
const { dest, src } = require('gulp');
const fs = require('fs');
const paths = require('../paths');
const { series } = require('gulp');

// utilizes the bump plugin to bump the
// semver for the repo

const bumpVersion = function() {
  return src(['./package.json'])
    .pipe(bump({type: args.bump})) //major|minor|patch|prerelease
    .pipe(dest('./'));
};

// generates the CHANGELOG.md file based on commit
// from git commit messages
const changelog = function(callback) {
  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

  return conventionalChangelog({
    repository: pkg.repository.url,
    version: pkg.version,
    file: paths.doc + '/CHANGELOG.md'
  }, function(err, log) {
    fs.writeFileSync(paths.doc + '/CHANGELOG.md', log);
  });
};

exports.bumpVersion = bumpVersion;
exports.changelog = changelog;
exports.prepareRelease = series(build, lint, bumpVersion, changelog);
