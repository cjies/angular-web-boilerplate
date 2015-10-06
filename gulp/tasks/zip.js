'use strict';

var gulp   = require('gulp');
var zip    = require('gulp-zip');
var config = require('../config');

gulp.task('zip', function() {

  return gulp.src(config.zip.src)
    .pipe(zip(config.zip.output, config.zip.options))
    .pipe(gulp.dest(config.zip.dest));

});
