var gulp = require('gulp')
    del  = require('del');

var set  = require('../settings');

/* --
  gulp clean tasks
  utility tasks for clean builded files, folders, and modules
-- */

// clean prod
gulp.task('clean:soft', function () {
  return del([
    set.build,
  ]);
});

// clean prod and installed node modules
gulp.task('clean:hard', function () {
  return del([
    set.build,
    './node_modules'
  ]);
});
