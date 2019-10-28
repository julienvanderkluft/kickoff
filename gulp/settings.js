/* --
  Gulp tasks settings

  # Paths variables
  # Robots, sitemap and favicons configuration
  # Project informations
-- */

var appPath = './';

var assetsSrc = {
  templatesPath : 'templates',
  stylesPath    : 'styles/scss',
  scriptsPath   : 'scripts/src',
  imagesPath    : 'images/src',
  fontsPath     : 'fonts',
}

var assetsDest = {
  templatesPath : '',
  stylesPath    : 'styles/css',
  mapsPath      : 'styles/maps',
  scriptsPath   : 'scripts/bundle',
  imagesPath    : 'images/public',
  fontsPath     : 'fonts',
  // faviconsPath  : 'favicons',
}

var robots = {
  useragent : '*',
  disallow  : ''
};

var sitemap = {
  changefreq : 'monthly',
};

var favicons = {
  path       : '/favicons',
  background : '#fff'
}

var project = {
  url     : 'http://localhost',
  name    : 'Kickoff',
  version : '0.0.1',
  desc    : 'Launch the game faster !',
  team    : [
    'Dev. HTML/CSS : Julien van der Kluft (@jvanderkluft on Twitter), http://www.minuitsept.com',
    // Add you and your teammates here !
  ],
  thanks  : [
    'Kickoff (https://github.com/julienvanderkluft/kickoff)'
  ],
  site    : [
    'Last update : ' + new Date(),
    'Standards: HTML5, CSS3',
    'Components: Kickoff'
  ],
  note    : [
    'Built with Kickoff by Julien van der Kluft.',
    '   _     _',
    '  (c).-.(c)',
    '   / ._. \\',
    ' __\\( Y )/__',
    '(_.-/\'-\'\\-._)',
    '   || O ||',
    ' _.\' `-\' \'._',
    '(.-./`-\'\\.-.)',
    ' `-\'     `-\''
  ]
};


/*
  Modify part after this line,
  only if you know what you do
*/

module.exports = {

  src : appPath,
  build : appPath,

  project: {
    distURL : project.url,
    name    : project.name,
    version : project.version,
    team    : project.team,
    thanks  : project.thanks,
    site    : project.site,
    note    : project.note
  },

  browsersync: {
    server : appPath,
    files  : [
      assetsSrc.imagesPath +  '/**'
    ],
    open   : false,
    notify : true
  },

  copy: {
    htaccess     : appPath + '/.htaccess',
    htaccessDest : appPath,

    fonts        : assetsSrc.fontsPath + '/**/*.+(eot|woff|woff2|ttf|svg)',
    fontsDest    : assetsDest.fontsPath
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
    watch    : assetsSrc.scriptsPath + '/**',
    reporter : 'jshint-stylish'
  },

  images: {
    src  : assetsSrc.imagesPath + '/**',
    dest : assetsDest.imagesPath
  },

  // favicons: {
  //   src        : favicons.path + '/favicon.png',
  //   background : favicons.background,
  //   dest       : assetsDest.faviconsPath
  // },

  robots: {
    useragent : robots.useragent,
    disallow  : robots.disallow
  },

  sitemap: {
    changefreq: sitemap.changefreq
  },

  clean: {
    templates   : appPath + assetsDest.templatesPath + '/*.html',
    styles      : appPath + assetsDest.stylesPath,
    maps        : appPath + assetsDest.mapsPath,
    scripts     : appPath + assetsDest.scriptsPath,
    images      : appPath + assetsDest.imagesPath,
    fonts       : appPath + assetsDest.fontsPath,
    // favicons : appPath + assetsDest.faviconsPath,
  }

}
