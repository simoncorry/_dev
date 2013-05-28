// FUNCTIONS
        
// NAV HOME

$(function() {
  
  // Global Vars
  var $window  = $(window);
  var $nav     = $('nav');
  var $nav_ul  = $('#nav_home');
  var $nav_li  = $('#nav_home li');
  var $nav_a   = $('#nav_home a');
  
  var nav_a    = '#nav_home a';
  var running  = false;
  
  // Nav Spin
  function nav_spin() {
    $nav.on('click', nav_a, function(e) {
      e.preventDefault();
      
      if (running) {return;}
      running = true;
      
      var $self = $(this);
      
      $self.toggleClass('active');   
      
      setTimeout(function() {
        running = false;
        $self
          .toggleClass('active')
          .toggleClass('remove'); 
      },1400);
      
      return false;
    });
  }
  
  // Load
  $(function() {
    nav_spin(); 
  });
  
});