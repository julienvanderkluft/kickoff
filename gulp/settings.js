/* --
  Gulp tasks settings

  # Project informations
  # Paths variables
-- */

var project = {
  url     : 'http://localhost',
  name    : 'kickoff',
  version : '0.0.1',
  team    : [
    'Dev. HTML/CSS : Julien van der Kluft (@youknowmeasmob on Twitter), http://www.minuitsept.com',
    // Add you and your teammates here !
  ],
  thanks  : [
    'Kickoff (https://github.com/julienvanderkluft/kickoff)'
  ],
  site    : [
    'Last update : ' + new Date(),
    'Standards: HTML5, CSS3',
    'Components: Kickoff, Gulp',
    'Software: Sublime Text 3'
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

var robots = {
  useragent: '*',
  disallow: ''
};

var sitemap = {
  changefreq: 'monthly',
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
    server : app.buildPath,
    files  : [
      app.buildPath + 'css/**',
      app.buildPath + assets.imagesPath +  '/**',
      app.buildPath + assets.mediasPath +  '/**',
    ],
    open   : false,
    notify : false
  },

  copy: {
    rootfiles   : [rootFilesPath + '/**', rootFilesPath + '/.*'],
    favicons    : assets.path + assets.faviconsPath + '/**',

    fontsFolder : '/fonts',
    fonts       : assets.path + assets.fontsPath + '/*.+(eot|woff|woff2|ttf|svg)',

    dest        : app.buildPath
  },

  templates: {
    path  : templatesPath,
    src   : templatesPath + '/*.+(html|nunjucks|nj|njk)',
    dest  : app.buildPath,
    watch : templatesPath + '/**/*.+(html|nunjucks|nj|njk)'
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

  robots: {
    useragent: robots.useragent,
    disallow: robots.disallow
  },

  sitemap: {
    changefreq: sitemap.changefreq
  },

  zip: {
    name : project.name + '-' + project.version
  }

}
