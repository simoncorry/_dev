<li class="post_twitter">
	<a href="<?=$item->link?>" target="_blank">
		<h1><?=date("m.d.Y",$item->post_date)?></h1>
		<span class="quote"><?=str_replace('simoncorry:', null, preg_replace('!(http://[a-z0-9_./?=&-]+)!i', '<span class="quote_link">$1</span> ', $item->caption." "))?></span>
	</a>
</li>