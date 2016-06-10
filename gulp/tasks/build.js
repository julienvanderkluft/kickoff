var gulp         = require('gulp')
    gutil        = require('gulp-util')
    plumber      = require('gulp-plumber')
    options      = require('minimist')(process.argv.slice(2))
    sequence     = require('run-sequence');

/* --
  gulp build task
-- */

gulp.task('build', function(cb) {
  sequence(
    'clean:soft',
    ['copy', 'templates', 'styles', 'scripts', 'images', 'medias'],
    cb
  );
});