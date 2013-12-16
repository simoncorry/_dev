// /// GLOBAL VARS /// //

var $this    = $(this);
var $window  = $(window);
var running  = false;
var touchend = 'click';
var isiPad   = navigator.userAgent.match(/iPad/i) != null;





// /// GLOBAL FUNCTIONS /// //

// SET BG COLOR
var set_bg_color = function() {
  // Vars
  var color = $('.ajax_replaceable').data('color'); // ex. #li_blog
  // Logic
  $('body').css('background-color', color);
}


// SHOW/HIDE MAIN NAV
var show_nav = function() {
  // Vars
  var $content  = $('section#content');
  var $nav_main = $('#nav_main');
  var $nav_btn  = $('#btn_mobile');
  // Logic
  if($content.hasClass('home')) {
    $nav_main.addClass('nav_hidden');  
    $nav_btn.addClass('nav_hidden');
  } else {
    $nav_main.removeClass('nav_hidden');
    $nav_btn.removeClass('nav_hidden');
  }
}


// CLEAR MAIN NAV
var clear_nav = function() {

  // Vars
  var $nav_btn  = $('#btn_mobile');
  var $nav_main = $('#nav_main');
  var doc_y     = $(document).height();
  // Logic
  if($nav_btn.hasClass('active')) {
	$nav_btn
      .toggleClass('active')
    $nav_main
      .toggleClass('active');
  }

}


// SET ACTIVE LIST ITEM
var active_nav_item = function() {
  // Vars
  var active_item_selector = $('.ajax_replaceable').data('active_nav_item'); // ex. #li_blog
  // Logic
  $(active_item_selector).addClass('active');
}


// MAIN NAV ACCORDIAN
var accordion = function() {
  // Vars
  var $nav_main_li = $('#nav_main li');
  // Logic
  $nav_main_li.mouseenter(function() { 
    var $self   = $(this);
    var margin  = 15;
    var h_width = $('#li_home     .title').outerWidth() + margin;
    var b_width = $('#li_blog     .title').outerWidth() + margin;
    var p_width = $('#li_projects .title').outerWidth() + margin;
    var c_width = $('#li_contact  .title').outerWidth() + margin;
    var l_width = $('#li_labs     .title').outerWidth() + margin;
    if($self.is('#li_home'))     {$self.nextAll('li').css('transform','translate3d('+h_width+'px,0,0)');}
    if($self.is('#li_blog'))     {$self.nextAll('li').css('transform','translate3d('+b_width+'px,0,0)');}
    if($self.is('#li_projects')) {$self.nextAll('li').css('transform','translate3d('+p_width+'px,0,0)');}
    if($self.is('#li_contact'))  {$self.nextAll('li').css('transform','translate3d('+c_width+'px,0,0)');}
    if($self.is('#li_labs'))     {$self.nextAll('li').css('transform','translate3d('+l_width+'px,0,0)');}    
  });          
  $nav_main_li.mouseleave(function() {
    $nav_main_li.css('transform','translate3d(0,0,0)');
  });
}
// Accordion Unbind
var accordion_unbind = function() {
  // Vars
  var $nav_main_li = $('#nav_main li');
  // Logic
  $nav_main_li.unbind('mouseenter mouseleave');
}


// Mobile Button
var btn_mobile = function() {
  // Vars
  var $this     = $(this);
  var $header   = $('section.header'); 
  var $nav_main = $('#nav_main');
  var $nav_btn  = $('#btn_mobile');
  var nav_btn   = '#btn_mobile';
  var doc_y     = $(document).height();
  // Logic
  $header.on('click', nav_btn, function() {
    
    if(!$this.hasClass('active')) {
      $nav_btn
        .toggleClass('active')
      $nav_main
        .toggleClass('active')
        .css('height',doc_y+'px');
    } else { 
      $this
        .toggleClass('active')
      $nav_main
        .toggleClass('active')
        .css('height',100+'%');
    }
    
  });
}
// Mobile Button Clear
var btn_mobile_clear = function() {
  // Vars
  var $nav_btn  = $('#btn_mobile');
  var $nav_main = $('#nav_main');
  var doc_y     = $(document).height();
  // Logic
  if($nav_btn.hasClass('active')) {
    $nav_btn
      .toggleClass('active')
    $nav_main
      .css('height',doc_y+'px')
      .toggleClass('active');
  } else {
    $nav_main
      .css('height',doc_y+'px');    
  }
}
// Mobile Button iOS (Sets height on mobile orientation change)
var btn_mobile_ios = function() {
  // Vars
  var $nav_btn  = $('#btn_mobile');
  var $nav_main = $('#nav_main');
  // Logic
  if($nav_btn.hasClass('active')) {
    $nav_main.css('height',100+'%');
  }
}




