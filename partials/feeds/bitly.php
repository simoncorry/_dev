<li class="post_bitly">
	<a href="<?=$item->link?>" target="_blank">
	    <h1><?=date("m.d.Y",strtotime($item->date_created))?></h1>
		<span class="quote">Shared something cool on bitly - <span class="quote_link"><?=$item->title?>.</span></span>
	</a>
</li>
