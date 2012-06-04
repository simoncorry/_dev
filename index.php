<!DOCTYPE html>
<!--[if lt IE 7]><html lang="en" class="ie6 ie" xmlns="http://www.w3.org/1999/xhtml"><![endif]-->
<!--[if IE 7]>   <html lang="en" class="ie7 ie" xmlns="http://www.w3.org/1999/xhtml"><![endif]-->
<!--[if IE 8]>   <html lang="en" class="ie8 ie" xmlns="http://www.w3.org/1999/xhtml"><![endif]-->
<!--[if IE 9]>   <html lang="en" class="ie9 ie" xmlns="http://www.w3.org/1999/xhtml"><![endif]-->
<html lang="en">
    <head>
        <script type="text/javascript">/*var _sf_startpt=(new Date()).getTime()*/</script>
        <meta charset="utf-8" />
        
        <?php /* ERROR */ ini_set('error_reporting', E_ALL); ini_set('display_errors', 0); ?>
        <?php /* TAG */ include_once($_SERVER['DOCUMENT_ROOT']."/_includes/tag.php"); ?>
        <?php /* PAGE */ $thisPage="Home"; ?>
        
        <title>Science &amp; Creativity</title>
        <meta name="Author" content="Simon Corry" />
        <meta name="description" content="Welcome one and all to the new home of science and creativity."/>
        <meta name="keywords" content="simon corry, science &amp; creativity, user experience design, information architecture, design &amp; development"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=1.0"> 
                    
        <?php /* FACEBOOK OG */ include_once($_SERVER['DOCUMENT_ROOT']."/_includes/fb-og.php"); ?>
        <?php /* GOOGLE PLUS SNIPPET */ include_once($_SERVER['DOCUMENT_ROOT']."/_includes/gp-snippet.php"); ?>
        <?php /* LINKS */ include_once($_SERVER['DOCUMENT_ROOT']."/_includes/head.php"); ?>  
             
        <!-- /// PRELOAD  /// -->
        <script type="text/javascript">
        $(document).ready(function() {    
            $('#preloader').show();
            onload = function() {        
                $('#preloader').hide();
                $('#container').addClass('show');
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
            </section>
            <section class="bottom">
                &nbsp;
            </section>
        </div>
        
        <!-- /// GOOGLE /// -->
        <script type="text/javascript">
        /*  var _gaq = _gaq || [];
          _gaq.push(['_setAccount', 'UA-24800976-1']);
          _gaq.push(['_trackPageview']);
          (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();
        </script>
        
        <!-- Plus -->
        <script type="text/javascript">
          (function() {
            var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
            po.src = 'https://apis.google.com/js/plusone.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
          })();
        </script>
        
        <!-- /// FACEBOOK /// -->
        <script type="text/javascript">
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=144137692323731";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        </script>
        
        <!-- /// TWITTER /// -->
        <script type="text/javascript">
          !function(d,s,id){
            var js,fjs=d.getElementsByTagName(s)[0];
            if(!d.getElementById(id)){
              js=d.createElement(s);
              js.id=id;js.src="//platform.twitter.com/widgets.js";
              fjs.parentNode.insertBefore(js,fjs);
             }
           }(document,"script","twitter-wjs");
        </script>
        
        <!-- /// CHARTBEAT /// -->
        <script type="text/javascript">
        var _sf_async_config={uid:33072,domain:"simoncorry.com"};
        (function(){
          function loadChartbeat() {
            window._sf_endpt=(new Date()).getTime();
            var e = document.createElement('script');
            e.setAttribute('language', 'javascript');
            e.setAttribute('type', 'text/javascript');
            e.setAttribute('src',
               (("https:" == document.location.protocol) ? "https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/" : "http://static.chartbeat.com/") +
               "js/chartbeat.js");
            document.body.appendChild(e);
          }
          loadChartbeat();
        })();*/
        </script>        
    </body>
</html>