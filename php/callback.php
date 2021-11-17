<?php
function my_callback($item) //A callback function (often referred to as just "callback") is a function which is passed as an argument into another function.

{
  return strlen($item);
}

$strings = ["apple", "orange", "banana", "coconut"];
$lengths = array_map("my_callback", $strings);
print_r($lengths);
?>