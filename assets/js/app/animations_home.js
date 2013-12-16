// /// HOME ANIMATIONS /// //


var cloud_animations = function() {
	
	// Vars
	var $cloud_large_1        = $('div.cloud_large_1');
	var $cloud_large_2        = $('div.cloud_large_2');
	var $cloud_large_3        = $('div.cloud_large_3');
	var $cloud_large_4        = $('div.cloud_large_4');
	var $cloud_medium_1       = $('div.cloud_medium_1');
	var $cloud_medium_2       = $('div.cloud_medium_2');
	var $cloud_medium_3       = $('div.cloud_medium_3');
	var $cloud_medium_4       = $('div.cloud_medium_4');
	var $cloud_medium_5       = $('div.cloud_medium_5');
	var $cloud_small_1        = $('div.cloud_small_1');
	var $cloud_small_2        = $('div.cloud_small_2');
	
	// Create Large Cloud Array
	var clouds_large     = [];
    var get_clouds_large = $('div.cloud_types_large div.cloud_type_large').each(function() {clouds_large.push($(this).css('background-image'));});
    
    // Create Medium Cloud Array
	var clouds_medium     = [];
    var get_clouds_medium = $('div.cloud_types_medium div.cloud_type_medium').each(function() {clouds_medium.push($(this).css('background-image'));});
    
    // Create Small Cloud Array
	var clouds_small     = [];
    var get_clouds_small = $('div.cloud_types_small div.cloud_type_small').each(function() {clouds_small.push($(this).css('background-image'));});
	
	// Functions
	
	// Large
	function cloud_large_1() {
	  var z_index          = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_x_cord      = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
	  var rand_y_cord      = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
	  var rand_cloud_large = clouds_large[Math.floor(Math.random()*clouds_large.length)];
	  $cloud_large_1.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_large,
	    left : rand_x_cord + '%',
	    top  : rand_y_cord + '%'
	  });
	}
	
	function cloud_large_2() {
	  var z_index          = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_x_cord      = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
	  var rand_y_cord      = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
	  var rand_cloud_large = clouds_large[Math.floor(Math.random()*clouds_large.length)];
	  $cloud_large_2.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_large,
	    right              : rand_x_cord + '%',
	    top                : rand_y_cord + '%'
	  });
	}
	
	function cloud_large_3() {
	  var z_index          = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_x_cord      = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
	  var rand_y_cord      = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
	  var rand_cloud_large = clouds_large[Math.floor(Math.random()*clouds_large.length)];
	  $cloud_large_3.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_large,
	    right              : rand_x_cord + '%',
	    bottom             : rand_y_cord + '%'
	  });
	}
	
	function cloud_large_4() {
	  var z_index          = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_x_cord      = Math.floor(Math.random() * (55 - 45 + 1)) + 45;
	  var rand_cloud_large = clouds_large[Math.floor(Math.random()*clouds_large.length)];
	  $cloud_large_4.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_large,
	    left               : rand_x_cord + '%'
	  });
	}
	
	// Medium
	function cloud_medium_1() {
	  var z_index           = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_x_cord       = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
	  var rand_y_cord       = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
	  var rand_cloud_medium = clouds_medium[Math.floor(Math.random()*clouds_medium.length)];
	  $cloud_medium_1.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_medium,
	    right              : rand_x_cord + '%',
	    bottom             : rand_y_cord + '%'
	  });
	}
	
	function cloud_medium_2() {
	  var z_index           = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_x_cord       = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
	  var rand_y_cord       = Math.floor(Math.random() * (50 - 40 + 1)) + 40;
	  var rand_cloud_medium = clouds_medium[Math.floor(Math.random()*clouds_medium.length)];
	  $cloud_medium_2.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_medium,
	    left               : rand_x_cord + '%',
	    bottom             : rand_y_cord + '%'
	  });
	}
	
	function cloud_medium_3() {
	  var z_index           = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_y_cord       = Math.floor(Math.random() * (40 - 35 + 1)) + 35;
	  var rand_cloud_medium = clouds_medium[Math.floor(Math.random()*clouds_medium.length)];
	  $cloud_medium_3.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_medium,
	    top                : rand_y_cord + '%'
	  });
	}
	
	function cloud_medium_4() {
	  var z_index           = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_y_cord       = Math.floor(Math.random() * (25 - 20 + 1)) + 20;
	  var rand_cloud_medium = clouds_medium[Math.floor(Math.random()*clouds_medium.length)];
	  $cloud_medium_4.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_medium,
	    bottom             : rand_y_cord + '%'
	  });
	}
	
	function cloud_medium_5() {
	  var z_index           = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_y_cord       = Math.floor(Math.random() * (45 - 40 + 1)) + 40;
	  var rand_cloud_medium = clouds_medium[Math.floor(Math.random()*clouds_medium.length)];
	  $cloud_medium_5.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_medium,
	    bottom             : rand_y_cord + '%'
	  });
	}
	
	// Small
	function cloud_small_1() {
	  var z_index          = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_y_cord      = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
	  var rand_cloud_small = clouds_small[Math.floor(Math.random()*clouds_small.length)];
	  $cloud_small_1.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_small,
	    bottom             : rand_y_cord + '%'
	  });
	}
	function cloud_small_2() {
	  var z_index          = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_y_cord      = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
	  var rand_cloud_small = clouds_small[Math.floor(Math.random()*clouds_small.length)];
	  $cloud_small_2.css({
	  	'z-index'          : z_index,
	  	opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_small,
	    top                : rand_y_cord + '%'
	  });
	}
	
	// Load
	cloud_large_1();
	cloud_large_2();
	cloud_large_3();
	cloud_large_4();
	cloud_medium_1();
	cloud_medium_2();
	cloud_medium_3();
	cloud_medium_4();
	cloud_medium_5();
	cloud_small_1();
	cloud_small_2();
	
	// Wait for page load and attach animations
	$('div.page_animation').one('webkitTransitionEnd transitionend', function(e) {
	    
	    $cloud_large_3.addClass('cloud_large_3_animation');
	    $cloud_medium_3.addClass('cloud_medium_3_animation');
	    $cloud_medium_4.addClass('cloud_medium_4_animation');
	    $cloud_small_1.addClass('cloud_small_1_animation');
	    $cloud_small_2.addClass('cloud_small_2_animation');
        
	});
	
}


