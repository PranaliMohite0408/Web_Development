//Curying

// function sum(num1)
// {
//     //console.log(num1);
//     return function(num2){
//         //console.log(num1,num2)
//         return function(num3)
//         {
//             console.log(num1+num2+num3);
//         }
//     }
// }

//OR

const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3) ;

sum(5)(3)(8) ///each argument contains a seperate function 
