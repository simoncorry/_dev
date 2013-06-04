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
      }
      
      // Remix BG Color
      function remix_bg_color() {
        
        var bg_color      = $body.css('background-color');
        var prev_bg_color = bg_color;
        var bg_colors     = [];
        var get_bg_colors = $bg_main.each(function() {bg_colors.push($(this).css('background-color'));});
        var rand_bg_color = bg_colors[Math.floor(Math.random()*bg_colors.length)];
        
        if(rand_bg_color == prev_bg_color) {
          console.log('duplicate');
          remix_bg_color();
          return;
        }
        
        console.log(rand_bg_color + ' --- ' + bg_color);
        
        $body.css('background-color',rand_bg_color);
        
        
      }
      
      // Call Functions
      remix_btn_spin();
      remix_bg_color();
      
      setTimeout(function() {
        running = false;
      },600);
      
      return false;     
    });
  }
  
  // Load
  view();
  remix();
  
});