// /// ON PAGE LOAD /// //

$(function() {

  // Load
  set_bg_color();
  show_nav(); 
  active_nav_item();
  accordion(); 
  btn_mobile();
  
  // Responsive Check
  function check_width() {
    var windowsize = $window.width();
    // < 747
    if (windowsize < 747) {
      accordion_unbind();
    } 
    else if (isiPad == true) {
      accordion_unbind();
      touchend = 'click touchend';
    }
    else {
      accordion();
      btn_mobile_clear();
    }
  } check_width();
  
  // Orientation Check
  function check_orientation() {
    btn_mobile_ios();
  }
  
  // Event Listners
  setTimeout(function() {
    $window.resize(check_width); // Bind event listener (window resize)
    $window.bind('orientationchange', check_orientation); // Bind event listener (iOS orientation change)
  },1);
          
});




// /// AJAX /// //

$(function() {

  // load selected link as AJAX calls
  jQuery('body').on(touchend, 'nav#nav_main a, nav#nav_home a', function(e){
    e.preventDefault();
    
    // BEFORE LOAD //
    
    console.log('before load');
    
    // Vars
    var $this                       = $(this);
    var $body						= $('body');
    var $clear_active_section_timer = $('div#clear_active_section_timer');
    var $content                    = $('section#content');
    var $page_animations            = $('div.active_page_animations');
    var $navs                       = $('nav#nav_main,nav#nav_home');
    var $nav_main                   = $('nav#nav_main');
    var $nav_home                   = $('nav#nav_home');
    var $nav_main_ul                = $('nav#nav_main ul');
    var $nav_main_li                = $('nav#nav_main li');
    var $ajax_loader                = $('div.ajax_wrapper');
    var $btn_view                   = $('#btn_view');
    
    var bg_main                     = $this.children('div.bg_main').css('background-color');
    var url                         = $this.attr('href');
    
    // If link item is active don't reload page
    if($this.closest($nav_main_li).hasClass('active')) {console.log('true'); return;}

    // Disable Clicks
    if (running) {return;}
    running = true;
    
    // Kill Home Bubble Animation
    clear_home_nav_timer();
    
    // Kill Footer View Button
    if($btn_view.hasClass('active')) {
      $btn_view.toggleClass('active');
      $content.toggleClass('hidden');
    }
    
    // Clear Mobile Nav   
    $('nav#nav_main div.bar').one('webkitTransitionEnd transitionend', function(e) {
    	clear_nav();
    });
    
    // Toggle Active Nav Item
	$nav_main_ul
	  .children()
	  .removeClass('active');
	$this
	  .closest($nav_main_li)
	  .toggleClass('active');

    // 01. Check nav type 
    // 02. Add timer delay for animations
    // 03. Run any animations during delay
    
    if($this.hasClass('nav_main_link')) {
      /* 02 */ $nav_main.addClass('add_timer');  
    } else if($this.hasClass('nav_home_link')) {
      /* 02 */ $nav_home.addClass('add_timer');
      /* 03 */ $this.addClass('nav_spin');
    }
    
    // Wait for nav item animation to end
    $('nav.add_timer').one('webkitAnimationEnd animationend', function(e) {
    
      // Start delay while section is cleared
      $clear_active_section_timer.addClass('add_timer');
      
      // Start clearing the section
      $content.addClass('clear_active');
      
      // Wait for the section to clear    
      $('div#clear_active_section_timer').one('webkitAnimationEnd animationend', function(e) {
      	
      	// Init Ajax Loader
	    $ajax_loader.toggleClass('active');
	    
	    // Reset view to top of page
	    $(window).scrollTop(0);
	    
	    // Start clearing the page animations
	    $page_animations.removeClass('active_page_animations');
        
        jQuery().wvgg_ajax_load({
          'url': url,
          success: function(r) {
          
            // AFTER LOAD //
            
            console.log('after load');
            
            // Kill Ajax Loader
			$ajax_loader.toggleClass('active');
			
			// Remove/Add page animations
			$page_animations.addClass('remove_page_animations');
			$page_animations.removeClass('remove_page_animations');
            
            // Apply New BG Color
            $body.css('background-color',bg_main);
			
			// Get Main Nav Pixel Colors
            var nav_pixel_colors_home     = $('nav#nav_main a.logo div.pixel').css('background-color');
            var nav_pixel_colors_blog     = $('nav#nav_main a.blog div.pixel').css('background-color');
            var nav_pixel_colors_projects = $('nav#nav_main a.projects div.pixel').css('background-color');
            var nav_pixel_colors_contact  = $('nav#nav_main a.contact div.pixel').css('background-color');
            var nav_pixel_colors_labs     = $('nav#nav_main a.labs div.pixel').css('background-color');
            
            // Get Main Nav BG Colors
            var nav_bg_colors_home     = $('nav#nav_main a.logo div.bg_main').css('background-color');
            var nav_bg_colors_blog     = $('nav#nav_main a.blog div.bg_main').css('background-color');
            var nav_bg_colors_projects = $('nav#nav_main a.projects div.bg_main').css('background-color');
            var nav_bg_colors_contact  = $('nav#nav_main a.contact div.bg_main').css('background-color');
            var nav_bg_colors_labs     = $('nav#nav_main a.labs div.bg_main').css('background-color');
            
            // Sync Home Nav Pixel Colors with Main Nav
            $('nav#nav_home li.list_blog div.pixel').css('background-color',nav_pixel_colors_blog);
            $('nav#nav_home li.list_projects div.pixel').css('background-color',nav_pixel_colors_projects);
            $('nav#nav_home li.list_contact div.pixel').css('background-color',nav_pixel_colors_contact);
            $('nav#nav_home li.list_labs div.pixel').css('background-color',nav_pixel_colors_labs);
            
            // Sync Home Nav Pixel Colors with Main Nav
            $('nav#nav_home li.list_blog div.bg_main').css('background-color',nav_bg_colors_blog);
            $('nav#nav_home li.list_projects div.bg_main').css('background-color',nav_bg_colors_projects);
            $('nav#nav_home li.list_contact div.bg_main').css('background-color',nav_bg_colors_contact);
            $('nav#nav_home li.list_labs div.bg_main').css('background-color',nav_bg_colors_labs);
			
            // Declare Hover Colors
            var hover_new_logo     = 'rgb(117, 130, 155)';
            var hover_new_blog     = 'rgb(118, 158, 139)';
            var hover_new_projects = 'rgb(133, 107, 84)';
            var hover_new_contact  = 'rgb(171, 148, 98)';
            var hover_new_labs     = 'rgb(78, 89, 88)';
            
            // Sync Home Nav Hover Colors
            $('nav#nav_home li a div.pixel').hover(function() {
              
              this_bg_color_new = $(this).css('background-color');
              
              if(this_bg_color_new == 'rgb(137, 150, 175)') {                
                $(this).css('background-color',hover_new_logo);
              } else if(this_bg_color_new == 'rgb(138, 178, 159)') {
                $(this).css('background-color',hover_new_blog);
              } else if(this_bg_color_new == 'rgb(153, 127, 104)') {
              	$(this).css('background-color',hover_new_projects);
              } else if(this_bg_color_new == 'rgb(191, 168, 118)') {
                $(this).css('background-color',hover_new_contact);
              } else if(this_bg_color_new == 'rgb(98, 109, 108)') {
                $(this).css('background-color',hover_new_labs);
              }
              
            },function() {
              $(this).css('background-color',this_bg_color_new);
            });
            
            // Sync Animation
            setTimeout(function() { 
              if(bg_main == 'rgba(137, 150, 175, 0.4)') {
                $('div.animations_home')
                  .addClass('active_page_animations');
              } else if(bg_main == 'rgba(138, 178, 159, 0.4)') {
                $('div.animations_blog')
                  .addClass('active_page_animations');
              } else if(bg_main == 'rgba(153, 127, 104, 0.4)') {
                $('div.animations_projects')
                  .addClass('active_page_animations');
              } else if(bg_main == 'rgba(191, 168, 118, 0.4)') {
                $('div.animations_contact')
                  .addClass('active_page_animations');  
              } else if(bg_main == 'rgba(98, 109, 108, 0.4)') {
                $('div.animations_labs')
                  .addClass('active_page_animations');
              }
            
            }, 2000);
            
            // Vars
            var $content = $('section#content');
            
            // Remove nav item timer
            $navs.removeClass('add_timer');
              
            // Start Section
            $content.addClass('active');
              
            // Set active bar
            active_nav_item();
            
            // Show/Hide Main Nav
            show_nav();
			
			// Allow Clicks
			running = false;
			
			// Responsive Check
		    function check_width() {
		      var windowsize = $window.width();
		      // < 747
		      if (windowsize < 747) {
		    
				// Kill Home Bubble Animation
				clear_home_nav_timer();
		      
		      }
		      else {
		        
		        // Restart Home Bubble Animation
				home_nav_animations();
		        
		      }
		    } check_width();
		    
		    // Event Listners
		    setTimeout(function() {
		      $window.resize(check_width); // Bind event listener (window resize)
		    },1);
			
          }
        });
      });
      
    });
  });
    
});


/*
var img = new Image();
img.onload = function() {
    // insert some CSS to fade in
}
img.src = 'blah.jpg';
*/