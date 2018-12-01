var gulp = require('gulp')
    del  = require('del');

var set  = require('../settings');

/* --
  gulp clean tasks
  utility tasks for clean builded files, folders, and modules
-- */

// remove prod output folder
gulp.task('clean:soft', function () {
  return del([
    set.build,
    set.src + '/favicons'
  ]);
});

// remove prod output folder and installed node modules
gulp.task('clean:hard', function () {
  return del([
    set.build,
    set.src + '/favicons',
    './node_modules'
  ]);
});
