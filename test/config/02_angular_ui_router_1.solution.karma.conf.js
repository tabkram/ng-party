// Karma configuration
// Generated on Sun May 29 2016 02:07:07 GMT+0200 (CEST)
var common = require('./common.karma.conf.js');

module.exports = function(config) {
  common(config);
  config.set({

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
  })
}
