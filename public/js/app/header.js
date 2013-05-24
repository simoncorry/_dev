// FUNCTIONS

// Nav Main
function nav_main() {
  $('#nav_main li').mouseenter(function() { 
    var $self   = $(this)
    var margin  = 15
    var h_width = $('#home     .title').outerWidth() + margin;
    var b_width = $('#blog     .title').outerWidth() + margin;
    var p_width = $('#projects .title').outerWidth() + margin;
    var c_width = $('#contact  .title').outerWidth() + margin;
    var l_width = $('#labs     .title').outerWidth() + margin;
    if($self.is('#home'))     {$self.nextAll('li').css('transform','translate3d('+h_width+'px,0,0)');}
    if($self.is('#blog'))     {$self.nextAll('li').css('transform','translate3d('+b_width+'px,0,0)');}
    if($self.is('#projects')) {$self.nextAll('li').css('transform','translate3d('+p_width+'px,0,0)');}
    if($self.is('#contact'))  {$self.nextAll('li').css('transform','translate3d('+c_width+'px,0,0)');}
    if($self.is('#labs'))     {$self.nextAll('li').css('transform','translate3d('+l_width+'px,0,0)');}    
  });          
  $('#nav_main li').mouseleave(function() {   
    $('#nav_main li').css('transform','translate3d(0,0,0)');
  });
}
function nav_main_unbind() {
  $('#nav_main li').unbind('mouseenter mouseleave');
}

// Mobile Button
$(function btn_mobile() {
  $('#btn_mobile').click(function() {
    var $self           = $(this);
    var document_height = $(document).height();
    if($self.hasClass('active')) {
      $self
        .next('#nav_main')
        .css('height','100%');
    } else { 
      $self
        .next('#nav_main')
        .css('height', document_height);
    }
    $self
      .toggleClass('active')
      .next('#nav_main')
      .toggleClass('active'); 
  });
});
function btn_mobile_unbind() {
  if($('#btn_mobile').hasClass('active')) {
    $('#btn_mobile')
      .toggleClass('active')
      .next('#nav_main')
      .css('height','100%')
      .toggleClass('active');
  }
}

// RESPONSIVE ADJUSTMENTS CHECKER

// Width
var $window = $(window);
function check_width() {
  var windowsize = $window.width();
  // < 747
  if (windowsize < 747) {
    nav_main_unbind();
  }
  else {
    nav_main();
    btn_mobile_unbind();
  }
}

// Execute on load
$(function() {
  check_width(); 
  $(window).resize(check_width); // Bind event listener
});