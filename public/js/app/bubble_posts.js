// FUNCTIONS
        
// BUBBLE Home

$(function bubble_home() {
  
  // Global Vars
  var $window    = $(window);
  var $body      = $('body');
  var $section   = $('section#home');
  var $wrapper   = $('section#home div.wrapper');
  var $header    = $('div.wrapper > header');
  var $nav       = $('div.wrapper > nav');
  var $bubble    = $('div.bubble');
  var $bubble_r  = $('div.bubble_remix');
  var $bubble_h  = $('div.bubble header');
  var $bubble_ul = $('ul#bubble_posts');
  var $bubble_li = $('ul#bubble_posts li');
  
  var header     = 'div.wrapper > header';
  var li_length  = $bubble_li.length;
  var count      = 1;
  var pause      = false;
  
  // Set Init Bubble Height
  function set_init_height_bubble() {
    var init_height_li = $bubble_li.outerHeight() + 50;
    $bubble.css('height',init_height_li);
  }
  
  // Bubble - Post Animation
  function bubble_post() {
  
    var $current   = $("ul#bubble_posts .active");
    var next       = $current.next().length ? $current.next() : $current.parent().children(':first');
    var old_height = $("ul#bubble_posts .active").closest(header).outerHeight();
    
    // Cycle List
    setTimeout(function() {
    
      $current.removeClass('active');
      next.addClass('active');
      
      // Set Bubble Height
      var norm_height = next.outerHeight() + 50;
      $bubble.css('height',norm_height);  
      
      // Set Nav Height
      var new_height  = $current.closest(header).outerHeight();
      var set_height  = new_height - old_height;
      var matrix      = $nav.css('-webkit-transform');
      var values      = matrix.match(/[0-9\.]+/g);
      var y           = Math.abs(values[5]);
      var less_h      = set_height + y;
      var more_h      = set_height - y;
      
      /* console.log('new: ' + new_height + ' - ' + 'old: ' + old_height + ' = ' + set_height); */
      
      if(new_height > old_height) {
        $nav.css('-webkit-transform','translate3d(0,' + more_h + 'px,0)');  
      } else if(new_height < old_height) {
        $nav.css('-webkit-transform','translate3d(0,' + less_h + 'px,0)');
      } else if(new_height == old_height) {
        return;
      }
      
    },500);
    
    // Activate/Disable Bubble
    $bubble_r.addClass('active');
    setTimeout(function() {
      $bubble_r.removeClass('active');
    },1000);
  
  }
    
  // Bubble Posts
  function check_pause() {
    setTimeout(function() {
      // Check if function is paused
      if(pause == false) {
        bubble_post();
        check_pause();
      } else {
        check_pause();
      }  
    },12000); 
  }  
  
  // Load
  set_init_height_bubble();
  check_pause();
  
  // Responsive Check
  function check_width() {
    var windowsize = $window.width();
    // < 747
    if (windowsize < 747) {
      pause = true;
    }
    else {
      pause = false;
    }
  }
  // Event Listners
  setTimeout(function() {
    $window.resize(check_width); // Bind event listener (window resize)
  },1);

});