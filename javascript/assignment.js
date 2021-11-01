let id="no";
selectData();

function manageData(){
	document.getElementById('msg').innerHTML="";
	let name=document.getElementById('name').value;
	if(name==''){
		document.getElementById('msg').innerHTML='Please enter your name';
	}else{
		console.log(id);
		if(id=='no'){
			let arr=getCrudData();
			if(arr==null){
				let data=[name];
				setCrudData(data);
			}else{
				arr.push(name);
				setCrudData(arr);
			}
			document.getElementById('msg').innerHTML='Data added';
		}else{
			let arr=getCrudData();
			arr[id]=name;
			setCrudData(arr);
			document.getElementById('msg').innerHTML='Data updated';
		}
		document.getElementById('name').value='';
		selectData();
	}
}

function selectData(){
	arr=getCrudData();
	if(arr!=null){
		let html='';
		sno=1;
		for(let k in arr){
			html=html+`<tr><td style="width: 50px;">${sno}</td><td>${arr[k]}</td><td style="width: 200px;"><button type="button" onclick='updateData(${k})' class="text-primary"><i class="fa fa-edit"></i>Update</button><button type="button" onclick='deleteData(${k})' class="text-danger"><i class="fa fa-trash"></i>Delete</button></td></tr>`;
			sno++;

		}
		document.getElementById('root').innerHTML=html;
		
	}
}
function updateData(rid){
	id=rid;
	let arr=getCrudData();
	document.getElementById('name').value=arr[rid];
}

function deleteData(rid){
	let arr=getCrudData();
	arr.splice(rid,1);
	setCrudData(arr);
	selectData();
}

function getCrudData(){
	let arr=JSON.parse(localStorage.getItem('crud'));
	return arr;
}

function setCrudData(arr){
	localStorage.setItem('crud',JSON.stringify(arr));
}


let searchtextbox = document.getElementById("searchtextbox");
searchtextbox.addEventListener("input", function () {
	let trlist = document.querySelectorAll("tr");
	Array.from(trlist).forEach(function (item) {
		let searchedtext = item.getElementsByTagName("td")[1].innerText;
		let searchtextboxval = searchtextbox.value;
		let re = new RegExp(searchtextboxval, 'gi');
		if (searchedtext.match(re)) {
			item.style.display = "table-row";
		} else {
			item.style.display = "none";
		}
	});
});



function sortdata() {
	console.log(arr.sort());
	arr.sort();
	if (arr != null) {
		let html = '';
		sno = 1;


		for (let k = 0; k < arr.length; k++) {
			html = html + `<tr><td>${sno}</td><td>${arr[k]}</td><td><button type="button" onclick='updateData(${k})' class="text-primary"><i class="fa fa-edit"></i>Update</button><button type="button" onclick='deleteData(${k})' class="text-danger"><i class="fa fa-trash"></i>Delete</button></td></tr>`;
			sno++;
		}

		
		document.getElementById('root').innerHTML = html;
	}
}














/*var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.productCode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.product;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.qty;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.perPrice;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('product').value = selectedRow.cells[1].innerHTML;
    document.getElementById('qty').value = selectedRow.cells[2].innerHTML;
    document.getElementById('perPrice').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}
function resetForm(){
    document.getElementById('productCode').value = '';
    document.getElementById('product').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('perPrice').value = '';
}*/