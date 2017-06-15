const webpack = require('./webpack.config.test');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'jasmine' ], //use the Jasmine test framework
    files: [
      'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js',
      './testContext.js' //just load this file
    ],
    preprocessors: {
      './testContext.js': [ 'webpack', 'sourcemap']  //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'progress', 'html', 'coverage' ], //report results in this format
    coverageReporter: {
        dir: 'coverage/',
        reporters: [
          {type: 'html'}
        ]
    },
    webpack,
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};
