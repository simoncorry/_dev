// Hide Address Bar (iOS)
window.addEventListener("load",function() {
  setTimeout(function(){
    window.scrollTo(0, 1);
  }, 0);
});

// Chrome iOS Workaround 
/*
setTimeout(function() {
  if(window.pageYOffset !== 0) return;
  window.scrollTo(0, window.pageYOffset + 1);
}, 1);
*/