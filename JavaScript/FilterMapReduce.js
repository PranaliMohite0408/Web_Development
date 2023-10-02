//map()         return -> new array
//reduce()      return -> sigle value
//filter()
//forEach()     return -> undefined

// const NewArray = arr.map((values,index,arr) => {
//     return values * values;
// });
// console.log(arr);
// console.log(NewArray);



// const NewFilterArray = arr.filter((value, index, arr) => {
//     return value > 25;
// });
// console.log(NewFilterArray);

let arr = [10, 20, 30, 40, 52, 35, 65, 45];

const NewReduceArray = arr.reduce((acc, value, index, arr) => {
     debugger;
     return acc + value;
 });


 console.log(NewReduceArray);