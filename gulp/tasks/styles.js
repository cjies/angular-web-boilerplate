'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var plumber      = require('gulp-plumber');
var compass      = require('gulp-compass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;

gulp.task('styles', function () {

  var createSourcemap = !global.isProd || config.styles.prodSourcemap;

  return gulp.src(config.styles.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Compass');
      this.emit('end');
    }}))
    // .pipe(gulpif(createSourcemap, sourcemaps.init()))
    .pipe(compass({
      config_file: config.styles.config,
      sass: config.styles.sass,
      css: config.styles.css,
      sourcemap: createSourcemap,
      comments: false,
      environment: global.isProd ? 'production' : 'development'
    }))
    // .pipe(gulpif(
    //   createSourcemap,
    //   sourcemaps.write( global.isProd ? './' : null ))
    // )
    .pipe(gulp.dest(config.styles.dest))
    // .pipe(browserSync.stream({ once: true }));
    .pipe(reload({ stream:true }));

});
