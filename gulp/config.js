'use strict';

module.exports = {

  'browserPort'  : 8100,
  'UIPort'       : 8101,
  'serverPort'   : 8102,

  // Sass with Compass
  'styles': {
    'src' : 'src/scss/**/*.scss',
    'dest': 'www/css',
    'sourcemap' : true,
    // Compass config
    'config': 'config.rb',
    'css': 'www/css',
    'sass': 'src/scss'
  },

  // JavaScript
  'scripts': {
    'src' : 'src/js/**/*.js',
    'dest': 'www/js',
    'output': 'app.js'
  },

  // Images
  'images': {
    'src' : 'src/img/**/*',
    'dest': 'www/img',
    'minify': true
  },

  // Fonts
  'fonts': {
    'src' : ['src/fonts/**/*'],
    'dest': 'www/fonts'
  },

  // Locales JSON
  'locales': {
    'src': 'src/locales/**/*.json',
    'dest': 'www/locales'
  },

  // Live Reload Server
  'webServer': {
    'livereload': true,
    'root': 'www',
    'directoryListing': true,
    'port': 5050
  },

  // Views
  'views': {
    'watch': [
      'www/index.html',
      'www/views/**/*.html'
    ],
    'src': 'www/views/**/*.html',
    'dest': 'www/views'
  },

  // Gzip
  'gzip': {
    'src': 'www/**/*.{html,xml,json,css,js,js.map,css.map}',
    'dest': 'www/',
    'options': {}
  },

  // Zip 
  'zip': {
    'src': ['**/*', 
            '!node_modules/**/*',
            '!.sass-cache/**/*',
            '!src/lib/**/*',
            '!*.sublime-workspace',
            '!*.sublime-project'],
    'dest': '/',
    'output': 'archive.zip',
    'options': {}
  },

  // Project Root
  'dist': {
    'root'  : 'www',
    'index' : 'www/index.html'
  },

  // Unit Test
  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js'
  },

  // Vendor
  'vendor': {
    'scripts': {
      'src': [
        'src/lib/jquery/dist/jquery.min.js',
        'src/lib/angular/angular.min.js',
        'src/lib/angular-animate/angular-animate.min.js',
        'src/lib/angular-sanitize/angular-sanitize.min.js',
        'src/lib/angular-translate/angular-translate.min.js',
        'src/lib/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
        'src/lib/angular-ui-router/release/angular-ui-router.min.js'
      ],
      'dest': 'www/js',
      'output': 'vendor.bundle.js'
    },
    'styles': {
      'src': [
        'src/lib/normalize-css/normalize.css'
      ],
      'dest': 'www/css',
      'output': 'vendor.bundle.css'
    }
  }

};
