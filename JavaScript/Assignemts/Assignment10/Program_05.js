// Write Program to find each element from 
// inputted array is divisible by both 3 & 8 or only by 3 or only by 8 or not by both 3 & 8 
// and print given number with comment shown in output.(Use template literal for output string.) 
// const InputtedNumbers = [12, 56, 755, 27, 16, 2, 1104, 65, 88];
// Output : 
// 12 is divisible by 3.
// 56 is divisible by 8.
// 755 is not divisible by 8 and 3

// i. Write a first approach using for loop with if…else ladder.
// ii. Write a second approach using while loop with switch statement.
// iii. Write a third approach using for of loop with switch statement.
// iv. Write a fourth approach using for in loop with switch statement.


const InputtedNumbers = [12, 56, 755, 27, 16, 2, 1104, 65, 88];

 console.log("\nusing for loop with if…else ladder.")

 for(let i=0;i<=InputtedNumbers.length-1;i++)
 {
     if(InputtedNumbers[i] % 3 == 0 && InputtedNumbers[i] % 8 == 0)
     {
         console.log(`${InputtedNumbers[i]} is Divisible by 3 and 8`);
     }     else if(InputtedNumbers[i] % 3 == 0)
     {
         console.log(`${InputtedNumbers[i]} is Divisible by 3`);
     }
     else if(InputtedNumbers[i] % 8 == 0)
     {
         console.log(`${InputtedNumbers[i]} is Divisible by 8`);
     }
     else
     {
         console.log(`${InputtedNumbers[i]} is Not Divisible by 8 and 3`);
     }
 }

 console.log("\nusing while loop with switch statement")

 let i = 0;
 while(i<=InputtedNumbers.length-1)
 {
     switch(true)
     {
         case InputtedNumbers[i] % 3 == 0 && InputtedNumbers[i] % 8 == 0:
             console.log(`${InputtedNumbers[i]} is Divisible by 3 and 8`);
             break;
         case InputtedNumbers[i] % 3 == 0:
             console.log(`${InputtedNumbers[i]} is Divisible by 3`);
             break; 
         case InputtedNumbers[i] % 8 == 0:
             console.log(`${InputtedNumbers[i]} is Divisible by 8`);
             break;
         default:
             console.log(`${InputtedNumbers[i]} is Not Divisible by 8 and 3`);
     }
     i++;
 }

console.log("\nusing for of loop with switch statement");

for( let i of InputtedNumbers )
{
    switch(true)
    {
        case i % 3 == 0 && i % 8 == 0:
            console.log(`${i} is Divisible by 3 and 8`);
            break;
        case i % 3 == 0:
            console.log(`${i} is Divisible by 3`);
            break; 
        case i % 8 == 0:
            console.log(`${i} is Divisible by 8`);
            break;
        default:
            console.log(`${i} is Not Divisible by 8 and 3`);
    }
}

console.log("\nusing for in loop with switch statement");

for( let i in InputtedNumbers)
{
    let x = InputtedNumbers[i]
    switch(true)
    {
        case x % 3 == 0 && x % 8 == 0:
            console.log(`${x} is Divisible by 3 and 8`);
            break;
        case x % 3 == 0:
            console.log(`${x} is Divisible by 3`);
            break; 
        case x % 8 == 0:
            console.log(`${x} is Divisible by 8`);
            break;
        default:
            console.log(`${x} is Not Divisible by 8 and 3`);
    }
}