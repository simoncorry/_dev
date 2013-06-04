// FUNCTIONS

// NAV

$(function nav_main() {
  
  // Global Vars
  var $window  = $(window);
  var $body    = $('body');
  var $section = $('section#header');
  var $nav     = $('nav');
  var $nav_ul  = $('#nav_main');
  var $nav_li  = $('#nav_main li');
  var $nav_a   = $('#nav_main a');
  var $nav_btn = $('#btn_mobile');
  
  var nav_li   = '#nav_main li';
  var nav_a    = '#nav_main a';
  var nav_btn  = '#btn_mobile';
  var running  = false;
  var isiPad   = navigator.userAgent.match(/iPad/i) != null;
  
  // Anchor Link Calls
  function links() {
    $section.on('click', nav_a, function(e) {
      e.preventDefault();
      
      if (running) {return;}
      running = true;
      
      var $self   = $(this);
      var bg_main = $self.children('div.bg_main').css('background-color');
      
      // Link - Toggle Bar
      function toggle_bar() {
        $nav_ul
          .children()
          .removeClass('active');
        $self
          .closest($nav_li)
          .toggleClass('active');   
      }
      
      // Link - Remove Section
      function remove_section() {
        $section.next('section')
          .addClass('clear');
        setTimeout(function() {
          $section.next('section')
            .addClass('remove');
        },2300);
      }
      
      // Link - Apply BG
      function apply_bg() {
        setTimeout(function() {
          $body.css('background-color',bg_main);
        },1900);
      }
      
      // If Link is NOT active
      if(!$self.closest($nav_li).hasClass('active')) {

        // Call Functions
        toggle_bar();  
        remove_section();
        apply_bg();

      } 
      
      setTimeout(function() {
        running = false;
      },2300);
      
      return false;     
    });
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
      },400);
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
  
  // Mobile Close
  function mobile_close() {
    $section.on('click', nav_a, function(e) {
      e.preventDefault();
      var $self = $(this);  
      $self
        .toggleClass('active')
        .closest($nav_ul)
        .removeClass('active')
        .prev($nav_btn)
        .removeClass('active');
        
      return false;
    });
  }
  
  // Load
  links();
  accordion();
  btn_mobile();
  btn_mobile_ios();
  mobile_close();
  
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
  
});