var gulp     = require('gulp')
    gutil    = require('gulp-util')
    plumber  = require('gulp-plumber')
    notify   = require('gulp-notify')
    options  = require('minimist')(process.argv.slice(2))
    browserSync  = require('browser-sync')
    favicons = require('gulp-favicons');

var set      = require('../settings');

/* --
  Generate favicons
-- */

gulp.task('favicons', function() {
  return gulp.src(set.favicons.src)
    .pipe(!options.prod ? plumber({
      errorHandler:
        notify.onError({
        title: 'Kickoff',
        subtitle: 'Error:',
        message: '<%= error.message %>',
        sound: false
      })
    }) : gutil.noop())

    .pipe(favicons({
      url: set.project.url,
      appName: set.project.name,
      version: set.project.version,
      appDescription: set.project.desc,
      developerName: null,
      developerURL: null,
      path: './',
      background: set.favicons.background,
      display: 'standalone',
      orientation: 'portrait',
      logging: false,
      online: false,
      html: set.templates.path + '/partials/generated/favicons.html',
      pipeHTML: false,
      replace: true
    }))

    .pipe(gulp.dest(set.build))
    .pipe(browserSync.reload({stream: true, once: true}))
});
