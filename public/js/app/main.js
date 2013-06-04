// Hide Address Bar (iOS)
/*
window.addEventListener("load",function() {
  setTimeout(function(){
    window.scrollTo(0, 1);
  }, 0);
});
*/

// Chrome iOS Workaround 
/*
setTimeout(function() {
  if(window.pageYOffset !== 0) return;
  window.scrollTo(0, window.pageYOffset + 1);
}, 1);
*/

// FUNCTIONS

// Body

$(function body() {
  
  // Global Vars
  var $window      = $(window);
  var $document    = $(document);
  var $body        = $('body');
  var $body_before = $('body::before');
  var $body_all    = $('body');
  
  // Body Height
  function body_height() {
    var height_y = $document.outerHeight();
    $body_all.css('height',height_y);
    $body.addClass('height_bg');
  }
  function body_height_reset() {
    $body_all.css('height','100%');
    $body.removeClass('height_bg');
  }
  
  // Body Height Orientation
  function body_height_orientation() {
    var height_y = $document.outerHeight();
    $body_all.css('height','auto');
  }
    
  // Responsive Check
  function check_width() {
    var windowsize = $window.width();
    // < 747
    if (windowsize < 747) {
      body_height();
    }
    else {
      body_height_reset();
    }
  } check_width();

  // Orientation Check
  function check_orientation() {
    body_height_orientation();
  }
  
  // Event Listners
  setTimeout(function() {
    $window.resize(check_width); // Bind event listener (window resize)
    $window.bind('orientationchange', check_orientation); // Bind event listener (iOS orientation change)
  },1);
  
});