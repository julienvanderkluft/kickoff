var gulp     = require('gulp')
    gutil    = require('gulp-util')
    plumber  = require('gulp-plumber')
    notify   = require('gulp-notify')
    options  = require('minimist')(process.argv.slice(2))
    nunjucks = require('gulp-nunjucks-render');

var set      = require('../settings').templates;

/* --
  build html output pages
-- */

gulp.task('templates', function() {
  return gulp.src(set.src)
    .pipe(!options.build ? plumber({
      errorHandler:
        notify.onError({
        title: 'Kickoff',
        subtitle: 'Error:',
        message: '<%= error.message %>',
        sound: false
      })
    }) : gutil.noop())

    .pipe(nunjucks({
      path: [set.path]
    }))

    .pipe(gulp.dest(set.dest))
    .pipe(browserSync.stream())
});