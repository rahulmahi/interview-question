let num = '123456'
let out = '214365'
var d = ''
for(let i=0;i<num.length;i++)
{
    if(num[i] % 2 == 0)
    {
       d += parseInt(num[i]) -1;
       
    }
    else{
        d += parseInt(num[i]) +1;
    }
}
console.log(d);

//

var arr = [1,2,3,4,5,6];

var f = arr.slice(0,3);

var g = arr.slice(3,6)

var h = [...g,...f];

console.log(h);

//

var link = 'https://www.youtube.com';

var c = link.split('://');

console.log(k = c[0]);

var v = c[1]

var x = v.split('.');

console.log(k = x[0]);

console.log(k = x[1]);

console.log(k = x[2]);
