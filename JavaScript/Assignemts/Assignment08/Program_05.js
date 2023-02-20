/*
Write a JavaScript program to find the count of 10 in given array. 
var ArrNum = [21, 10, 56, 20, 10, 56, 10, 95, 23, 57, 10, 11, 10];
*/

var ArrNum = [21, 10, 56, 20, 10, 56, 10, 95, 23, 57, 10, 11, 10];

let cnt = 0;

for(let i =0;i<=ArrNum.length;i++)
{
    if(ArrNum[i] == 10)
    {
        cnt++;
    }
}
console.log("Count of 10 in Given Arry is "+cnt);