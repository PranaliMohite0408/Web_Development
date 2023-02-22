/*4) Print The Even Numbers of The Given Array Arr = [2,3,4,7,9,8,8]
Output :-
2
4
8
8
*/
Arr = [2,3,4,7,9,8,8]

for(let i=0; i<Arr.length;i++)
{
    if(Arr[i]%2==0)
    {
        console.log(Arr[i]);
    }
}