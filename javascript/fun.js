//'use strict'


( function ()
{
  const header =document.querySelector('h1');
  header.style.coor ='red';


  document.querySelector('body').addEventListener('click',function(){
      header.style.color ='blue';
  });

}) ();