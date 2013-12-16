// FUNCTIONS

// NAV

$(function header() {
  
  // Global Vars
  var $window       = $(window);
  var $body         = $('body');
  var $section      = $('section#header');
  var $nav          = $('nav');
  var $nav_ul       = $('#nav_main');
  var $nav_li       = $('#nav_main li');
  var $nav_a        = $('#nav_main a');
  
  var $nav_btn      = $('#btn_mobile');
  var $ajax         = $('div.ajax_wrapper');
               
  var nav_li   = '#nav_main li';
  var nav_a    = '#nav_main a';
  var nav_btn  = '#btn_mobile';
  var running  = false;
  var isiPad   = navigator.userAgent.match(/iPad/i) != null;
  
  // Show/Hide Nav
  function show_nav() {
    var $home = $('section.home');
    if($home.hasClass('home')) {
      $nav_ul.addClass('nav_hidden');
      $nav_btn.addClass('nav_hidden');  
    } else {
      $nav_ul.removeClass('nav_hidden');
      $nav_btn.removeClass('nav_hidden');
    }
  }
  
  // Accordion
  function accordion() {
    $nav_li.mouseenter(function() { 
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
    $nav_li.mouseleave(function() {
      $nav_li.css('transform','translate3d(0,0,0)');
    });
  }
  function accordion_unbind() {
    $nav_li.unbind('mouseenter mouseleave');
  }

  // Mobile Button
  function btn_mobile() {
    $section.on('click', nav_btn, function() {
    
      if (running) {return;}
      running = true;
      
      var $self = $(this);
      var doc_y = $(document).height();

      if(!$self.hasClass('active')) {
        $self
          .toggleClass('active')
          .next($nav_ul)
          .toggleClass('active')
          .css('height',doc_y+'px');
      } else { 
        $self
          .toggleClass('active')
          .next($nav_ul)
          .toggleClass('active')
      }
      
      setTimeout(function() {
        running = false;
      },300);
    });
  }
  function btn_mobile_clear() {
    if($nav_btn.hasClass('active')) {
      $nav_btn
        .toggleClass('active')
        .next($nav_ul)
        .css('height','100%')
        .toggleClass('active');
    } else {
      $nav_btn
        .next($nav_ul)
        .css('height','auto');    
    }
  }
    
  // Mobile Button iOS (Sets height on mobile orientation change)
  function btn_mobile_ios() {
    if($nav_btn.hasClass('active')) {
      var doc_y = $(document).height();
      $nav_ul.css('height', doc_y+'px');
    }
  }
  
  // Load
  show_nav();
  accordion();
  btn_mobile();
  btn_mobile_ios();
  
  // Responsive Check
  function check_width() {
    var windowsize = $window.width();
    // < 747
    if (windowsize < 747 || isiPad == true) {
      accordion_unbind();
      /* mobile_close(); */
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
  
  // /////////////////////////////////////////////////////////// //
  //                     AJAX CALLS BELOW                        //
  // /////////////////////////////////////////////////////////// //
  
  $('body').on('click', 'ul#nav_main a, #nav_home a', function(e) {
    
    e.preventDefault();
    
    var $self   = $(this);
    var url     = $self.attr('href');
    var bg_main = $self.children('div.bg_main').css('background-color');
    
    if(!$self.closest($nav_li).hasClass('active')) {
      
      // ACTIONS PERFORMED - BEFORE LOAD
      
      var $view_btn      = $('#btn_view');
      var $sections      = $('section.home, section.blog, section.projects, section.contact, section.labs');
      var $nav_a_active  = $('#nav_main a.active');
      
      var run_time       = parseInt(4800);
      var clear_time     = parseInt(0);
      var remove_time    = parseInt(2300);
      var apply_bg_time  = parseInt(1600);
      
      // ONLY MOBILE
      if($nav_ul.hasClass('active')) {
        
        // this first
        $nav_a_active.toggleClass('active');
        $self.toggleClass('active');
          
        
      
      }
      
      // ONLY HOME PAGE 
      if($self.hasClass('home_btn')) {
        run_time      = parseInt(7600);
        clear_time    = parseInt(1200);
        remove_time   = parseInt(2800);
        apply_bg_time = parseInt(2800);
        $self.toggleClass('active'); /* Spin Animation */
      }
      
      // ONLY FOOTER
      if($view_btn.hasClass('active')) {
        // Check if Footer View Button is Active
        $view_btn.toggleClass('active');
        $sections.toggleClass('hidden');
      }
      
      // ALL OTHERS
 
      if (running) {return;}
      running = true;
      pause   = true;
      
      // Toggle Active Bar
      function toggle_bar() {
        $nav_ul
          .children()
          .removeClass('active');
        $self
          .closest($nav_li)
          .toggleClass('active');   
      }
      
      // Remove Current Section
      function remove_section() {
        // Clear
        setTimeout(function() {
          $sections.addClass('clear');
        },clear_time);
        // Display None
        setTimeout(function() {
          $sections.addClass('remove');
        },remove_time);
      }
      
      // Apply New BG Color
      function apply_bg() {
        setTimeout(function() {
          $body.css('background-color',bg_main);
        },apply_bg_time);
      }
      
      // Init Ajax Loading Preloader
      function ajax_loading() {
        setTimeout(function() {
          $ajax.toggleClass('active');
        },remove_time);
      }
      
      // Call Functions
      toggle_bar();  
      remove_section();
      apply_bg();
      ajax_loading();
      
      // ACTIONS PERFORMED - AFTER LOAD
      
      setTimeout(function() {
        $().wvgg_ajax_load({
          'url': url,
          success: function(r) {
            
            var $sections = $('section.home, section.blog, section.projects, section.contact, section.labs');
            
            // ONLY HOME PAGE
            if($sections.hasClass('home')) {
              
              bubble_home(); // Init Home Bubble
              
              // Get Main Nav BG Colors
              var bg_blog     = $('ul#nav_main > li a.blog > div.pixel').css('background-color');
              var bg_projects = $('ul#nav_main > li a.projects > div.pixel').css('background-color');
              var bg_contact  = $('ul#nav_main > li a.contact > div.pixel').css('background-color');
              var bg_labs     = $('ul#nav_main > li a.labs > div.pixel').css('background-color');
              
              // Declare Home Nav as Objects
              var $home_blog     = $('ul#nav_home > li a.blog > div.pixel');
              var $home_projects = $('ul#nav_home > li a.projects > div.pixel');
              var $home_contact  = $('ul#nav_home > li a.contact > div.pixel');
              var $home_labs     = $('ul#nav_home > li a.labs > div.pixel');
              
              // Sync Home Nav with Main Nav
              $home_blog.css('background-color',bg_blog);
              $home_projects.css('background-color',bg_projects);
              $home_contact.css('background-color',bg_contact);
              $home_labs.css('background-color',bg_labs);
              
              // Declare Hover Colors
              var hover_new_logo     = 'rgb(117,130,155)';
              var hover_new_blog     = 'rgb(118,158,139)';
              var hover_new_projects = 'rgb(133,107,84)';
              var hover_new_contact  = 'rgb(171,148,98)';
              var hover_new_labs     = 'rgb(78,89,88)';
              
              // Sync Home Nav Hover Colors
              $('ul#nav_home.mobile_hover li a div.pixel').hover(function() {
                
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
              
            }
            
            // OTHERS
            
            // Set active section
            $sections
              .removeClass('remove')
              .addClass('active');
            
            // Set active bar
            var active_item_selector = $(r).filter('.ajax_replaceable').data('active_nav_item'); // ex. #li_blog
            $(active_item_selector).removeClass('active');
            $(active_item_selector).addClass('active');
            
            // Close Ajax Loading Preloader
            $ajax.toggleClass('active');

          }
        });
      },remove_time);
      
      setTimeout(function() {
        running = false;
        pause   = false;
        show_nav(); // Init Nav Page Detection
      },run_time);
    
    } else return;
    
  }).find('div.bg').on('webkitTransitionEnd transitionEnd', function() {
    console.log(this);
    $nav_btn.toggleClass('active');
    $nav_ul.toggleClass('active');  
  });

  var active_item_selector = $('.ajax_replaceable').data('active_nav_item'); // ex. #li_blog
  $(active_item_selector).addClass('active');
  
  var color = $('.ajax_replaceable').data('color'); // ex. #li_blog
  $('body').css('background-color', color);
  
});