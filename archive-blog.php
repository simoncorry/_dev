<?php get_header(); ?>
	
	<!-- Section -->
	<section id="content" class="blog ajax_replaceable" data-active_nav_item="#li_blog" data-page_animation="animations_blog" data-color="rgba(138, 178, 159, 0.4)">
	
	    <!-- /// CLEAR ACTIVE SECTION TIMER /// -->
        <div id="clear_active_section_timer"></div>
	
		<h1><?php _e( 'Archives', 'html5blank' ); ?></h1>
	
		<?php get_template_part('loop'); ?>
		
		<!-- Pagination -->
		<div id="pagination">
			<?php html5wp_pagination(); ?>
		</div>
		<!-- /Pagination -->
	
	</section>
	<!-- /Section -->

<?php get_footer(); ?>