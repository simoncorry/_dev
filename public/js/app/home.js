// FUNCTIONS
        
// NAV HOME

$(function home() {
  
  // Global Vars
  var $window    = $(window);
  var $body      = $('body');
  var $section   = $('section#home');
  var $section_h = $('section#header');
  var $nav       = $('nav');
  var $nav_ul    = $('#nav_home');
  var $nav_li    = $('#nav_home li');
  var $nav_a     = $('#nav_home a');
  
  var nav_a    = '#nav_home a';
  var running  = false;
  
  // Nav Spin
  function nav_home() {
    $section.on('click', nav_a, function(e) {
      e.preventDefault();
      
      if (running) {return;}
      running = true;
      
      var $self   = $(this);
      var bg_main = $self.children('div.bg_main').css('background-color');
      
      // Home - Toggle Header Bar
      function toggle_bar() {
        
        var current_class   = $self.attr('class');
        var $current_header = $section_h.find('a.'+current_class+'');
        
        $section_h
          .find('ul')
          .children()
          .removeClass('active');
        $current_header
          .closest('li')
          .toggleClass('active');   
      }
      
      // Home - Box Spin 
      function box_spin() {
        $self
          .toggleClass('active');
          
        // Prevent hover effects  
        $nav_a
          .children('div.pixel')
          .addClass('no_animation');
        
        // Begin clearing animation
        setTimeout(function() {
          $section
            .addClass('clear');
        },1200);
        
        // Display none
        setTimeout(function() {
          $section
            .addClass('remove'); 
        },2800);
      }
      
      // Home - Apply BG
      function apply_bg() {
        setTimeout(function() {
          $body.css('background-color',bg_main);
        },2800);
      }
      
      // Call Functions
      toggle_bar();
      box_spin();
      apply_bg();
      
      setTimeout(function() {
        running = false; 
      },2600);
      
      return false;
    });
  }
  
  // Load
  $(function() {
    nav_home(); 
  });
  
});