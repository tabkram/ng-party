// Karma configuration
// Generated on Sun May 29 2016 02:07:07 GMT+0200 (CEST)
var common = require('./common.karma.conf.js');

module.exports = function(config) {
  common(config);
  config.set({

    // list of files / patterns to load in the browser
    files: [
      {pattern: 'node_modules/angular/angular.min.js',  watch: false},
      {pattern: 'node_modules/angular-mocks/angular-mocks.js',  watch: false},

      //excercise
      'src/00_angularfy/*.js',
      'src/00_angularfy/**/*.js',

      //solution
      //'src/01_angular_ui_router/*.js',
      //'src/01_angular_ui_router/**/*.js',

      //test files
      'test/00_angularfy/*.test.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    }
  })
}
