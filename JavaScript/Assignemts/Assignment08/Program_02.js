//Write a program in JavaScript to check whether given number is prime or not.

var Num = 8;
var cnt = 0;

for(let i=2; i<Num; i++) 
{
    if(Num % i == 0) 
    {
        cnt++; 
    }
}

if(cnt ==  0)
{
    console.log("Given Number Prime");
}
else
{
    console.log("Given Number is Not  Prime");
}