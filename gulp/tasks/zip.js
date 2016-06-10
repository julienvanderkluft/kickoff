var gulp         = require('gulp')
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