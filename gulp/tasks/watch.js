'use strict';

var config        = require('../config');
var gulp          = require('gulp');

gulp.task('watch', ['browserSync', 'server', 'vendor'], function() {

  gulp.watch(config.scripts.src, ['eslint']);
  gulp.watch(config.styles.src,  ['styles']);
  gulp.watch(config.scripts.src, ['scripts']);
  gulp.watch(config.locales.src, ['locales']);
  gulp.watch(config.images.src,  ['images']);
  gulp.watch(config.fonts.src,   ['fonts']);
  gulp.watch(config.views.src,   ['views']);

});