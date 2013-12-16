// /// VIEW BUTTON /// //

var run_footer_btn_view = function() {
  
  var $footer          = $('section#footer');;
  var btn_view         = '#btn_view';
  var btn_view_running = false;
  
  // On Click
  $footer.on('click touchend', btn_view, function(e) {
    e.preventDefault();
    
    if (running) {return;}
    running = true;
    
    // Kill Home Bubble Animation
	clear_home_nav_timer();
    
    var $self         = $(this);
    var $section      = $('section#content');
    var $wrapper_home = $('section#content div.wrapper');
    
    // Hide
    $self.toggleClass('active');
    $section.toggleClass('hidden');

	if($section.hasClass('home')) {$wrapper_home.toggleClass('pointer_events');}

    setTimeout(function() {
    
      running = false;
      
      // Restart Home Bubble Animation
	  home_nav_animations();
      
    }, 600);
    
  });
          
}

// /// REMIX BUTTON /// //

var run_footer_remix_btn = function() {

  // SET VARS

  // Vars - Structure
  var $window      = $(window);
  var $body        = $('body');
  var $section     = $('section#footer');
  var $header      = $('section#header');
  var $content     = $('section#content');
  var $nav_main_a  = $('nav#nav_main li a');
  var $nav_home_a  = $('nav#nav_home li a');
  var $nav_main_bg = $('nav#nav_main li a div.bg_main');
  
  // Vars - Buttons
  var $btn_remix = $('#btn_remix');
  var btn_remix  = '#btn_remix';
  
  // Vars - Misc
  var running = false;
  
  // LIST FUNCTIONS
  
  // Remix Button
  var footer_btn_remix = function() {
	
	$section.on('click touchend', btn_remix, function(e) {
      e.preventDefault();
      
      if (running) {return;}
      running = true;
      
      var $self = $(this);
      
      // Kill Home Bubble Animation
	  clear_home_nav_timer();
      
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
      
      // Clear Page Animations
      $('div.page_animation').
        toggleClass('animations_active');

      // Remix BG Color
      function remix_bg_color() {
        
        var $page_animations = $('div.active_page_animations');
        var bg_color         = $body.css('background-color');
        var nav_li           = 'nav#nav_main li';
        var bg_main          = 'nav#nav_main li a div.bg_main';
        var bg_pixel         = 'nav#nav_main li a div.pixel';
        var nav_h_li         = 'nav#nav_home li';
        var bg_h_main        = 'nav#nav_home li a div.bg_main';
        var bg_h_pixel       = 'nav#nav_home li a div.pixel';
        var prev_bg_color    = bg_color;
        var bg_colors        = [];
        var get_bg_colors    = $nav_main_bg.each(function() {bg_colors.push($(this).css('background-color'));});
        var rand_bg_color    = bg_colors[Math.floor(Math.random()*bg_colors.length)];
        var hover_logo       = 'rgb(117,130,155)';
        var hover_blog       = 'rgb(118,158,139)';
        var hover_projects   = 'rgb(133,107,84)';
        var hover_contact    = 'rgb(171,148,98)';
        var hover_labs       = 'rgb(78,89,88)';
        
        // Change BG Color
        if(rand_bg_color == prev_bg_color) {
          remix_bg_color();
          return;
        }
        $body.css('background-color',rand_bg_color);
        
        // Change Animation
        $('div.page_animation')
            .removeClass('active_page_animations');
        
        setTimeout(function() {
            
          // Remove/Add page animations
		  $page_animations.addClass('remove_page_animations');
		  $page_animations.removeClass('remove_page_animations');
            
          if(rand_bg_color == 'rgba(137, 150, 175, 0.4)') {
            $('div.animations_home')
              .addClass('active_page_animations');
          } else if(rand_bg_color == 'rgba(138, 178, 159, 0.4)') {
            $('div.animations_blog')
              .addClass('active_page_animations'); 
          } else if(rand_bg_color == 'rgba(153, 127, 104, 0.4)') {
            $('div.animations_projects')
              .addClass('active_page_animations');
          } else if(rand_bg_color == 'rgba(191, 168, 118, 0.4)') {
            $('div.animations_contact')
              .addClass('active_page_animations');
          } else if(rand_bg_color == 'rgba(98, 109, 108, 0.4)') {
            $('div.animations_labs')
              .addClass('active_page_animations');
          }
            
        }, 600);            
        
        
        // Change Nav Pixel Color
        $nav_main_a.each(function() {
            
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
        
        // Restart Home Bubble Animation
		home_nav_animations();
        
      },1200);
      
      return false;     
    });
    
  }
  
  // LOAD FUNCTIONS
  
  // View Button
  footer_btn_remix();

}

// ////// ON PAGE LOAD ////// //

$(function() {
  // FUNCTIONS
  run_footer_btn_view();
  run_footer_remix_btn();           
});
