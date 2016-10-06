var gulp         = require('gulp')
    gutil        = require('gulp-util')
    plumber      = require('gulp-plumber')
    notify       = require('gulp-notify')
    options      = require('minimist')(process.argv.slice(2))
    sass         = require('gulp-sass')
    autoprefixer = require('gulp-autoprefixer')
    sourcemaps   = require('gulp-sourcemaps')
    csso         = require('gulp-csso');

var set          = require('../settings').styles;

/* --
  build css output file
-- */

gulp.task('styles', function() {
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

    .pipe(!options.prod ? sourcemaps.init() : gutil.noop())
      .pipe(sass({ includePaths: set.includePaths })) 
      .pipe(autoprefixer())
    .pipe(!options.prod ? sourcemaps.write('../maps') : gutil.noop())
    .pipe(options.prod ? csso() : gutil.noop())

    .pipe(gulp.dest(set.dest))
    .pipe(browserSync.stream())
});
