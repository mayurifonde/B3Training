<div class="panel panel-default">
  <div class="panel-heading">
    <h1 class="panel-title">Product Details</h1>
  </div>
  <div class="panel-body">
    <form method="post" action="<?php $_SERVER['PHP_SELF']; ?>">
    	<div class="form-group">
    		<label>Id.:</label>&nbsp;&nbsp;<span style="color: red;">*</span>
    		<input type="value" name="id" class="form-control" value="<?php echo $viewmodel['id'];?>">
    	</div>
    	<div class="form-group">
    		<label>Product Name:</label>&nbsp;&nbsp;<span style="color: red;">*</span>
    		<input type="text" name="product_name" class="form-control" value="<?php echo $viewmodel['product_name'];?>">
    	</div>
    	<div class="form-group">
    		<label>Product Price:</label>
    		<input type="value" name="product_price" class="form-control" value="<?php echo $viewmodel['product_price'];?>">
    	</div>
    	
    	

    	<input type="submit" name="submit" class="btn btn-primary" value="submit">
    	<a class="btn btn-danger" href='<?php echo ROOT_PATH; ?>'>Cancel</a>
    </form>
  </div>
</div>