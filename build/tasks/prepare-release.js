const args = require('../args');
const bump = require('gulp-bump');
const changelog = require('conventional-changelog');
const { dest, src } = require('gulp');
const fs = require('fs');
const paths = require('../paths');
const { series } = require('gulp');

// utilizes the bump plugin to bump the
// semver for the repo
exports.bumpVersion = function() {
  return src(['./package.json'])
    .pipe(bump({type: args.bump})) //major|minor|patch|prerelease
    .pipe(dest('./'));
};

// generates the CHANGELOG.md file based on commit
// from git commit messages
exports.changelog = function(callback) {
  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

  return changelog({
    repository: pkg.repository.url,
    version: pkg.version,
    file: paths.doc + '/CHANGELOG.md'
  }, function(err, log) {
    fs.writeFileSync(paths.doc + '/CHANGELOG.md', log);
  });
};
