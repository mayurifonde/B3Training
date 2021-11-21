
<?php

include 'connect.php';
$id=$_GET['updateid'];
$sql="select * from `crud` where id=$id";
$result=mysqli_query($con,$sql);
$row=mysqli_fetch_assoc($result);
$product_name=$row['product_name'];
$product_price=$row['product_price'];


if(isset($_POST['submit']))
{
$id=$_POST['id'];
$product_name=$_POST['product_name'];
$product_price=$_POST['product_price'];


$sql="update `crud` set id=$id,product_name='$product_name',product_price='$product_price'
where id=$id";
$result= mysqli_query($con,$sql);

if($result)
{
  echo "update succesfully";
 //header('location:display.php');
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
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" >

    <title>Document</title>
  </head>
  <body>
      <div class="container my-5">


  <form method="post">

  <div class="form-group">
    <label>ID</label>
    <input type="valuet" class="form-control"
    placeholder="enter your product id" name="id" autocomplete="off"value=<?php echo $id;?>>
</div>

<div class="form-group">
    <label>Name</label>
    <input type="text" class="form-control"
    placeholder="enter your product name" name="product_name" autocomplete="off"value=<?php echo $product_name;?>>
</div>

<div class="form-group">
    <label>Price</label>
    <input type="value" class="form-control"
    placeholder="enter your product price" name="product_price" autocomplete="off"value=<?php echo $product_price;?>>
</div>
    
  
  <button type="submit" class="btn btn-primary" name="submit">Update</button>
  
</form>


  </body>
</html>