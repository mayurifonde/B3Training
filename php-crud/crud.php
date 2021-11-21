
<?php

include 'connect.php';
if(isset($_POST['submit']))
{
$id=$_POST['id'];
$product_name=$_POST['product_name'];
$product_price=$_POST['product_price'];




$sql="insert into `crud`(id,product_name,product_price)values('$id','$product_name','$product_price')";
$result=mysqli_query($con,$sql);


if($result)
{
 // echo "data inserted succesfully";
 header('location:display.php');
} 
else{
  die(mysqli_error($con));
}
}
?>


<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

    <title>Crud Operation</title>
  </head>
  <body>

      <div class="container my-5">


  <form method="post">

  <div class="form-group">
    <label for="validation1">ID</label>
    <input type="value" class="form-control is-invalid" id="validation1"
    placeholder="id" required name="id" autocomplete="off">
    <div class="invalid-feedback">
      please provide an id.
</div>
</div>

<div class="form-group">
    <label for="validation2">Name</label>
    <input type="text" class="form-control is-invalid" id="validation2"
    placeholder=" product name" required name="product_name" autocomplete="off">
    <div class="invalid-feedback">
      please provide a product name.
</div>
    </div>

<div class="form-group">
    <label for="validation3">Price</label>
    <input type="value" class="form-control is-invalid" id="validation3"
    placeholder="product price" required name="product_price" autocomplete="off">
    <div class="invalid-feedback">
    please provide a product price.
</div>
    
  
  <button type="submit" class="btn btn-primary" name="submit">Submit</button>
  
</form>


  </body>
</html>
