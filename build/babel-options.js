const path = require('path');

const presets = [
  [
    '@babel/preset-env', {
      'targets': {
        'browsers': [ 'last 2 versions' ]
      },
      'loose': true
    }
  ]
];

exports.base = function() {
  return {
    filename: '',
    filenameRelative: '',
    sourceMap: true,
    sourceRoot: '',
    moduleRoot: path.resolve('src').replace(/\\/g, '/'),
    moduleIds: false,
    comments: false,
    compact: false,
    code: true,
    presets: presets,
    plugins: [
      '@babel/plugin-syntax-flow',
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      '@babel/plugin-transform-flow-strip-types'
    ]
  };
};

exports.commonjs = function() {
  const options = exports.base();
  options.plugins.push('@babel/plugin-transform-modules-commonjs');
  return options;
};

exports.amd = function() {
  const options = exports.base();
  options.plugins.push('@babel/plugin-transform-modules-amd');
  return options;
};

exports.system = function() {
  const options = exports.base();
  options.plugins.push('@babel/plugin-transform-modules-systemjs');
  return options;
};

exports.es2015 = function() {
  const options = exports.base();
  options.presets = presets;
  return options;
};