// Ship Loop
var ship_1_loop = function() {
    
    // Rand Ship Pause
    var rand_ship_pause = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    
    // Ship Array
    var ship_array = [
        '<script>cargo_ship_1_position(); person_sailor_animation();</script><div class="ship_1 cargo_ship_1_wrapper"><div class="ship_1_timer"></div><div class="cargo_ship_1"><div class="cab_1"></div><div class="rail_1"></div><div class="sail_1"></div><div class="prop_1"></div><div class="prop_2"></div><div class="prop_3"></div><div class="ex_1"></div><div class="person_wrapper person_sailor_1"><div class="person_event_timer"></div><div class="person_pixel_timer"></div></div></div></div>',
    ];
    
    // Shuffle Ships
    shuffle(ship_array);
        
    // Add Remove Clone
    var timer   = $('.ship_1_timer'),  
    timer_clone = timer.clone(true);
    timer.before(timer_clone);
    $("." + timer.attr("class") + ":last").remove();
    
    // Ship Callbacks    
    $('.ships_loop_right').html(ship_array[0]);
    $('.ship_1_timer').one('webkitAnimationEnd', function() {
    
    console.log('done');
    
        $('.ships_loop_right').html('<div class="ship_1 ship_1_pause"><div class="ship_1_timer" style="-webkit-animation-duration:'+rand_ship_pause+'s; animation-duration:'+rand_ship_pause+'s;"></div></div>');
        $('.ship_1_timer').one('webkitAnimationEnd', function() {
            ship_1_loop();
        });
    });

}; 

// Cargo Ship 1
cargo_ship_1_position = function() {
  var $cargo_ship_1_wrapper = $('div.cargo_ship_1_wrapper');
  var z_index               = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
  var rand_y_cord           = Math.floor(Math.random() * (45 - 55 + 1)) + 45;
  $cargo_ship_1_wrapper.css({
  	'z-index'          : z_index,
    top                : rand_y_cord + '%'
  });
}

