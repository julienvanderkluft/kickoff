var gulp     = require('gulp')
    sequence = require('run-sequence');

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