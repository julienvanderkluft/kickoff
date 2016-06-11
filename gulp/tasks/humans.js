var gulp   = require('gulp')
    humans = require('gulp-humans');

var set    = require('../settings');

/* --
  Generate humans.txt
-- */

gulp.task('humans', function() {
  return gulp.src('./build/index.html')
    .pipe(humans({
      team: set.project.team,
      thanks: set.project.thanks,
      site: set.project.site,
      note: set.project.note
    }))
    .pipe(gulp.dest(set.build));
});