// Person Sailor Animation
person_sailor_animation = function() {
    
    // Animation Array
    animations = [
        function() {                
            // Add Remove Clone
            var pixel_timer   = $('.person_pixel_timer'),  
            pixel_timer_clone = pixel_timer.clone(true);
            pixel_timer.before(pixel_timer_clone);
            $("." + pixel_timer.attr("class") + ":last").remove();
            // Add Animation
            $('.person_event_timer').attr('class', 'person_event_timer walk_right_event');
            $('.person_pixel_timer').attr('class', 'person_pixel_timer walk_right_animation');
            if(window.debug) console.log('walking right');
            // Set Position
            var get_position     = window.getComputedStyle($('.person_wrapper').get(0));
            var current_position = new WebKitCSSMatrix(get_position.webkitTransform);
            var set_position     = current_position.m41 + 50;                  
            $('.person_wrapper').css({
                '-webkit-transform' : 'translate3d(' + set_position + 'px,0,0)',
                'transform'         : 'translate3d(' + set_position + 'px,0,0)'
            });
        },
        function() {
            // Add Remove Clone
            var pixel_timer   = $('.person_pixel_timer'),  
            pixel_timer_clone = pixel_timer.clone(true);
            pixel_timer.before(pixel_timer_clone);
            $("." + pixel_timer.attr("class") + ":last").remove();
            // Add Animation
            $('.person_event_timer').attr('class', 'person_event_timer walk_left_event');
            $('.person_pixel_timer').attr('class', 'person_pixel_timer walk_left_animation');
            if(window.debug) console.log('walking left');
            // Set Position
            var get_position     = window.getComputedStyle($('.person_wrapper').get(0));
            var current_position = new WebKitCSSMatrix(get_position.webkitTransform);
            var set_position     = current_position.m41 - 50;                  
            $('.person_wrapper').css({
                '-webkit-transform' : 'translate3d(' + set_position + 'px,0,0)',
                'transform'         : 'translate3d(' + set_position + 'px,0,0)'
            });
        },
        function() {
            // Add Remove Clone
            var pixel_timer   = $('.person_pixel_timer'),  
            pixel_timer_clone = pixel_timer.clone(true);
            pixel_timer.before(pixel_timer_clone);
            $("." + pixel_timer.attr("class") + ":last").remove();
            // Add Animation
            $('.person_event_timer').attr('class', 'person_event_timer look_around_event');
            $('.person_pixel_timer').attr('class', 'person_pixel_timer look_around_animation');
            if(window.debug) console.log('looking around');
        },
        function() {
            // Add Remove Clone
            var pixel_timer   = $('.person_pixel_timer'),  
            pixel_timer_clone = pixel_timer.clone(true);
            pixel_timer.before(pixel_timer_clone);
            $("." + pixel_timer.attr("class") + ":last").remove();
            // Add Animation
            $('.person_event_timer').attr('class', 'person_event_timer bend_down_event');
            $('.person_pixel_timer').attr('class', 'person_pixel_timer bend_down_animation');
            if(window.debug) console.log('bending down');
        },
        function() {
            // Add Remove Clone
            var pixel_timer   = $('.person_pixel_timer'),  
            pixel_timer_clone = pixel_timer.clone(true);
            pixel_timer.before(pixel_timer_clone);
            $("." + pixel_timer.attr("class") + ":last").remove();
            // Add Animation
            $('.person_event_timer').attr('class', 'person_event_timer smoking_event');
            $('.person_pixel_timer').attr('class', 'person_pixel_timer smoking_animation');
            if(window.debug) console.log('smoking');
        },
        function() {
            // Add Remove Clone
            var pixel_timer   = $('.person_pixel_timer'),  
            pixel_timer_clone = pixel_timer.clone(true);
            pixel_timer.before(pixel_timer_clone);
            $("." + pixel_timer.attr("class") + ":last").remove();
            // Add Animation
            $('.person_event_timer').attr('class', 'person_event_timer stand_still_event');
            $('.person_pixel_timer').attr('class', 'person_pixel_timer stand_still_animation');
            if(window.debug) console.log('standing still');
        },
    ];
        
    // Shuffle Animations
    shuffle(animations);
        
    // Loop Animations
    var person_sailor_loop = function() {  
        
        // Add Remove Clone
        var timer   = $('.person_event_timer'),  
        timer_clone = timer.clone(true);
        timer.before(timer_clone);
        $("." + timer.attr("class") + ":last").remove();
        
        if(window.debug) console.log('--- Begin ---');
        
        // Start Animations
        animations[0]();
        // Animation 1 CallBack   
        $('.person_event_timer').one('webkitAnimationEnd', function() {
            $('.person_event_timer').attr('class', 'person_event_timer');
            $('.person_pixel_timer').attr('class', 'person_pixel_timer');
            animations[1]();    
            // Animation 2 CallBack
            $(this).one('webkitAnimationEnd', function() {
                $('.person_event_timer').attr('class', 'person_event_timer');
                $('.person_pixel_timer').attr('class', 'person_pixel_timer');
                animations[2]();
                // Animation 3 CallBack
                $(this).one('webkitAnimationEnd', function() {
                    $('.person_event_timer').attr('class', 'person_event_timer');
                    $('.person_pixel_timer').attr('class', 'person_pixel_timer');
                    animations[3]();  
                    // Animation 4 CallBack
                    $(this).one('webkitAnimationEnd', function() {
                        $('.person_event_timer').attr('class', 'person_event_timer');
                        $('.person_pixel_timer').attr('class', 'person_pixel_timer');                        
                        animations[4](); 
                        // Animation 5 CallBack
                        $(this).one('webkitAnimationEnd', function() {
                            $('.person_event_timer').attr('class', 'person_event_timer');
                            $('.person_pixel_timer').attr('class', 'person_pixel_timer'); 
                            animations[5]();    
                            // Animation 6 CallBack
                            $(this).one('webkitAnimationEnd', function() {
                                $('.person_event_timer').attr('class', 'person_event_timer');
                                $('.person_pixel_timer').attr('class', 'person_pixel_timer');                        
                                // Re-shuffle Animations
                                shuffle(animations);
                                if(window.debug) console.log('--- end ---');
                                // Loop The Function
                                person_sailor_loop();
                            });
                        });
                    });
                });             
            });      
        });
    }; person_sailor_loop();
    
};




// LOAD FUNCTIONS

$(function() {
  cloud_animations();  
  /* cargo_ship_animations(); */
  ship_1_loop();
});