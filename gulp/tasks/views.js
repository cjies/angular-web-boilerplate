'use strict';

var config         = require('../config');
var gulp           = require('gulp');
var browserSync    = require('browser-sync');
var plumber        = require('gulp-plumber');
var handleErrors   = require('../util/handleErrors');

// var changed        = require('gulp-changed');
// var minifyHTML     = require('gulp-minify-html');
// var templateCache  = require('gulp-angular-templatecache');

// Views task
gulp.task('views', function() {

  // Angular Template Cache Version
    // return gulp.src(config.views.src)
    //   .pipe(templateCache({
    //     standalone: true
    //   }))
    //   .pipe(gulp.dest(config.views.dest))
    //   .pipe(browserSync.stream({ once: true }));

  // Watch Views File
  return gulp.src(config.views.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Views');
      this.emit('end');
    }}))
    // HTML minify
      // .pipe(changed(config.views.dest))
      // .pipe(minifyHTML({
      //   empty: true,
      //   conditionals: true,
      //   spare:true
      // }))
      // .pipe(gulp.dest(config.views.dest))
    .pipe(browserSync.stream({ once: true }));

});