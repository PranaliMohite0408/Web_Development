// const Demo = ["abc", "pqr", "mno", "asd"]

// console.log(Demo)

// //another way to create array using new Array()

// const Demo1 = new Array("acg","adf","wer","asd", 1, true)
// console.log(Demo1)

// console.log(Demo1[4]) // 1

// Demo1[3] = "data";
// console.log(Demo1);  //[ 'acg', 'adf', 'wer', 'data', 1, true ]

// console.log(typeof(Demo1)) // object beacuse Array is type of object


const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.sort()) //sorting array in ascending order  [ 'Apple', 'Banana', 'Mango', 'Orange' ]

fruits.push("Lemon");//insert at last index
console.log(fruits) 

console.log(Array.isArray(fruits))  // true
console.log(fruits instanceof Array); // true


//Array Method

fruits.pop(); //remove last element
console.log(fruits)

fruits.push("coconut");
console.log(fruits) //add element at last index

fruits.shift()//remove first element
console.log(fruits)

fruits.unshift("lemon") //add new element at first index
console.log(fruits);

const data = ["Talbid" ,"Karad" ];
const data1 = ["Satara","Maharashtra"];

const BindArray = data.concat(data1) // concate two array and return new array
console.log(BindArray);

//splice - splice(start,deleteCount,replace);
fruits.splice(2,0,"Kiwi")
console.log(fruits);

//ArrName.slice(begin,end);  // not modify original array 
var x =  fruits.slice(2,3)
console.log(x);