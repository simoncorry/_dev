// FUNCTIONS

// NAV

$(function nav_main() {
  
  // Global Vars
  var $window  = $(window);
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
  
  // Bar
  function bar() {
    $section.on('click', nav_a, function(e) {
      e.preventDefault();
      
      if (running) {return;}
      running = true;
      
      var $self = $(this);
      
      $self
        .closest($nav_ul)
        .children()
        .removeClass('active');
    
      if(!$self.closest($nav_li).hasClass('active')) {
        $self
          .closest($nav_li)
          .toggleClass('active');
      }
      
      setTimeout(function() {
        running = false;
      },200);
      
      return false;     
    });
  }
  
  // Accordion
  function accordion() {
    $nav_li.mouseenter(function() { 
      var $self   = $(this)
      var margin  = 15
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
    $section.on('click touchend', nav_btn, function(e) {
      e.preventDefault();
      
      if (running) {return;}
      running = true;
      
      var $self = $(this);
      var doc_y = $(document).height();
      
      if($self.hasClass('active')) {
        $self
          .next($nav_ul)
          .css('height','100%');
      } else { 
        $self
          .next($nav_ul)
          .css('height',doc_y);
      }
      $self
        .toggleClass('active')
        .next($nav_ul)
        .toggleClass('active');
      
      setTimeout(function() {
        running = false;
      },300); 
      
      return false;
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
      $nav_ul.css('height', doc_y);
    }
  }
  
  // Mobile Close
  function mobile_close() {
    $section.on('click', nav_a, function(e) {
      e.preventDefault();
      var $self = $(this);
      $self
        .toggleClass('active');
      $self
        .closest($nav_ul)
        .removeClass('active');
    });
  }
  
  // Load
  bar();
  accordion();
  btn_mobile();
  btn_mobile_ios();
  
  // Responsive Check
  function check_width() {
    var windowsize = $window.width();
    // < 747
    if (windowsize < 747 || isiPad == true) {
      accordion_unbind();
      mobile_close();
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
  $window.resize(check_width); // Bind event listener (window resize)
  $window.bind('orientationchange', check_orientation); // Bind event listener (iOS orientation change)
  
});