<?php get_header(); ?>

<? // $items = feed_items(); echo('<pre>'); var_dump($items); echo('</pre>'); exit();?>
        
        <section id="content" class="home ajax_replaceable">
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
                                    <h1>Science &amp; Creativity</h1>
                                    <span class="quote">I'm a creative developer by day, gamer at night. <br class="mh">Physics junkie and an 8-Bit nerd.</span>
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
                        <nav id="home_box">
                            <ul id="home_boxes">
                                <li class="list_blog"><a href="/blog">blog</a></li>
                                <li class="list_projects"><a href="/projects">projects</a></li>
                                <li class="list_contact"><a href="/contact">contact</a></li>
                                <li class="list_labs"><a href="/labs">labs</a></li>
                                
                                
                                            
            
            
            
                            </ul>
                        </nav>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </section>
        	
	    <!--
<section id="content" class="home ajax_replaceable" data-active_nav_item="#li_home" data-color="rgba(137,150,175,0.4)">
            <div class="wrapper">
                <header>
                    <div class="logo">
                        <div class="moon"></div>
                        <div class="ship"></div>
                        <div class="exhaust"></div>
                        <? $a = array(9,8,6,8,9,8,9,8,9,8,6,8,9,8,6,8,9,8,9,8,9,8,6,8,9);
                          for( $i = 0; $i < count($a); $i++ ) : ?>
                            <div class="pixel p<?=$a[$i]?>"></div>
                        <? endfor; ?>
                    </div>
                    <div class="bubble_remix" id="bubble_remix">
                        <div class="bubble">
                            <header>
                                <ul id="bubble_posts">
                                    <li class="active post_home">
                                        <h1>Science &amp; Creativity</h1>
                                        <span class="quote">I'm a creative developer by day, gamer at night. <br class="mh">Physics junkie and an 8-Bit nerd.</span>
                                    </li>
                                    
                                    <? // foreach( feed_items() AS $item ) : ?>
                                        <? // require("partials/feeds/{$item->service}.php") ?>
                                    <? // endforeach; ?>
                                    
                                </ul>
                            </header>
                        </div>
                    </div>
                </header>
                <nav>
                    <ul id="nav_home" class="mobile_hover">
                        <li id="box_blog">
                            <a href="/blog" class="blog home_btn">
                                <div class="title">Blog</div>
                                <div class="bg"></div>
                                <? for( $i = 0; $i < 121; $i++ ) : ?>
                                  <div class="pixel"></div>
                                <? endfor; ?>
                                <div class="bg_main"></div>
                            </a>
                        </li>
                        <li id="box_projects">
                            <a href="/projects" class="projects home_btn">
                                <div class="title">Projects</div>
                                <div class="bg"></div>
                                <? for( $i = 0; $i < 121; $i++ ) : ?>
                                  <div class="pixel"></div>
                                <? endfor; ?>
                                <div class="bg_main"></div>
                            </a>
                        </li>
                        <li id="box_contact">
                            <a href="/contact" class="contact home_btn">
                                <div class="title">Contact</div>
                                <div class="bg"></div>
                                <? for( $i = 0; $i < 121; $i++ ) : ?>
                                  <div class="pixel"></div>
                                <? endfor; ?>
                                <div class="bg_main"></div>
                            </a>
                        </li>
                        <li id="box_labs">
                            <a href="/labs" class="labs home_btn">
                                <div class="title">Labs</div>
                                <div class="bg"></div>
                                <? for( $i = 0; $i < 121; $i++ ) : ?>
                                  <div class="pixel"></div>
                                <? endfor; ?>
                                <div class="bg_main"></div>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="clearfix"></div>
            </div>
        </section>
-->


<?php get_footer(); ?>