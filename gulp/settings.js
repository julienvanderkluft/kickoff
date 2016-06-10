/* --
  Gulp tasks settings

  # Paths variables
-- */

var project = {
  name    : 'kickoff',
  version : '0.0.1'
};

var app = {
  srcPath   : './src',
  buildPath : './build',
};

var rootFilesPath =
  app.srcPath + '/rootfiles';

var templatesPath =
  app.srcPath + '/templates';

var assets = {
  path          : app.srcPath + '/assets',
  stylesPath    : '/scss',
  scriptsPath   : '/js',
  faviconsPath  : '/favicons',
  imagesPath    : '/images',
  fontsPath     : '/fonts',
};


module.exports = {

  build : app.buildPath,

  browsersync: {
    server : app.buildPath,
    files: [
      app.buildPath + 'css/**',
      app.buildPath + assets.imagesPath +  '/**',
      app.buildPath + assets.mediasPath +  '/**',
    ],
    open: false,
    notify: false
  },

  copy: {
    rootfiles   : [rootFilesPath + '/**', rootFilesPath + '/.*'],
    favicons    : assets.path + assets.faviconsPath + '/**',

    fontsFolder : '/fonts',
    fonts       : assets.path + assets.fontsPath + '/*.+(eot|woff|woff2|ttf|svg)',

    dest        : app.buildPath
  },

  templates: {
    path : templatesPath,
    src  : templatesPath + '/*.+(html|nunjucks)',
    dest : app.buildPath
  },

  styles: {
    src   : assets.path + assets.stylesPath + '/main.scss',
    dest  : app.buildPath + '/css/',
    watch : assets.path + assets.stylesPath + '/**'
  },

  scripts: {
    src      : assets.path + assets.scriptsPath + '/main.js',
    dest     : app.buildPath + assets.scriptsPath + '/',
    watch    : assets.path + assets.scriptsPath + '/**',
    reporter : 'jshint-stylish'
  },

  images: {
    src  : assets.path + assets.imagesPath + '/**',
    dest : app.buildPath + assets.imagesPath + '/'
  },

  medias: {
    src  : assets.path + assets.mediasPath + '/**',
    dest : app.buildPath + assets.mediasPath + '/'
  },

  zip: {
    name : project.name + '-' + project.version
  }

}
