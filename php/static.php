<?php
class user 
{

public $username;
public static $minpasslength=5;
 

public static function validatepassword($password)
{
    if(strlen($password)>=self::$minpasslength)
    {
return true;
    }
    else{
        return false;
    }
}

}$password='1234';


if(user::validatepassword($password))
{
    echo 'password is valid';
}
else{
    echo 'password is invalid';
}
?>