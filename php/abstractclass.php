<?php
abstract class animal {
    public $name;
    public $color;


    public function describe()
    {
        return $this->name. 'is'.$this->color;
    }

    abstract public function makesound()
    return 'quack';

    }
}


    class duck extends animal
    {
        public function describe ()
        {
            retrun parent::describe();
        }
    
    public function makesound()
    {
        return 'bark';
    }
        }


        $animal=new duck();
        $animal->name='ben';
        $animal->color='yellow';
        echo $animal->describe();



?>