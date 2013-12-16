/* /// HOME /// */

/* NAVS */

var home_nav_timer;

var home_nav_animations = function() {
  
  // Global Vars
  var $section_header       = $('section.header');
  var $section_home         = $('section.home');
  var $section_current      = $section_header.next('section');

  var section_home_class    = $section_home.attr('class');
  var section_current_class = $section_current.attr('class');
  var initial_bubble_height = $('nav#home_bubble').outerHeight();
  var post_type;             
  
  // Detect Home Page
  if(section_current_class == section_home_class) {
    
    // Nav Logo
    function home_logos() {
    
      // Function Vars
      var $home_logo             = $('nav#home_logo');
      var $home_logos_li         = $('ul#home_logos li');
      var $present_home_logos_li = $('ul#home_logos li.present');
      var $future_home_logos_li  = $present_home_logos_li.next().length ? $present_home_logos_li.next() : $present_home_logos_li.parent().children(':first');
      var $home_logos_li_pixel   = $('ul#home_logos li div.pixel');
      
      var present_home_logos_li  = 'ul#home_logos li.present';
      
      // Animate Outter Logo
      $home_logo.addClass('active');
      $home_logos_li_pixel.removeClass('hover_times');
      $home_logo.one('webkitAnimationEnd animationend', function(e) {
        $home_logo.removeClass('active');
        $home_logos_li_pixel.addClass('hover_times');
        /* console.log('End of Logo Animation'); */
      });
      
      // When Outter Logo = opacity:0 replace content
      $('body').addClass('clear_logo');
      $('body').one('webkitAnimationEnd animationend', function(e) {
      
        // Clear CSS Animation
        $('body').removeClass('clear_logo');
        
        // Add/Remove Post Types
        $home_logos_li.removeClass();
        $future_home_logos_li.addClass(post_type);
        
        // Show/hide Logos
        $home_logos_li.removeClass('present');
        $future_home_logos_li.addClass('present');
        
        // Create Logo Link
        var home_logo_link = post_type.slice(5);
        $home_logo.off('click', present_home_logos_li);
        $home_logo.on('click', present_home_logos_li, function(){ 
          window.open(home_logo_link,'_blank'); 
        });
        
        /* console.log('End of Clear Logo Animation'); */
        
      });
      
    }
    
    // Nav Bubble
    function home_bubbles() {

      // Function Vars
      var $home_bubble            = $('nav#home_bubble');
      var $nav_home               = $('nav#nav_home');
      var $home_bubbles           = $('ul#home_bubbles');
      var $home_bubbles_li        = $('ul#home_bubbles li');
      var $present_home_bubble_li = $('ul#home_bubbles li.present');
      var $future_home_bubble_li  = $present_home_bubble_li.next().length ? $present_home_bubble_li.next() : $present_home_bubble_li.parent().children(':first');
      // Create Post Type
      post_type                   = $future_home_bubble_li.attr('class'); 
      
      // Animate Outter Bubble
      $home_bubble.addClass('active');
      $home_bubble.one('webkitAnimationEnd animationend', function(e) {
        $home_bubble.removeClass('active');
        /* console.log('End of Bubble Animation'); */
      }); 
      
      // When Outter Bubble = opacity:0 replace content
      $('body').addClass('clear_bubble');
      $('body').one('webkitAnimationEnd animationend', function(e) {
        
        // Clear CSS Animation
        $('body').removeClass('clear_bubble');
        
        // Show/hide Bubble Posts
        $home_bubbles_li.removeClass('present');
        $future_home_bubble_li.addClass('present');
        
        // Move Home Boxes With Bubble
        var new_bubble_height     = $home_bubble.outerHeight();
        var y                     = (new_bubble_height - 130);
        $nav_home.css({
            '-webkit-transform' : 'translate3d(0,' + y + 'px,0)',
            'transform'         : 'translate3d(0,' + y + 'px,0)'
        });
        
        /* console.log(initial_bubble_height); */
        
      });
    
    }
    
    /* TIMER */
    
    // Clear Existing Timers
    clear_home_nav_timer();
        
    // Run Timer Functions (if home page)
    home_nav_timer = setInterval(function() {
      /* console.log('Run Interval \t - \t' + home_nav_timer); */
      home_logos();
      home_bubbles();
    }, 12000);
  
  } else {return;}
  
}

/* CLEAR TIMER */

var clear_home_nav_timer = function() { 
  /* console.log('Clear Interval \t - \t' + home_nav_timer); */
  window.clearInterval(home_nav_timer);
  return;
}

/* ON DOC READY */

$(function() {
  
  // Global Vars
  var $window = $(window);
  
  // Responsive Check
  function check_width() {
    
    var windowsize = $window.width();
    
    // If Window < 747
    if (windowsize < 747) {
      
      // Clear Existing Timers
      clear_home_nav_timer();
      
    } else {
	  
	  // Clear Existing Timers
      clear_home_nav_timer();
	  
	  // Call Functions
	  home_nav_animations();
	  
    }
    
  } check_width();
  
  // Event Listners
  setTimeout(function() {
    $window.resize(check_width); // Bind event listener (window resize)
  },1);
   
});