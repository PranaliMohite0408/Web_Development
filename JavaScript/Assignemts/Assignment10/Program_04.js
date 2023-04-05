// const Num = [12, 58, 65, 85, 35, 75, 6, 24];
// i. Write a program to find maximum number from given array.
// ii. Write a program to find minimum number from given array.
// iii. Write a program to find 2nd maximum number from given array (Using continue statement).

const Num = [12, 58, 65, 85, 35, 75, 6, 24];

function Maximum(Demo)
{
    let max = 0;
    for(let i=0;i<=Demo.length -1;i++)
    {
        if(max<Demo[i])
        {
            max = Demo[i];
        }   
    }
    return max;
}

function SecondMax(Demo)
{
     let max = Maximum(Demo);
     let max1=0;
     for(let i=0; i<=Demo.length-1;i++)
     {
        if(max1==0)
        {
            max1 = Demo[i];
            continue;
        }
        if(Demo[i]>max1 && Demo[i] != max)
        {
            max1 = Demo[i];
        }
     }
     return max1;
}

function Minimum(Demo)
{
    let min=0;
    for(let i=0;i<=Demo.length -1; i++)
    {
        if(i==0)
        {
            min = Demo[i]
            continue;
        }
        if(Demo[i]<min)
        {
            min = Demo[i];
        }
    }
    return min;
}

var Res1 = Maximum(Num);
console.log("Miximum Number of Given Array is =>",Res1);

var Res3 = SecondMax(Num);
console.log("Second Maximum Number of Given Array is =>",Res3);

var Res2 = Minimum(Num);
console.log("Minimum Number of Given Array is =>",Res2);

