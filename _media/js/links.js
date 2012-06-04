/* //////////////////////////////////////////////////////////////////////////////////////////////////// */

/* ********** BEGIN - GLOBALS ************************************************************************* */

/* //////////////////////////////////////////////////////////////////////////////////////////////////// */

/* ////////////////////////////////////////////////// */

/* ********** BEGIN - TAG *************************** */

/* ////////////////////////////////////////////////// */

/*
 
     =====================
     .....................
     ... .................
     .. + ................
     ... ...... ..........
     ......... ^ .........
     .......... ..........
     ......... ^ .........          
     ........ ^^^ ........
     ....... ^^^^^ .......
     ...... ^^^^^^^ ......
     ..... ^^^^^^^^^ .....     
     =====================
     SIMON CORRY BA(HONS.)
     SCIENCE 'N CREATIVITY
     =====================
          
     http://simoncorry.com
               
*/

/* ////////////////////////////////////////////////// */

/* ********** END - TAG ***************************** */

/* ////////////////////////////////////////////////// */

/* //////////////////////////////////////////////////////////////////////////////////////////////////// */

/* ********** END - GLOBALS *************************************************************************** */

/* //////////////////////////////////////////////////////////////////////////////////////////////////// */

/* //////////////////////////////////////////////////////////////////////////////////////////////////// */

/* ********** BEGIN - LINKS *************************************************************************** */

/* //////////////////////////////////////////////////////////////////////////////////////////////////// */

/* ////////////////////////////////////////////////// */

/* ********** BEGIN - SHARING *********************** */

/* ////////////////////////////////////////////////// */

$(document).ready(function() {

    // SHARING
	encodedUrl = encodeURIComponent("http://simoncorry.com");
	encodedUrlTest = encodeURIComponent("http://letsswap.it");
	tweetString = "Visit the home of Science & Creativity ( http://simoncorry.com ) and follow the old chap ( @simoncorry )";
	
	// Get number of tweets about this page.
	$.getJSON(
		'http://api.tweetmeme.com/url_info.jsonc?url='+encodedUrl+'&callback=?',
		function(data) { if(data.story.url_count > 0) $("#twitterbubble").show().text(data.story.url_count); }
	);

	// Get number of facebook shares of this page.
	facebookFetch = encodeURIComponent('http://api.facebook.com/restserver.php?method=links.getStats&urls='+encodedUrl),
	$.get(
		"/_includes/crossFetch.php?url="+facebookFetch,
		function(data) {
			var shareCount = $(data).find('share_count').text();
			if(shareCount > 0) $("#facebookbubble").show().text(shareCount);
		}
	);
	
	$("#facebook-btn").click(function(){ window.open('http://www.facebook.com/sharer.php?u='+encodedUrl+'&t=Simon%20Corry', "Share", 'height=350,width=700'); });
	$("#twitter-btn").click(function(){ window.open('http://twitter.com/home?status='+encodeURIComponent(tweetString), "Tweet"); });
	
});

/* ////////////////////////////////////////////////// */

/* ********** END - SHARING ************************* */

/* ////////////////////////////////////////////////// */

/* ////////////////////////////////////////////////// */

/* ********** BEGIN - EXTERNALS ********************* */

/* ////////////////////////////////////////////////// */

$(document).ready(function() {
	
	var that = $(this)
	
	// NAV
	$('section.top > header > section.middle nav').live("click", function(){ 
        $('section.top > header > section.left').addClass('open-animation-lcol'),
        $('section.top > header > section.middle').addClass('open-animation-mcol'),
        $('section.top > header > section.right').addClass('open-animation-rcol');
        setTimeout( function(){            
            $(that)
            .queue(function(){
                $('section.top').addClass('top-fade'),
                $('section.bottom').addClass('bottom-fade'),
                $('section.content').addClass('content-active'),
                $('section.top > header').addClass('header-remove');
            });
        },1000);
    });
	// FOOTER
	$("#html5-badge-wrapper").click(function(){ window.open('http://www.w3.org/html/logo/','_blank'); });
	$("#css3-badge-wrapper").click(function(){ window.open('http://www.w3.org/Style/CSS/','_blank'); });
		
});

/* ////////////////////////////////////////////////// */

/* ********** END - EXTERNALS *********************** */

/* ////////////////////////////////////////////////// */

/* //////////////////////////////////////////////////////////////////////////////////////////////////// */

/* ********** END - LINKS ***************************************************************************** */

/* //////////////////////////////////////////////////////////////////////////////////////////////////// */