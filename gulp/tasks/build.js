var gulp     = require('gulp')
    sequence = require('run-sequence');

/* --
  gulp build task
-- */

gulp.task('build', function(cb) {
  sequence(
    'clean:soft',
    'favicons',
    ['copy', 'templates', 'styles', 'scripts', 'images', 'medias'],
    ['humans', 'robots', 'sitemap'],
    cb
  );
});
