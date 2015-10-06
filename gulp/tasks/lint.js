'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var jshint       = require('gulp-jshint');
var eslint       = require('gulp-eslint');
var handleErrors = require('../util/handleErrors');

gulp.task('lint', function() {
  return gulp.src([config.scripts.src, '!app/js/templates.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('eslint', function() {
  return gulp.src(config.scripts.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Eslint');
      this.emit('end');
    }}))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});