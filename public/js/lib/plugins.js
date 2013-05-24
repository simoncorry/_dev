// Avoid `console` errors in browsers that lack a console.
(function() {
  var noop = function noop() {};
  var methods = [
      'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
      'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
      'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
      'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = window.console || {};
  
  while (length--) {
      // Only stub undefined methods.
      console[methods[length]] = console[methods[length]] || noop;
  }
}());

// Moomba Preloader
$(function() {
  $('#preloader').moombaPreloader({
    type        : 2,                  // Rectangle(1), Square(2)
    bg_color    : 'rgb(208,202,189)', // Background Color
    // Rectangle(1) 
    r_box_color : 'rgb(254,254,254)', // Outer shell
    r_bar_color : 'rgb(204,102,51)' , // Inner Bar
    // Square(2)
    s_box_color : 'rgb(242,239,223)', // Outer shell
    s_square_1  : 'rgb(40,55,64)',    // Top Left
    s_square_2  : 'rgb(138,178,159)', // Top Right
    s_square_3  : 'rgb(191,168,118)', // Bottom Left
    s_square_4  : 'rgb(89,51,37)',    // Bottom Right 
  });
});