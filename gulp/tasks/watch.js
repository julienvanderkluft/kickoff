var gulp         = require('gulp')
    browserSync  = require('browser-sync').create()
    watch        = require('gulp-watch');

var set          = require('../settings');

/* --
  gulp watch task
-- */

gulp.task('watch', ['build'], function() {
  browserSync.init({
    server: set.browsersync.server,
    files: set.browsersync.files,
    open: set.browsersync.open,
    notify: set.browsersync.notify
  });

  watch(set.copy.fonts, function () {
    gulp.start('fonts');
  });

  watch(set.templates.watch, function () {
    gulp.start('templates');
  });

  watch(set.styles.watch, function () {
    gulp.start('styles');
  });

  watch(set.scripts.watch, function () {
    gulp.start('scripts');
  });

  watch(set.images.src, function () {
    gulp.start('images');
  });
});
