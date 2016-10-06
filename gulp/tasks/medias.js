var gulp     = require('gulp')
    gutil    = require('gulp-util')
    plumber  = require('gulp-plumber')
    notify   = require('gulp-notify')
    options  = require('minimist')(process.argv.slice(2))
    imagemin = require('gulp-imagemin');

var set      = require('../settings').medias;

/* --
  optimize medias pictures
-- */

gulp.task('medias', function() {
  return gulp.src(set.src)
    .pipe(!options.prod ? plumber({
      errorHandler:
        notify.onError({
        title: 'Kickoff',
        subtitle: 'Error:',
        message: '<%= error.message %>',
        sound: false
      })
    }) : gutil.noop())

    .pipe(options.prod ? imagemin() : gutil.noop())

    .pipe(gulp.dest(set.dest))
});
