var gulp         = require('gulp')
    gutil        = require('gulp-util')
    plumber      = require('gulp-plumber')
    options      = require('minimist')(process.argv.slice(2))
    zip          = require('gulp-zip');

var set          = require('../settings').zip;

/* --
  compress build folder to zip
-- */

gulp.task('zip', function() {
  return gulp.src('build/*')
    .pipe(zip(set.name + '.zip'))
    .pipe(gulp.dest('./'));
});