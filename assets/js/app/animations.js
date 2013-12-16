// /// PAGE ANIMATIONS /// //

// HITS

var hit_float = function() {
	
	var hit_float_objects = [];
	var get_clouds_large  = $('div.clouds_large div.cloud_large').each(function()   {hit_float_objects.push($(this).attr('id'));});
	var get_clouds_medium = $('div.clouds_medium div.cloud_medium').each(function() {hit_float_objects.push($(this).attr('id'));});
	var get_clouds_small  = $('div.clouds_small div.cloud_small').each(function()   {hit_float_objects.push($(this).attr('id'));});
	
	hit_float_objects.forEach(function(n,i) {
	  $('.' + n).on('mouseenter', function() {      
	    var $cloud_wrapper = $(this).closest('.cloud_wrapper');
	    var rand_float     = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
	    if($cloud_wrapper.is('.hit_float_1,.hit_float_2,.hit_float_3,.hit_float_4,.hit_float_5')) {return;} 
	    else {$cloud_wrapper.addClass('hit_float_'+rand_float);}
	    $cloud_wrapper.one('webkitAnimationEnd animationend', function() {
	      $cloud_wrapper.attr('class', 'cloud_wrapper');	    
	    });	      
	  });
	});
	
}

// LOAD FUNCTIONS

$(function() {
  hit_float();
});