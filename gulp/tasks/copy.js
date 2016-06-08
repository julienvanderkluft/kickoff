var gulp    = require('gulp')
    gutil   = require('gulp-util')
    plumber = require('gulp-plumber')
    notify  = require('gulp-notify')
    options = require('minimist')(process.argv.slice(2));

var set     = require('../settings').copy;

/* --
  copy files
-- */

gulp.task('root', function(){
  return gulp.src(set.rootfiles)

    .pipe(gulp.dest(set.dest))
});

gulp.task('favicons', function(){
  return gulp.src(set.favicons)

    .pipe(gulp.dest(set.dest))
});

gulp.task('fonts', function(){
  return gulp.src(set.fonts)

    .pipe(gulp.dest(set.dest + set.fontsFolder))
    .pipe(browserSync.stream())
});


gulp.task('copy', ['root', 'favicons', 'fonts']);