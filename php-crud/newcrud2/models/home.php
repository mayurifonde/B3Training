<?php

class HomeModel extends Model{
	public function Index(){

		$post = filter_input_array(INPUT_POST,FILTER_SANITIZE_STRING);

		if(isset($post['search']))
		{
			if($post['search_data'] == '')
			{
				$row = $this->allData();
				return $row;
			}
			$this->query('SELECT * FROM product WHERE id= :id');
			$this->bind(':id', $post['search_data']);
			$row = $this->resultSet();
			//print_r($row);die();
			return $row;
		}else{
			 $row = $this->allData();
			 //print_r($row);
				return $row;
			
		}
	}

	public function allData(){
			$this->query("select * from product");
			$rows = $this->resultSet();
			return $rows;
	}

}

?>
