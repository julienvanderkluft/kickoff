/* --
  Gulp tasks settings

  # Project informations
  # Robots, sitemap and favicons configuration
  # Paths variables
-- */

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

var favicons = {
  path : '/favicons',
  background : '#fff'
}

var app = {
  srcPath   : './src',
  buildPath : './build',
};

var templatesPath =
  app.srcPath + '/templates';

var mediasPath =
  '/medias';

var assets = {
  path         : app.srcPath + '/assets',
  stylesPath   : '/scss',
  scriptsPath  : '/js',
  imagesPath   : '/images',
  fontsPath    : '/fonts',
};


/*
  Modify part after this line,
  only if you know what you do
*/

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
      app.buildPath + mediasPath +  '/**',
    ],
    open   : false,
    notify : false
  },

  copy: {
    htaccess     : app.srcPath + '/.htaccess',
    htaccessDest : app.buildPath,

    fonts        : assets.path + assets.fontsPath + '/*.+(eot|woff|woff2|ttf|svg)',
    fontsDest    : app.buildPath + '/fonts'
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
    src  : assets.path + mediasPath + '/**',
    dest : app.buildPath + mediasPath + '/'
  },

  favicons: {
    src        : assets.path + favicons.path + '/favicon.png',
    background : favicons.background
  },

  robots: {
    useragent: robots.useragent,
    disallow: robots.disallow
  },

  sitemap: {
    changefreq: sitemap.changefreq
  },

  zip: {
    src  : app.buildPath + '/**',
    name : project.name + '-' + project.version
  }

}
