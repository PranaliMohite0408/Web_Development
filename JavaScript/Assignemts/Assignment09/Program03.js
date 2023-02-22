/*
Print The Sum of All Elements In The Given Array Arr = [2,4,6,8,2,4,6,8]
Output :-  40
*/

Arr = [2,4,6,8,2,4,6,8];
var sum=0;
for(let i=0; i<Arr.length;i++)
{
    sum = sum + Arr[i];
}

console.log(sum)