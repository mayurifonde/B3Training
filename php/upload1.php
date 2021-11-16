<html>
    <head>
        <title>
            fileupload</title>
</head>
<body>
    <form action='?' method='POST' enctype='multipart/form-data'>
        <input type="file" name="myfile" /><br><br>
        <input type="submit" name="upload" value="Upload Image">

</form>
</body>


<?php
error_reporting(0);

$name=$_FILES['myfile']['name'];
$tmp_name=$_FILES['myfile']['tmp_name'];

if(move_uploaded_file($tmp_name,$name))
{
    echo"file are uploaded";
    //echo"<img src='$name' width=300 height=300>";
}
else{
    echo"files are not  uploaded";
}
?>