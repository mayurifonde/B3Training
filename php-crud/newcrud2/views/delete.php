<div class="text-center bg-info" style="height:150px;">
	<div class="card-text">
		<p>Are you sure you want to delete this product?<br> This cannot be undone!.</p>
	</div>
	<form method="post" action="<?php $_SERVER['PHP_SELF']; ?>" style="padding-top: 3%">
		<input type="hidden" name="id" value="<?php echo $viewmodel; ?>">
		<!--<?php// print_r($viewmodel);?><br>-->
		<input type="submit" name="submit" class="btn btn-danger" value="Yes, delete now" />
		<a class="btn btn-info" href="<?php echo ROOT_PATH; ?>">Nevermind</a>
	</form>
</div>