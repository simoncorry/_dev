<!DOCTYPE html>
<!--[if lt IE 7]><html lang="en" class="ie6 ie" xmlns="http://www.w3.org/1999/xhtml"><![endif]-->
<!--[if IE 7]>   <html lang="en" class="ie7 ie" xmlns="http://www.w3.org/1999/xhtml"><![endif]-->
<!--[if IE 8]>   <html lang="en" class="ie8 ie" xmlns="http://www.w3.org/1999/xhtml"><![endif]-->
<!--[if IE 9]>   <html lang="en" class="ie9 ie" xmlns="http://www.w3.org/1999/xhtml"><![endif]-->
<html lang="en">
    <head>
        <meta charset="utf-8" />
        
        <?php /* ERROR */ ini_set('error_reporting', E_ALL); ini_set('display_errors', 0); ?>
        <?php /* TAG */ //include_once($_SERVER['DOCUMENT_ROOT']."/_includes/tag.php"); ?>
        <?php /* PAGE */ $thisPage="Home"; ?>
        
        <title>Science &amp; Creativity</title>
        <meta name="Author" content="Simon Corry" />
        <meta name="description" content="Welcome one and all to the new home of science and creativity."/>
        <meta name="keywords" content="simon corry, science &amp; creativity, user experience design, information architecture, design &amp; development"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=1.0"> 
        <meta name="apple-mobile-web-app-capable" content="yes" />
                    
        <?php /* FACEBOOK OG */ //include_once($_SERVER['DOCUMENT_ROOT']."/_includes/fb-og.php"); ?>
        <?php /* GOOGLE PLUS SNIPPET */ //include_once($_SERVER['DOCUMENT_ROOT']."/_includes/gp-snippet.php"); ?>
        <?php /* LINKS */ include_once($_SERVER['DOCUMENT_ROOT']."/_includes/head.php"); ?>  
             
        <!-- /// PRELOAD  /// -->
        <script type="text/javascript">        
            $(document).ready(function() {    
                $('#preloader').show();
                onload = function() {        
                    $('#preloader').hide();
                    $('#container').addClass('show');
                    $('#canvas_container').show();
                }
            });
        </script> 
        
    </head>
    <body>   
        <div id="preloader"></div>   
        <div id="container">       
            <section class="top">
        <?php /* OPEN */ include_once($_SERVER['DOCUMENT_ROOT']."/_includes/open.php"); ?>            
            </section>
            <section class="content">  
				<div class="sky">
    				<div id="cloud-small-1"></div>
    				<div id="cloud-small-2"></div>
				</div>
                
            </section>
            <section class="bottom"></section>
        </div>
    </body>
</html>