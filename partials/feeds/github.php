<li class="post_github">
	<a href="<?=$item->link?>" target="_blank">
		<h1><?=date("m.d.Y",$item->post_date)?></h1>
		<span class="quote">Pushed an update on GitHub for - <span class="quote_link"><?=str_replace('simoncorry pushed to', null, $item->title)?></span>.</span>
	</a>
</li>