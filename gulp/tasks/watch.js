var gulp         = require('gulp')
    browserSync  = require('browser-sync').create()
    watch        = require('gulp-watch');

var set          = require('../settings');

/* --
  gulp watch task

  # launch server
  - Local: http://localhost:3000
  - External: http://192.168.1.100:3000

  - Admin: http://localhost:3001
  - Admin External: http://192.168.1.100:3001
-- */

gulp.task('watch', ['build'], function() {
  browserSync.init({
    server: set.browsersync.server,
    files: set.browsersync.files,
    open: set.browsersync.open,
    notify: set.browsersync.notify
  });

  watch(set.copy.rootfiles, function () {
    gulp.start('root');
  });

  watch(set.copy.favicons, function () {
    gulp.start('favicons');
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

  watch(set.medias.src, function () {
    gulp.start('medias');
  });
});