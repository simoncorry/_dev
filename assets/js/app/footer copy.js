// FUNCTIONS

// NAV

var footer = function() {
  
  // Global Vars
  var $window    = $(window);
  var $body      = $('body');
  var $section   = $('section#footer');
  var $header    = $('section#header');
  var $content   = $('section:nth-of-type(2)');
  var $view_btn  = $('#btn_view');
  var $remix_btn = $('#btn_remix');
  var $nav_a     = $('nav#nav_main li a');
  var $nav_h_a   = $('nav#nav_home li a');
  var $bg_main   = $('nav#nav_main li a div.bg_main');
  
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
      
      var $self     = $(this);
      var $sections = $('section.home, section.blog, section.projects, section.contact, section.labs');
      
      // Hide
      function hide_section() {
        $self.toggleClass('active');
        $sections.toggleClass('hidden');
      }
      
      // Call Functions
      hide_section();
      
      $sections.one('webkitTransitionEnd transitionend', function(e) {
        running = false;
      });
      
      return false;     
    });
  }
  
  // Remix Btn
  function remix_init() {
    $section.on('click touchend', remix_btn, function(e) {
      e.preventDefault();
      
      if (running) {return;}
      running = true;
      
      var $self = $(this);
      
      // Clicked
      function remix_clicked() {
        $section.addClass('clicked');
      }

	  // Remix Btn Spin
      function remix_btn_spin() {
        $self.toggleClass('btn_spin');
        $('a#btn_remix').one('webkitAnimationEnd animationend', function(e) {
          $self.removeClass('btn_spin');
        });
      }

      // Remix BG Color
      function remix_bg_color() {
        
        var bg_color       = $body.css('background-color');
        var nav_li         = 'nav#nav_main li';
        var bg_main        = 'nav#nav_main li a div.bg_main';
        var bg_pixel       = 'nav#nav_main li a div.pixel';
        var nav_h_li       = 'nav#nav_home li';
        var bg_h_main      = 'nav#nav_home li a div.bg_main';
        var bg_h_pixel     = 'nav#nav_home li a div.pixel';
        var prev_bg_color  = bg_color;
        var bg_colors      = [];
        var get_bg_colors  = $bg_main.each(function() {bg_colors.push($(this).css('background-color'));});
        var rand_bg_color  = bg_colors[Math.floor(Math.random()*bg_colors.length)];
        var hover_logo     = 'rgb(117,130,155)';
        var hover_blog     = 'rgb(118,158,139)';
        var hover_projects = 'rgb(133,107,84)';
        var hover_contact  = 'rgb(171,148,98)';
        var hover_labs     = 'rgb(78,89,88)';
        
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
            
            // Change pixel hover
            $(this).children(bg_pixel).hover(
              function() {
                
                var this_bg_color = $(this).css('background-color');
                
                if(this_bg_color == 'rgb(137, 150, 175)') {
                  $(this).css('background-color',hover_logo);
                } else if(this_bg_color == 'rgb(138, 178, 159)') {
                  $(this).css('background-color',hover_blog);  
                } else if(this_bg_color == 'rgb(153, 127, 104)') {
                  $(this).css('background-color',hover_projects);  
                } else if(this_bg_color == 'rgb(191, 168, 118)') {
                  $(this).css('background-color',hover_contact);  
                } else if(this_bg_color == 'rgb(98, 109, 108)') {
                  $(this).css('background-color',hover_labs);  
                }
                
              },function() {
                $(this).css('background-color',create_rgba_2);
            });  
            
          } else if($(this).children(bg_main).css('background-color') == rand_bg_color) {
            
            var split_rgba  = prev_bg_color.replace(/^rgba?\(|\s+|\)$/g,'').split(',');
            var slice_rgba  = split_rgba.slice(0,-1);
            var create_rgba = 'rgb('+ slice_rgba +')';
            
            $(this).children(bg_main).css('background-color',prev_bg_color);
            $(this).children(bg_pixel).css('background-color',create_rgba);
            
            // Change pixel hover
            $(this).children(bg_pixel).hover(
              function() {
                
                var this_bg_color = $(this).css('background-color');
                
                if(this_bg_color == 'rgb(137, 150, 175)') {
                  $(this).css('background-color',hover_logo);
                } else if(this_bg_color == 'rgb(138, 178, 159)') {
                  $(this).css('background-color',hover_blog);  
                } else if(this_bg_color == 'rgb(153, 127, 104)') {
                  $(this).css('background-color',hover_projects);  
                } else if(this_bg_color == 'rgb(191, 168, 118)') {
                  $(this).css('background-color',hover_contact);  
                } else if(this_bg_color == 'rgb(98, 109, 108)') {
                  $(this).css('background-color',hover_labs);  
                }
                
              },function() {
                $(this).css('background-color',create_rgba);
            });
              
          }
               
        });
        
        // Change Home Pixel Color
		$('nav#nav_home li a').each(function() {
            
          if($(this).children(bg_h_main).css('background-color') == rand_bg_color) {
            
            var split_rgba  = prev_bg_color.replace(/^rgba?\(|\s+|\)$/g,'').split(',');
            var slice_rgba  = split_rgba.slice(0,-1);
            var create_rgba = 'rgb('+ slice_rgba +')';
            
            $(this).children(bg_h_main).css('background-color',prev_bg_color);
            $(this).children(bg_h_pixel).css('background-color',create_rgba);
            
            // Change pixel hover
            $(this).children(bg_h_pixel).hover(
              function() {
                
                var this_bg_color = $(this).css('background-color');
                
                if(this_bg_color == 'rgb(137, 150, 175)') {
                  $(this).css('background-color',hover_logo);
                } else if(this_bg_color == 'rgb(138, 178, 159)') {
                  $(this).css('background-color',hover_blog);  
                } else if(this_bg_color == 'rgb(153, 127, 104)') {
                  $(this).css('background-color',hover_projects);  
                } else if(this_bg_color == 'rgb(191, 168, 118)') {
                  $(this).css('background-color',hover_contact);  
                } else if(this_bg_color == 'rgb(98, 109, 108)') {
                  $(this).css('background-color',hover_labs);  
                }
                
              },function() {
                $(this).css('background-color',create_rgba);
            });
          
          }
                 
        });
      
      }
      
      // Call Functions
      remix_clicked();
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
  remix_init();
  
}

$(function() {  
  footer();
});



