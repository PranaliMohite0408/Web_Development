//ES8 Features
//String Padding
//Object.values()
//OBject.entries()


// string padding padStrat() and padEnd()
const message = "INDIA";
console.log(message);
console.log(message.padStart(3));
console.log(message.padEnd(4));

//Object.values() and Object.entries()

const person = {name:'abc', age:45}
console.log(Object.values(person)); //convert all element in single array [ 'abc', 45 ]
const arr = Object.entries(person); //convert each element in seperate array [ [ 'name', 'abc' ], [ 'age', 45 ] ]
console.log(arr)
console.log(Object.fromEntries(arr)); 


//ES2018 //Rest Properties

console.log("Rest Properties")
const data = {name:'pqr', age:22}
const data1 = {...data}
console.log(data)
console.log(data1)