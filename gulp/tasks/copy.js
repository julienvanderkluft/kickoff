var gulp = require('gulp');

var set  = require('../settings').copy;

/* --
  copy files
-- */

gulp.task('root', function(){
  return gulp.src(set.rootfiles)

    .pipe(gulp.dest(set.dest))
});

gulp.task('fonts', function(){
  return gulp.src(set.fonts)

    .pipe(gulp.dest(set.dest + set.fontsFolder))
    .pipe(browserSync.stream())
});


gulp.task('copy', ['root', 'fonts']);
