<?php if(NOT_AJAX) : ?>
<!DOCTYPE html>
<!--[if IE 9]> <html lang="en" class="ie9 ie" xmlns="http://www.w3.org/1999/xhtml"><![endif]-->
<!--[if LT IE 9]>
    <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
<![endif]-->
<html lang="en">
    <!--
    
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
    WITH  <3  SIMON CORRY
    =====================
    
    http://simoncorry.com
              
    -->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>
        <meta name="description" content="<?php bloginfo('description'); ?>">
        <meta name="keywords" content="simon corry, science &amp; creativity, user experience design, information architecture, design &amp; development">   
        <meta name="author" content="Simon Corry">
       
        <!-- /// VIEWPORT /// -->
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"> 
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        
        <!-- /// ICONS /// -->
        <link rel="icon" type="image/x-icon" href="<?=get_template_directory_uri(); ?>/assets/images/lib/icons/favicon.ico">
        <link rel="shortcut icon" type="image/x-icon" href="<?=get_template_directory_uri(); ?>/assets/images/lib/icons/favicon.ico">
        <link rel="apple-touch-icon-precomposed" href="<?=get_template_directory_uri(); ?>/assets/images/lib/icons/lib/icons/apple-touch-icon-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?=get_template_directory_uri(); ?>/assets/images/lib/icons/apple-touch-icon-72x72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?=get_template_directory_uri(); ?>/assets/images/lib/icons/apple-touch-icon-114x114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?=get_template_directory_uri(); ?>/assets/images/lib/icons/apple-touch-icon-144x144-precomposed.png">
        
        <!-- /// CSS /// -->
        <link type="text/css" rel="stylesheet" href="<?=get_template_directory_uri(); ?>/assets/css/lib/reset.min.css">  
        <link type="text/css" rel="stylesheet" href="<?=get_template_directory_uri(); ?>/assets/css/lib/jquery.preloader-1.2.css">
        <link type="text/css" rel="stylesheet" href="<?=get_template_directory_uri(); ?>/assets/css/app/typography.css">
        <link type="text/css" rel="stylesheet" href="<?=get_template_directory_uri(); ?>/assets/css/app/main.css">
        <link type="text/css" rel="stylesheet" href="<?=get_template_directory_uri(); ?>/assets/css/app/ajax_loading.css">
        <link type="text/css" rel="stylesheet" href="<?=get_template_directory_uri(); ?>/assets/css/app/animations.css">
        <link type="text/css" rel="stylesheet" href="<?=get_template_directory_uri(); ?>/assets/css/app/animations_home.css">
        <link type="text/css" rel="stylesheet" href="<?=get_template_directory_uri(); ?>/assets/css/app/animations_home_people.css">
        <link type="text/css" rel="stylesheet" href="<?=get_template_directory_uri(); ?>/assets/css/app/header.css">
        <link type="text/css" rel="stylesheet" href="<?=get_template_directory_uri(); ?>/assets/css/app/footer.css">
        <link type="text/css" rel="stylesheet" href="<?=get_template_directory_uri(); ?>/assets/css/app/home.css">
        <link type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Oswald">
        <link type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic,700italic">
        
        <!-- /// JS /// -->
        <?php wp_head(); ?>
        <script type="text/javascript" src="<?=get_template_directory_uri(); ?>/assets/js/lib/detect-broswer.js"></script>
        <script type="text/javascript" src="<?=get_template_directory_uri(); ?>/assets/js/app/main.js"></script>
        <script type="text/javascript" src="<?=get_template_directory_uri(); ?>/assets/js/app/animations.js"></script>
        <script type="text/javascript" src="<?=get_template_directory_uri(); ?>/assets/js/app/animations_home.js"></script>
        <script type="text/javascript" src="<?=get_template_directory_uri(); ?>/assets/js/app/header.js"></script>
        <script type="text/javascript" src="<?=get_template_directory_uri(); ?>/assets/js/app/footer.js"></script>
        <script type="text/javascript" src="<?=get_template_directory_uri(); ?>/assets/js/app/home.js"></script>
        
        
    </head>
    <body id="preloader" <?php body_class(); ?>>
        
        <!-- /// AJAX LOADER /// -->
        <div class="ajax_wrapper">
            <div class="ajax_content">
                <div class="square_1"></div>
                <div class="square_2"></div>
                <div class="square_3"></div>
                <div class="square_4"></div>
            </div>
        </div>
        
        <!-- /// ANIMATIONS /// -->
        <section class="animations">
        	
        	<!-- Home -->
        	<div class="page_animation animations_home">
        		<!-- List cloud types -->
	        	<div class="cloud_types_large">
		        	<div class="cloud_type_large cloud_type_large_1"></div>
		        	<div class="cloud_type_large cloud_type_large_2"></div>
		        	<div class="cloud_type_large cloud_type_large_3"></div>
		        	<div class="cloud_type_large cloud_type_large_4"></div>
		        	<div class="cloud_type_large cloud_type_large_5"></div>
		        	<div class="cloud_type_large cloud_type_large_6"></div>
	        	</div>
	        	<div class="cloud_types_medium">
		        	<div class="cloud_type_medium cloud_type_medium_1"></div>
		        	<div class="cloud_type_medium cloud_type_medium_2"></div>
		        	<div class="cloud_type_medium cloud_type_medium_3"></div>
		        	<div class="cloud_type_medium cloud_type_medium_4"></div>
		        	<div class="cloud_type_medium cloud_type_medium_5"></div>
		        	<div class="cloud_type_medium cloud_type_medium_6"></div>
	        	</div>
	        	<div class="cloud_types_small">
		        	<div class="cloud_type_small cloud_type_small_1"></div>
		        	<div class="cloud_type_small cloud_type_small_2"></div>
		        	<div class="cloud_type_small cloud_type_small_3"></div>
	        	</div>
	        	<!-- Display cloud types -->
	        	<div class="clouds_large">
	        		<div class="cloud_wrapper">
			        	<div id="cloud_large_1" class="cloud_large cloud_large_1"></div>
	        		</div>
	        		<div class="cloud_wrapper">
			        	<div id="cloud_large_2" class="cloud_large cloud_large_2"></div>
	        		</div>
	        		<div class="cloud_wrapper">
			        	<div id="cloud_large_3" class="cloud_large cloud_large_3"></div>
	        		</div>
	        		<div class="cloud_wrapper">
			        	<div id="cloud_large_4" class="cloud_large cloud_large_4"></div>
	        		</div>
	        	</div>
	        	<div class="clouds_medium">
	        		<div class="cloud_wrapper">
			        	<div id="cloud_medium_1" class="cloud_medium cloud_medium_1"></div>
	        		</div>
	        		<div class="cloud_wrapper">
			        	<div id="cloud_medium_2" class="cloud_medium cloud_medium_2"></div>
	        		</div>
	        		<div class="cloud_wrapper">
			        	<div id="cloud_medium_3" class="cloud_medium cloud_medium_3"></div>
	        		</div>
	        		<div class="cloud_wrapper">
			        	<div id="cloud_medium_4" class="cloud_medium cloud_medium_4"></div>
	        		</div>
	        		<div class="cloud_wrapper">
			        	<div id="cloud_medium_5" class="cloud_medium cloud_medium_5"></div>
	        		</div>
	        	</div>
	        	<div class="clouds_small">
	        		<div class="cloud_wrapper">
			        	<div id="cloud_small_1" class="cloud_small cloud_small_1"></div>
	        		</div>
	        		<div class="cloud_wrapper">
			        	<div id="cloud_small_2" class="cloud_small cloud_small_2"></div>
	        		</div>
	        	</div>
	        	<!-- Display Ships -->
	        	<div class="ships_loop_right">
    	        	
	        	</div>
                <!-- Display Drones -->
	        	<div class="drone_1 cargo_drone_1_wrapper">
		        	<div class="cargo_drone_1">
		        		<div class="prop_1"></div>
		        		<div class="cargo_1"></div>
		        	</div>
	        	</div>
        	</div>
        	<!-- Blog -->
        	<div class="page_animation animations_blog">
        	</div>
        	<!-- Projects -->
        	<div class="page_animation animations_projects">
        	</div>
        	<!-- Contact -->
        	<div class="page_animation animations_contact">
        	</div>
        	<!-- Labs -->
        	<div class="page_animation animations_labs">
        	</div>
        </section>
        
        <!-- /// HEADER /// -->
        <section class="header clearfix">
        	<a id="btn_mobile">Nav</a>
            <nav id="nav_main">
            	<ul class="clearfix">
                	<li id="li_home">
                        <div class="bar"></div>
                        <div class="title">Home</div>
                        <a href="/" class="logo nav_main_link">
                            <div class="bg_image"></div>
                            <? for( $i = 0; $i < 16; $i++ ) : ?>
                                <div class="pixel"></div>
                            <? endfor; ?>
                            <div class="bg_main"></div>
                        </a>
                    </li>
                    <li id="li_blog">
                        <div class="bar"></div>
                        <div class="title">Blog</div>
                        <a href="/blog" class="blog nav_main_link">
                            <div class="bg_image"></div>
                            <? for( $i = 0; $i < 16; $i++ ) : ?>
                                <div class="pixel"></div>
                            <? endfor; ?>
                            <div class="bg_main"></div>
                        </a>
                    </li>
                    <li id="li_projects">
                        <div class="bar"></div>
                        <div class="title">Projects</div>
                        <a href="/projects" class="projects nav_main_link">
                            <div class="bg_image"></div>
                            <? for( $i = 0; $i < 16; $i++ ) : ?>
                                <div class="pixel"></div>
                            <? endfor; ?>
                            <div class="bg_main"></div>
                        </a>
                    </li>
                    <li id="li_contact">
                        <div class="bar"></div>
                        <div class="title">Contact</div>
                        <a href="/contact" class="contact nav_main_link">
                            <div class="bg_image"></div>
                            <? for( $i = 0; $i < 16; $i++ ) : ?>
                                <div class="pixel"></div>
                            <? endfor; ?>
                            <div class="bg_main"></div>
                        </a>
                    </li>
                    <li id="li_labs">
                        <div class="bar"></div>
                        <div class="title">Labs</div>
                        <a href="/labs" class="labs nav_main_link">
                            <div class="bg_image"></div>
                            <? for( $i = 0; $i < 16; $i++ ) : ?>
                                <div class="pixel"></div>
                            <? endfor; ?>
                            <div class="bg_main"></div>
                        </a>
                    </li>
                </ul>
            </nav>
            <nav id="nav_social">
                <ul class="clearfix">
                    <li><a href="http://twitter.com/simoncorry"  target="_blank" class="twitter">Twitter</a></li>
                    <li><a href="http://github.com/simoncorry"   target="_blank" class="github">GitHub</a></li>
                    <li><a href="http://dribbble.com/simoncorry" target="_blank" class="dribbble">Dribbble</a></li>
                </ul>
            </nav>
        </section>
        
<?php else: ?>

    <div id="wp-ajax-title"><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></div>
    
<?php endif; /* NOT_AJAX */ ?>