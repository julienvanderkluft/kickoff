var gulp = require('gulp')
    del  = require('del');

var set  = require('../settings').clean;

/* --
  gulp clean tasks
  utility tasks for clean builded files, folders, and modules
-- */

// remove prod output folder
gulp.task('clean:soft', function () {
  return del([
    set.templates,
    set.styles,
    set.maps,
    set.scripts,
    set.images,
    set.fonts,
    // set.favicons
  ]);
});

// remove prod output folder and installed node modules
gulp.task('clean:hard', function () {
  return del([
    './node_modules',
    set.templates,
    set.styles,
    set.maps,
    set.scripts,
    set.images,
    set.fonts,
    // set.favicons
  ]);
});
