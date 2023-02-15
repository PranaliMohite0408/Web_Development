/*
For Loop
 */

/*
var colors = ["Red", "Green", "yellow", "white", "orange"];

var len = colors.length;
var x = colors[2];
//console.log(x);


for(let i =0; i<=len; i++)
{
    console.log(colors[i]);
}

var x = [10,20,25,30,35];

var ArrLengtth = x.length;

var sum =0;
for(let i=0; i<ArrLengtth; i++)
{
    sum = sum + x[i];
    
}
console.log(sum);
console.log(sum / ArrLengtth);
*/


var x = "12345"

console.log(x.length);

var temp ="";

for(let i = x.length - 1; i>=0; i--)
{
    temp = temp + x[i];
}
console.log(temp);
