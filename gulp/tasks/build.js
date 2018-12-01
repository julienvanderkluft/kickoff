var gulp     = require('gulp')
    sequence = require('run-sequence');

/* --
  gulp build task
-- */

gulp.task('build', function(cb) {
  sequence(
    'clean:soft',
    ['copy', 'styles', 'scripts', 'images'],
    ['favicons', 'humans', 'robots', 'sitemap'],
    cb
  );
});
