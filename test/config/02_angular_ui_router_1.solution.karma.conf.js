// Karma configuration
// Generated on Sun May 29 2016 02:07:07 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: '../../node_modules/angular/angular.min.js',  watch: false},
      {pattern: '../../node_modules/angular-mocks/angular-mocks.js',  watch: false},
      {pattern: '../../node_modules/angular-ui-router/release/angular-ui-router.min.js',  watch: false},

      //solution
      '../../src/03_angular_ui_router_2/**.js',
      '../../src/03_angular_ui_router_2/**/ngparty.module.js',
      '../../src/03_angular_ui_router_2/**/**.js',
      '../../src/03_angular_ui_router_2/**/**/**.js',

      //tests
      '../02_angular_ui_router_1/*.test.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "../../src/03_angular_ui_router_2/app/**/**.js": ["jshint",'coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // add plugin settings
    coverageReporter: {
      // type of file to output, use text to output to console
      type : 'lcov',
      // directory where coverage results are saved
      dir: '../results/coverage/'
      // if type is text or text-summary, you can set the file name
      // file: 'coverage.txt'
    },

    // add plugin settings
    junitReporter: {
      // location of results output file
      outputFile: '../results/junit-results.xml'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
