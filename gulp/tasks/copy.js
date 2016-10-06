var gulp = require('gulp')
    browserSync  = require('browser-sync');

var set  = require('../settings').copy;

/* --
  copy files
-- */

gulp.task('htaccess', function(){
  return gulp.src(set.htaccess)

    .pipe(gulp.dest(set.htaccessDest))
    .pipe(browserSync.reload({stream: true, once: true}))
});

gulp.task('fonts', function(){
  return gulp.src(set.fonts)

    .pipe(gulp.dest(set.fontsDest))
    .pipe(browserSync.reload({stream: true, once: true}))
});


gulp.task('copy', ['htaccess', 'fonts']);
