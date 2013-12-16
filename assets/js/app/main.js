// FUNCTIONS

window.debug = false;

// Body

$(function body() {
  
  // Global Vars
  var $window   = $(window);
  var $document = $(document);
  var $body     = $('body');
  
  var isiPad    = navigator.userAgent.match(/iPad/i) != null;  
  
  // Body Height
  function body_height() {
    var height_y = $document.outerHeight();
    $body.css('height',height_y);
  }
  function body_height_reset() {
    $body.css('height','100%');
  }
    
  // Responsive Check
  function check_width() {
    var windowsize = $window.width();
    // < 747
    if (windowsize < 747) {
      body_height();
    }
    else {
      if($('section').hasClass('home')) {
        body_height_reset();
      } else {
        body_height();
      }
    }
  }

  // Orientation Check
  function check_orientation() {
    body_height();
  }
  
  // Event Listners
  setTimeout(function() {
    $window.resize(check_width); // Bind event listener (window resize)
    $window.bind('orientationchange', check_orientation); // Bind event listener (iOS orientation change)
  },1);
  
  // load selected link as AJAX calls
  jQuery('body').on('click', '.ajax_trigger', function(e) {
    e.preventDefault();
    var $this = $(this);
    var url = $this.attr('href');
    // if you want to do anything *before* the load, do it, and put the following in a callback
    jQuery().wvgg_ajax_load({
      'url': url,
      success: function(r) {
        // if you want to do anything *after* the load, do it here
      }
    });
  });
  
});

// SHUFFLE FUNCTION
function shuffle(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}