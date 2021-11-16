
<!DOCTYPE html>

<html>
    <body>

    <?php
    $x=75;
    $y=25;


    function addition()
    {
        $GLOBALS['z'] =$GLOBALS['x']+$GLOBALS['y'];

    }
    addition();
    echo $z;
    //PHp $_SERVER
    echo $_SERVER['SERVER_NAME'];
?>
    </body>
    </html>




