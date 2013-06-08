// FUNCTIONS

// NAV

$(function footer() {
  
  // Global Vars
  var $window    = $(window);
  var $body      = $('body');
  var $section   = $('section#footer');
  var $header    = $('section#header');
  var $content   = $('section:nth-of-type(2)');
  var $h_c       = $('section#header, section:nth-of-type(2)');
  var $view_btn  = $('#btn_view');
  var $remix_btn = $('#btn_remix');
  var $nav_a     = $('ul#nav_main li a')
  var $nav_h_a   = $('ul#nav_home li a')
  var $bg_main   = $('ul#nav_main li a div.bg_main');
  
  var view_btn  = '#btn_view';
  var remix_btn = '#btn_remix';
  var running   = false;
  var isiPad    = navigator.userAgent.match(/iPad/i) != null;
  
  // View Btn
  function view() {
    $section.on('click touchend', view_btn, function(e) {
      e.preventDefault();
      
      if (running) {return;}
      running = true;
      
      var $self = $(this);
      
      // Hide
      function hide_section() {
        $self.toggleClass('active');
        $h_c.toggleClass('hidden');
      }
      
      // Call Functions
      hide_section();
      
      setTimeout(function() {
        running = false;
      },600);
      
      return false;     
    });
  }
  
  // Remix Btn
  function remix() {
    $section.on('click touchend', remix_btn, function(e) {
      e.preventDefault();
      
      if (running) {return;}
      running = true;
      
      var $self = $(this);
      
      // Remix Btn Spin
      function remix_btn_spin() {
        $self.toggleClass('btn_spin');
        setTimeout(function() {
          $self.toggleClass('btn_spin');
        },1900);
      }
      
      // Remix BG Color
      function remix_bg_color() {
        
        var bg_color       = $body.css('background-color');
        var nav_li         = 'ul#nav_main li';
        var bg_main        = 'ul#nav_main li a div.bg_main';
        var bg_pixel       = 'ul#nav_main li a div.pixel';
        var nav_h_li       = 'ul#nav_home li';
        var bg_h_main      = 'ul#nav_home li a div.bg_main';
        var bg_h_pixel     = 'ul#nav_home li a div.pixel';
        var prev_bg_color  = bg_color;
        var bg_colors      = [];
        var get_bg_colors  = $bg_main.each(function() {bg_colors.push($(this).css('background-color'));});
        var rand_bg_color  = bg_colors[Math.floor(Math.random()*bg_colors.length)];
        
        // Change BG Color
        if(rand_bg_color == prev_bg_color) {
          remix_bg_color();
          return;
        }
        $body.css('background-color',rand_bg_color);
        
        // Change Nav Pixel Color
        $nav_a.each(function() {
            
          if($(this).closest(nav_li).hasClass('active')) {
            
            var split_rgba_2  = rand_bg_color.replace(/^rgba?\(|\s+|\)$/g,'').split(',');
            var slice_rgba_2  = split_rgba_2.slice(0,-1);
            var create_rgba_2 = 'rgb('+ slice_rgba_2 +')';
            
            $(this).children(bg_main).css('background-color',rand_bg_color);
            $(this).children(bg_pixel).css('background-color',create_rgba_2);  
            
          } else if($(this).children(bg_main).css('background-color') == rand_bg_color) {
            
            var split_rgba  = prev_bg_color.replace(/^rgba?\(|\s+|\)$/g,'').split(',');
            var slice_rgba  = split_rgba.slice(0,-1);
            var create_rgba = 'rgb('+ slice_rgba +')';
            
            $(this).children(bg_main).css('background-color',prev_bg_color);
            $(this).children(bg_pixel).css('background-color',create_rgba);
              
          }
               
        });
        
        // Change Home Pixel Color
        $nav_h_a.each(function() {
            
          if($(this).children(bg_h_main).css('background-color') == rand_bg_color) {
            
            var split_rgba  = prev_bg_color.replace(/^rgba?\(|\s+|\)$/g,'').split(',');
            var slice_rgba  = split_rgba.slice(0,-1);
            var create_rgba = 'rgb('+ slice_rgba +')';
            
            $(this).children(bg_h_main).css('background-color',prev_bg_color);
            $(this).children(bg_h_pixel).css('background-color',create_rgba);
              
          }
               
        });
        
      }
      
      // Call Functions
      remix_btn_spin();
      remix_bg_color();
      
      setTimeout(function() {
        running = false;
      },1900);
      
      return false;     
    });
  }
  
  // Load
  view();
  remix();
  
});