var gulp   = require('gulp')
    robots = require('gulp-robots');

var set    = require('../settings');

/* --
  Generate robots.txt
-- */

gulp.task('robots', function () {
  gulp.src('./build/index.html')
    .pipe(robots({
      useragent: set.robots.useragent,
      disallow: set.robots.disallow,
      sitemap: set.project.distURL + '/sitemap.xml'
    }))
    .pipe(gulp.dest(set.build));
});
