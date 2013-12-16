<?php get_header(); ?>

<? // $items = feed_items(); echo('<pre>'); var_dump($items); echo('</pre>'); exit(); ?>
        
        <!-- /// CONTENT /// -->
        <section id="content" class="home ajax_replaceable" data-active_nav_item="#li_home" data-page_animation="animations_home" data-color="rgba(137, 150, 175, 0.4)">
            <!-- CLEAR ACTIVE SECTION TIMER -->
            <div id="clear_active_section_timer"></div>
            <!-- CONTENT WRAPPER -->
            <div class="wrapper">
                <div class="rows row_1">
                    <div class="columns col_1">
                        <!-- LOGOS ANIMATION -->
                        <nav id="home_logo">
                            <ul id="home_logos">
                                <li class="post_home present">
                                    <? $a = array(9,8,6,8,9,8,9,8,9,8,6,8,9,8,6,8,9,8,9,8,9,8,6,8,9);
                                        for( $i = 0; $i < count($a); $i++ ) : ?>
                                        <div class="pixel hover_times p<?=$a[$i]?>"></div>
                                    <? endfor; ?>
                                    <div class="moon"></div>
                                    <div class="ship"></div>
                                    <div class="exhaust"></div>
                                    <div class="bg_image"></div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="columns col_2">
                        <!-- BUBBLE ANIMATION -->
                        <nav id="home_bubble">
                            <ul id="home_bubbles">
                                <li class="present post_home">
                                	<a>
                                    	<h1>Science &amp; Creativity</h1>
										<span class="quote">I'm a creative developer by day, gamer at night. <br class="mh">Physics junkie and an 8-Bit nerd.</span>
                                	</a>
                                </li>
                                <? foreach( feed_items() AS $item ) : ?>
                                    <? require("partials/feeds/{$item->service}.php") ?>
                                <? endforeach; ?>
                            </ul>
                        </nav>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="rows row_2">
                    <div class="columns col_3">
                        <!-- BOXES ANIMATION -->
                        <nav id="nav_home">
                            <ul id="home_boxes">
                                <li class="list_blog">
                                    <a class="nav_home_link clearfix" href="/blog">
                                    	<div class="bg_image"></div>
                                    	<div class="bg_text">Blog</div>
                                        <? for( $i = 0; $i < 121; $i++ ) : ?>
                                        <div class="pixel"></div>
                                        <? endfor; ?>
                                        <div class="bg_main"></div>
                                    </a>
                                </li>
                                <li class="list_projects">
                                    <a class="nav_home_link clearfix" href="/projects">
                                    	<div class="bg_image"></div>
                                    	<div class="bg_text">Projects</div>
                                        <? for( $i = 0; $i < 121; $i++ ) : ?>
                                        <div class="pixel"></div>
                                        <? endfor; ?>
                                        <div class="bg_main"></div>
                                    </a>
                                </li>
                                <li class="list_contact">
                                    <a class="nav_home_link clearfix" href="/contact">
                                    	<div class="bg_image"></div>
                                    	<div class="bg_text">Contact</div>
                                        <? for( $i = 0; $i < 121; $i++ ) : ?>
                                        <div class="pixel"></div>
                                        <? endfor; ?>
                                        <div class="bg_main"></div>
                                    </a>
                                </li>
                                <li class="list_labs">
                                    <a class="nav_home_link clearfix" href="/labs">
                                    	<div class="bg_image"></div>
                                    	<div class="bg_text">Labs</div>
                                        <? for( $i = 0; $i < 121; $i++ ) : ?>
                                        <div class="pixel"></div>
                                        <? endfor; ?>
                                        <div class="bg_main"></div>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </section>

<?php get_footer(); ?>