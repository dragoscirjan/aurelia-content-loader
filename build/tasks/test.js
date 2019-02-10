const Karma = require('karma').Server;

/**
 * Run test once and exit
 */
exports.test = function(done) {
  new Karma({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true
  }, done).start();
};

/**
 * Watch for file changes and re-run tests on each change
 */
exports.tdd = function(done) {
  new Karma({
    configFile: __dirname + '/../../karma.conf.js'
  }, done).start();
};

/**
 * Run test once with code coverage and exit
 */
exports.cover = function(done) {
  new Karma({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true,
    reporters: ['coverage'],
    preprocessors: {
      'test/**/*.js': ['babel'],
      'src/**/*.js': ['babel', 'coverage']
    },
    coverageReporter: {
      includeAllSources: true,
      instrumenters: {
        isparta: require('isparta')
      },
      instrumenter: {
        'src/**/*.js': 'isparta'
      },
      reporters: [
        { type: 'html', dir: 'coverage' },
        { type: 'text' }
      ]
    }
  }, done).start();
};
