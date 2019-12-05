window.$     = window.jQuery = require('jquery');
// var WebFont  = require('webfontloader');

/*--
  Exotic webfont loading
--*/

// WebFont.load({
//   google: {
//     families: [ '' ]
//   }
// });


/* --
/* Global vars
/* -- */

if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  var local = true;
}

var isMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  isMobile = true;
}

//
// Responsive breackpoints
// var swapSize = 992;


/* --
/* Functions
/* -- */

// function function($el) {
//   $el.each(function(index, iframe){
//   });
// }


/* --
/* Methods
/* -- */

//
// Custom method
// jQuery.fn.extend({
//   method: function(options) {
//     var settings  = $.extend({
//           customOption : true,
//         }, options),
//         $items = $(this);

//     $items.each(function() {
//       var $el = $(this);
//     });
//   }
// });


/* --
  app
--*/

$(function() {

});
