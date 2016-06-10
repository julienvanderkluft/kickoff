var gulp         = require('gulp')
    gutil        = require('gulp-util')
    plumber      = require('gulp-plumber')
    notify       = require('gulp-notify')
    options      = require('minimist')(process.argv.slice(2))
    jshint       = require('gulp-jshint')
    browserify   = require('gulp-browserify')
    uglify       = require('gulp-uglify')

var set          = require('../settings').scripts;

/* --
  build javascripts output file
-- */

gulp.task('scripts', function() {
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

    .pipe(jshint())
    .pipe(jshint.reporter(set.reporter))
    .pipe(jshint.reporter('fail'))

    .pipe(browserify({
      insertGlobals : true
    }))

    .pipe(options.prod ? uglify() : gutil.noop())

    .pipe(gulp.dest(set.dest))
    .pipe(browserSync.stream())
});