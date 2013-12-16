<?php get_header(); ?>
	
	<!-- Section -->
	<section id="content" class="ajax_replaceable" data-active_nav_item="#li_projects" data-page_animation="animations_projects" data-color="rgba(153, 127, 104, 0.4)">
	
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