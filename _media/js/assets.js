/* /// ASSETS /// */

/* Clouds */

$(document).ready(function() {  
    var paper = new Raphael(document.getElementById('cloud-small-1'), 200, 200);  
    var cloud_small_one = paper.path('M 0 30 l 0 5 l 5 0 l 0 -5 l -5 0 z');
    cloud_small_one.attr({fill: '#fff', stroke: '#eae6d8', 'stroke-width':1}); 
  
});  
  