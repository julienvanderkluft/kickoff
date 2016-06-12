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
    set.templates.path + '/partials/generated',
    set.zip.name + '.zip'
  ]);
});

// remove zip
gulp.task('clean:zip', function () {
  return del([
    set.zip.name + '.zip'
  ]);
});

// remove prod output folder and installed node modules
gulp.task('clean:hard', function () {
  return del([
    set.build,
    set.templates.path + '/partials/generated',
    set.zip.name + '.zip',
    './node_modules'
  ]);
});
