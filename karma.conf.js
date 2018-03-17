var webpackConfig = require('./webpack.test');

module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine'],
      exclude: [
      ],
      files: [
        {pattern: './test/main.js', watched: false}
      ],
      preprocessors: {
        './test/main.js': ['webpack', 'sourcemap']
      },
      webpack: webpackConfig,
      reporters: ['progress'],
      webpackMiddleware: {
        stats: 'errors-only'
      },
      webpackServer: {
        noInfo: true
      },
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: false,
      browsers: ['Chrome'],
      singleRun: true,
      concurrency: Infinity
    })
  }