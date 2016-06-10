var gulp         = require('gulp')
    gutil        = require('gulp-util')
    plumber      = require('gulp-plumber')
    options      = require('minimist')(process.argv.slice(2))

var set          = require('../settings');

/* --
  gulp build task
-- */

gulp.task('build', ['copy', 'templates', 'styles', 'scripts', 'images', 'medias']);