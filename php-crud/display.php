<?php
include 'connect.php';
?>

<!doctype html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>
            Search Data</title>
             <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" >

</head>
<body>


<div class="container my-2">
    <form method="post">
        <input type="text" placeholder="Search Data" name="search">
        <button class="btn btn-dark btn-sm" name="submit">Search</button>

</form>

<div class="container my-2">
    <table class="table">
        <?php

if(isset($_POST['submit']))
{
    $search=$_POST['search'];

 $sql="select * from `crud` where id like '%$search%'or product_name like '%$search%' or product_price like '%$search%'";
    $result=mysqli_query($con,$sql);
    if($result)
    {
         if(mysqli_num_rows($result)>0)
         
         {

            echo '<thead>
            <tr>
            <th>Sl no</th>
            <th>name</th>
            <th>price</th>
            </tr>
            </thead>';
            $row=mysqli_fetch_assoc($result);
            echo '<tbody>
            <tr>
            <td>'.$row['id'].'</td>
            <td>'.$row['product_name'].'</td>
            <td>'.$row['product_price'].'</td>

            </tr>
            </tbody>';

         }
         else{
             echo '<h2 class=text-danger> data not found <h2>';
         }
}
        

    }
?>
</table>
</div>

<div class="container my-2">
    <form method="post">
        <button class="btn btn-dark btn-sm" name="sort">Sort</button>

</form>
<div class="container my-2">
    <table class="table">
        <?php 

if(isset($_POST['sort']))
{

$sql="select id,product_name,product_price from `crud` order by product_name";
    $result=mysqli_query($con,$sql);
   
         if(mysqli_num_rows($result)>0)
         
         {

           
           while($row=mysqli_fetch_assoc($result))
           {
            echo '<tbody>
            <tr>
            <td>'.$row['id'].'</td>
            <td>'.$row['product_name'].'</td>
            <td>'.$row['product_price'].'</td>

            </tr>
            </tbody>';
        }
    }
     else{
         echo "0 results";
     }
}        
?>
</table>
</div>
</div>

        
<div class="container my-2">
                        <button class="btn btn-primary "><a href="crud.php" class="text-light">Add Product
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">product_name</th>
      <th scope="col">product_price</th>
      <th scope="col">operation</th>
    </tr>
  </thead>
  <tbody>

  <?php
$sql="select * from `crud`";
$result=mysqli_query($con,$sql);
if($result)
{

    while($row=mysqli_fetch_assoc($result))
    {
        $id=$row['id'];
        $product_name=$row['product_name'];
        $product_price=$row['product_price'];
        
        echo '<tr>
        <th scope="row">'.$id.'</th>
        <td>'.$product_name.'</td>
        <td>'.$product_price.'</td>
    
      <td>
      <button class="btn btn-primary"><a href="update.php? updateid='.$id.'" class="text-light">Update</a></button>

      <button class="btn btn-danger"><a href="delete.php? deleteid='.$id.'" oncliclk="return checkDelete()class="text-light">Delete</a></button>
  </td>
  </tr>';
    }
}
?>
</tbody>
</table>
</div>
 </script>
<script>
checkDelete = ()=>
{
    return confirm("are you sure to delete this record?");
}
</script>
</body>
</html>
