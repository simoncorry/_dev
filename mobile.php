<!doctype html>
<!--[if lt IE 9]><html class="ie"><![endif]-->
<!--[if gte IE 9]><!--><html><!--<![endif]-->

<!--
	The comment jumble above is handy for targeting old IE with CSS.
	http://paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/
-->
	
	<head>
		<meta charset="utf-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
		<title>Golden Grid System Demo</title>
		
		<!-- Please don't add "maximum-scale=1" here. It's bad for accessibility. -->
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		
		<?php /* LINKS */ include_once($_SERVER['DOCUMENT_ROOT']."/_includes/head.php"); ?> 
		<link rel="stylesheet" href="/_media/css/main.css"/>
		<link rel="stylesheet" href="/_media/css/reset.css"/> 
		<link rel="stylesheet" href="/_media/css/grids.css"/>
		
		
		<!-- Here's Golden Gridlet, the grid overlay script. -->
		<script src="https://raw.github.com/jonikorpi/Golden-Grid-System/master/GGS.js"></script>
		
		<!-- 
			This script enables structural HTML5 elements in old IE.
			http://code.google.com/p/html5shim/
		-->
		<!--[if lt IE 9]>
			<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		
		<!-- /// PRELOAD  /// -->
        <script type="text/javascript">
        $(document).ready(function() {    
            $('#preloader').show();
            onload = function() {        
                $('#preloader').hide();
                $('.container').addClass('show');
            }
        });
        </script>
        
        <style type="text/css">
            nav {
                position:fixed;
                top:0px;
                background:#CCCCCC;
                border-bottom:1px solid #666666;
                height:auto;
                width:100%;
                z-index:999999;
            }
            
            nav h1 {
                padding:0px !important;
                margin:0px !important;
                text-align:center;
                font-family:Helvetica, sans-serif;
                color:#222222 !important;
                text-shadow:0px 1px 0px #FFFFFF !important;
                background-image:-webkit-gradient(linear, left top, left bottom, from(#CCCCCC), to(#999999));
            }
            
        </style>
		
				
	</head>
	
	<body lang="en">
		<div id="preloader">&nbsp;</div>
		<!-- Demo code begins -->
		<nav id="nav">
		    <h1>test</h1>
		</nav>
		
		
		<header>
			<div class="container">
				<h1>A Golden Demonstration</h1>
				<h2>
					Try resizing your browser or viewing this page on different devices. Use the icon in the upper right corner to see an overlay of the grid.
				</h2>
			</div>
		</header>
		
		<article id="twoway">
			<section class="container">
				<h3>A two-way split</h3>
				<p>
					These two blocks of text will float side by side with some empty columns on the sides on large screens. On medium-sized screens the empty columns will disappear, and on small screens the blocks will be stacked vertically.
				</p>
			</section>
			<section class="container">
				<h3>By the way</h3>
				<p>
					If you're viewing this page on an iOS device, it might zoom in wonkily when you rotate your device. This is because of <a href="http://filamentgroup.com/examples/iosScaleBug/">a Mobile Safari bug</a>.
				</p>
			</section>
			<div class="clearfix"></div>
		</article>
		
		
		
		<article id="fourway">
			<section class="container">
				<h3>A four-way split</h3>
				<p>
					These two blocks of text will float side by side with some empty columns on the sides on large screens. On medium-sized screens the empty columns will disappear, and on small screens the blocks will be stacked vertically.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
		</article>
		
		<article id="fourway">
			<section class="container">
				<h3>A four-way split</h3>
				<p>
					These two blocks of text will float side by side with some empty columns on the sides on large screens. On medium-sized screens the empty columns will disappear, and on small screens the blocks will be stacked vertically.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
		</article>
		
		<article id="fourway">
			<section class="container">
				<h3>A four-way split</h3>
				<p>
					These two blocks of text will float side by side with some empty columns on the sides on large screens. On medium-sized screens the empty columns will disappear, and on small screens the blocks will be stacked vertically.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
		</article>
		
		<article id="fourway">
			<section class="container">
				<h3>A four-way split</h3>
				<p>
					These two blocks of text will float side by side with some empty columns on the sides on large screens. On medium-sized screens the empty columns will disappear, and on small screens the blocks will be stacked vertically.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
		</article>
		
		<article id="fourway">
			<section class="container">
				<h3>A four-way split</h3>
				<p>
					These two blocks of text will float side by side with some empty columns on the sides on large screens. On medium-sized screens the empty columns will disappear, and on small screens the blocks will be stacked vertically.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
		</article>
		
		<article id="fourway">
			<section class="container">
				<h3>A four-way split</h3>
				<p>
					These two blocks of text will float side by side with some empty columns on the sides on large screens. On medium-sized screens the empty columns will disappear, and on small screens the blocks will be stacked vertically.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
		</article>
		
		<article id="fourway">
			<section class="container">
				<h3>A four-way split</h3>
				<p>
					These two blocks of text will float side by side with some empty columns on the sides on large screens. On medium-sized screens the empty columns will disappear, and on small screens the blocks will be stacked vertically.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
			<section class="container">
			    <h3>Lorem Ipsum</h3>
				<p>
				    Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>
		</article>
		
		
		
		<!-- Demo code ends -->
			
	</body>
	
</html>