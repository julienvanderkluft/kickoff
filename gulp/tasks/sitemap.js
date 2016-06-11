var gulp    = require('gulp')
    sitemap = require('gulp-sitemap');

var set    = require('../settings');

/* --
  Generate sitemap.xml
-- */

gulp.task('sitemap', function () {
    gulp.src('./build/**/*.html', {
      read: false
    })
      .pipe(sitemap({
          siteUrl: set.project.distURL,
          changefreq : set.sitemap.changefreq
      }))
      .pipe(gulp.dest(set.build));
});