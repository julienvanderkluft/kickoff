var gulp = require('gulp')
    zip  = require('gulp-zip');

var set  = require('../settings');

/* --
  compress build folder to zip
-- */

gulp.task('zip', function() {
  return gulp.src(set.build + '/**')
    .pipe(zip(set.zip.name + '.zip'))
    .pipe(gulp.dest('./'));
});
