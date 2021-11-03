let id="no";
//localStorage.clear();
selectdata();
function managedata (){
document.getElementById('msg').innerHTML="";
let name=document.getElementById('name').value;
if( name=='')
{
    document.getElementById('msg').innerHTML='please enter your name';
 }
else{
    

console.log(id);


if(id=='no')
{
    let arr=getcruddata();
if(arr==null)
{
    let data=[name];
    setcruddata(data);
}

else{
arr.push(name);
setcruddata(arr);
}
document.getElementById('msg').innerHTML='data added';


}
else{
    let arr=getcruddata();
    arr[id]=name; 
    setcruddata(arr);
    document.getElementById('msg').innerHTML='data updated';

}
document.getElementById('name').value='';
selectdata();
        
    }


}
    
function selectdata (){

    let arr=getcruddata();
    if(arr!=null)
    {
        let html='';
        let Sno=1;
        for(let k in arr)
        {
        html=html+
        `<tr><td>${Sno}</td><td>${arr[k]}</td><td><a href="javascript:void(0)" onclick="editdata(${k})">edit</a>&nbsp;
        <a href="javascript:void(0)" onclick="deletedata(${k})">delete</a></td></tr>`;
    
        Sno++;
        }
        document.getElementById('root').innerHTML=html;
    }

}
function editdata (rid){
    id=rid;
    let arr=getcruddata();
    document.getElementById('name').value=arr[rid];

}
function deletedata (rid)
{
    let arr=getcruddata();
    arr.splice(rid,1);
    setcruddata(arr);
    selectdata();
}
function getcruddata()
{
    let arr=JSON.parse(localStorage.getItem ('crud'));
return arr;

}
function setcruddata(arr)
{
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



























