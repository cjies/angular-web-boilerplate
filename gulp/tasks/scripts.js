'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var plumber      = require('gulp-plumber');
var concat       = require('gulp-concat');
var ngmin        = require('gulp-ngmin');
var uglify       = require('gulp-uglify');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');

gulp.task('scripts', function () {
  return gulp.src(config.scripts.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'JS');
      this.emit('end');
    }}))
    .pipe(concat(config.scripts.output))
    .pipe(gulpif(global.isProd, ngmin() )) // Angular Minify
    .pipe(gulpif(global.isProd, uglify({mangle: false}) )) // Uglify
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(browserSync.stream({ once: true }));
});
