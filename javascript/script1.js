// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Remember, we're gonna use strict mode in all scripts now!
'use strict';





//sec 5 coding challenge1

const data1 =[17,21,23];
const data2 =[12,5,-5,0,4];

console.log(`... ${data1[0]}°c ...${data1[1]}°c ... ${data1[2]}°c ...`);

 const printforecast = function(arr)
 {
     let str ='';
     for (let i=0;i<arr.length;i++)
     {
         str =str + `${arr[i]}°C in ${i+1} days...;
     }
     console.log(str);