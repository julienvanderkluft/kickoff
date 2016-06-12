var gulp = require('gulp');

var set  = require('../settings').copy;

/* --
  copy files
-- */

gulp.task('htaccess', function(){
  return gulp.src(set.htaccess)

    .pipe(gulp.dest(set.htaccessDest))
    .pipe(browserSync.stream())
});

gulp.task('fonts', function(){
  return gulp.src(set.fonts)

    .pipe(gulp.dest(set.fontsDest))
    .pipe(browserSync.stream())
});


gulp.task('copy', ['htaccess', 'fonts']);
