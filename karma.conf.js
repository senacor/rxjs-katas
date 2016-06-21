// Karma configuration
// Generated on Fri Oct 30 2015 22:10:10 GMT+0900 (JST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      //libs
      'node_modules/babel-polyfill/dist/polyfill.js',
      'lib/jquery-3.0.0.min.js',
      'lib/rx.all.js',
       //include common components
      'common/completeMonitor.js',
      'common/output.js',
      'common/summary.js',
      'common/wikipediaArticleAdapter.js',
      'common/wikipediaArticleAdapterMock.js',
      'common/wikipediaService.js',

      // async example
      'example/async/**/*.js',

      // rxjs examples
      'example/rxjs/create/create.js',
      //'example/rxjs/create/defer.js'
      //'example/rxjs/create/empty.js'
      //'example/rxjs/create/from.js'
      'example/rxjs/create/just.js'

      //'example/rxjs/filtering/distinct.js'
      //'example/rxjs/filtering/filter.js'
      //'example/rxjs/filtering/skip.js'
      //'example/rxjs/filtering/take.js'

      //'example/rxjs/transforming/map.js',
      //'example/rxjs/transforming/flatmap.js',
      //'example/rxjs/transforming/buffer.js',

      //'example/rxjs/combining/zip.js',
      //'example/rxjs/combining/merge.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      require('./lib')
    ],



    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity

  })
};
