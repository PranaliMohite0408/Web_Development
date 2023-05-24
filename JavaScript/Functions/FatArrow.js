//Normal function

// function sum()
// {
//     let a=5; b=6;

//     let sum = a+b;
//     return `The Sum of two Numbers are ${sum} `;
// }

//Fat Arrow Function

//sum() // Error First Define function then call 

// const sum = () =>{
//     let a=5; b=6;
//     return `The Sum of two Numbers are ${a+b} `;
// }

// const sum = () =>{return `The Sum of two Numbers are ${(a=5) + (b=6)}`;}

const sum = () => `The Sum of two Numbers are ${(a=5) + (b=6)}`;

console.log(sum())



