'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var concat       = require('gulp-concat');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');

gulp.task('vendorScripts', function () {
  return gulp.src(config.vendor.scripts.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Vendor Script');
      this.emit('end');
    }}))
    .pipe(concat(config.vendor.scripts.output))
    .pipe(gulp.dest(config.vendor.scripts.dest))
    .pipe(browserSync.stream({ once: true }));
});

gulp.task('vendorStyles', function () {
  return gulp.src(config.vendor.styles.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Vendor Script');
      this.emit('end');
    }}))
    .pipe(concat(config.vendor.styles.output))
    .pipe(gulp.dest(config.vendor.styles.dest))
    .pipe(browserSync.stream({ once: true }));
});

gulp.task('vendor', ['vendorScripts', 'vendorStyles']);



