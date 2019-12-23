/* --
  Gulp tasks settings

  # Paths variables
-- */

const projectName = 'Kickoff'

const appPath = './'

const assetsSrc = {
  templatesPath : 'templates',
  stylesPath    : 'styles/scss',
  scriptsPath   : 'scripts/src',
  imagesPath    : 'images/src',
  fontsPath     : 'fonts',
}

const assetsDest = {
  templatesPath : '',
  stylesPath    : 'styles/css',
  scriptsPath   : 'scripts/bundle',
  imagesPath    : 'images/public',
  fontsPath     : 'fonts',
  // faviconsPath  : 'favicons',
}

// const favicons = {
//   path       : '/favicons',
//   background : '#fff'
// }


/*
  Modify part after this line,
  only if you know what you are doing
*/

module.exports = {

  src : appPath,
  build : appPath,

  browsersync: {
    server : appPath,
    files  : [],
    open   : false,
    notify : true
  },

  fonts: {
    src   : assetsSrc.fontsPath + '/**/*.+(eot|woff|woff2|ttf|svg)',
    dest  : assetsDest.fontsPath,
    watch : assetsSrc.fontsPath + '/**'
  },

  templates: {
    src   : appPath + assetsSrc.templatesPath + '/*.+(html|twig)',
    path  : appPath + assetsSrc.templatesPath,
    dest  : appPath + assetsDest.templatesPath,
    watch : appPath + assetsSrc.templatesPath + '/**/*.+(html|twig)'
  },

  styles: {
    src          : appPath + assetsSrc.stylesPath + '/main.scss',
    includePaths : ['./node_modules/'],
    dest         : appPath + assetsDest.stylesPath,
    watch        : appPath + assetsSrc.stylesPath + '/**'
  },

  scripts: {
    src      : assetsSrc.scriptsPath + '/main.js',
    dest     : assetsDest.scriptsPath,
    watch    : assetsSrc.scriptsPath + '/**'
  },

  images: {
    src   : assetsSrc.imagesPath + '/**',
    dest  : assetsDest.imagesPath,
    watch : assetsSrc.imagesPath +  '/**'
  },

  // favicons: {
  //   src        : favicons.path + '/favicon.png',
  //   background : favicons.background,
  //   dest       : assetsDest.faviconsPath
  // },

  clean: {
    templates   : appPath + assetsDest.templatesPath + '/*.html',
    styles      : appPath + assetsDest.stylesPath,
    scripts     : appPath + assetsDest.scriptsPath,
    images      : appPath + assetsDest.imagesPath,
    fonts       : appPath + assetsDest.fontsPath,
    // favicons : appPath + assetsDest.faviconsPath,
  }

}
