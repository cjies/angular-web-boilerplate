'use strict';

var config  = require('../config');
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var jsonminify  = require('gulp-jsonminify');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');

gulp.task('locales', function () {
  return gulp.src(config.locales.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Locales');
      this.emit('end');
    }}))
    .pipe(jsonminify())
    .pipe(gulp.dest(config.locales.dest))
    .pipe(browserSync.stream({ once: true }));
});
