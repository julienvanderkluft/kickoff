/* --
  load settings
  edit variables into gulp/settings.js file to update
  server options and tasks paths
-- */

const settings  = require('./gulp/settings.js')


/* --
  required plugins
-- */

const { src, dest, parallel, series } = require('gulp');

const plumber                         = require('gulp-plumber')
      notify                          = require('gulp-notify')

      sass                            = require('gulp-sass')
      sourcemaps                      = require('gulp-sourcemaps')
      postcss                         = require('gulp-postcss')
      autoprefixer                    = require('autoprefixer')
      cssnano                         = require('cssnano')

      browserify                      = require('browserify')
      source                          = require('vinyl-source-stream');
      buffer                          = require('vinyl-buffer');
      uglify                          = require('gulp-uglify')

      twig                            = require('gulp-twig')

      imagemin                        = require('gulp-imagemin')
      imageminMozjpeg                 = require('imagemin-mozjpeg')
      imageminpngquant                = require('imagemin-pngquant')

      gulpwatch                       = require('gulp-watch')

      gulpif                          = require('gulp-if')
      options                         = require('minimist')(process.argv.slice(2))

      browserSync                     = require('browser-sync');

      del                             = require('del');


/* --
  =error handling
-- */

const onError = function (err) {
  notify({
    title: settings.projectName,
    subtitle: 'Error:',
    message: '<%= error.message %>',
    sound: false
  }).write(err);

  console.log(err.toString());

  this.emit('end');
}


/* --
  =server
-- */

const server = browserSync.create();

function serve(done) {
  server.init({
    server: settings.browsersync.server,
    files: settings.browsersync.files,
    open: settings.browsersync.open,
    notify: settings.browsersync.notify
  });
  done();
}

function reload(done) {
  server.reload();
  done();
}


/* --
  =fonts
-- */

function fonts() {
  if(settings.fonts.src != settings.fonts.dest) {
    return src(settings.fonts.src)
      .pipe(dest(settings.fonts.dest))
  }
}


/* --
  =templates
-- */

function templates() {
  return src(settings.templates.src)
    .pipe(twig({ base: [settings.templates.path] }))
    .pipe(dest(settings.templates.dest))
}


/* --
  =styles
-- */

function styles() {
  return src(settings.styles.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(gulpif(!options.prod, sourcemaps.init({loadMaps: true})))
    .pipe(sass({ includePaths: settings.styles.includePaths }))
    .pipe(postcss([ autoprefixer(), cssnano() ]))
    .pipe(gulpif(!options.prod, sourcemaps.write('./maps')))
    .pipe(dest(settings.styles.dest))
}


/* --
  =scripts
-- */

function scripts() {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: settings.scripts.src,
    debug: true
  })

  return b.bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(plumber({ errorHandler: onError }))
    .pipe(gulpif(options.prod, uglify()))
    .pipe(gulpif(!options.prod, sourcemaps.init({loadMaps: true})))
    .pipe(gulpif(!options.prod, sourcemaps.write('./maps')))
    .pipe(dest(settings.scripts.dest))
}


/* --
  =images
-- */

function images() {
  return src(settings.images.src)
    .pipe(imagemin([
      imageminMozjpeg(),
      imageminpngquant()
    ]))
    .pipe(dest(settings.images.dest))
}


/* --
  =watch & autoreload
-- */

function watch() {
  gulpwatch(settings.fonts.watch, series('fonts', reload))
  gulpwatch(settings.styles.watch, series('styles', reload))
  gulpwatch(settings.scripts.watch, series('scripts', reload))
  gulpwatch(settings.images.watch, series('images', reload))
  gulpwatch(settings.templates.watch, series('templates', reload))
};


/* --
  gulp clean tasks
  utility tasks for clean builded files, folders, and modules
-- */

const arrayClean = Object.values(settings.clean)

// remove dist files/folders
function clean() {
  if(options.hard) {
    arrayClean.push('./node_modules');
    return del(arrayClean);
  }
  else {
    return del(arrayClean);
  }
};


/* --
  create tasks
-- */

exports.fonts     = fonts
exports.styles    = styles
exports.scripts   = scripts
exports.images    = images
exports.templates = templates

exports.watch     = watch

exports.clean     = clean


const build       = series(clean, parallel(fonts, styles, scripts, images, templates))
exports.build     = build


exports.default   = series(build, serve, watch)
