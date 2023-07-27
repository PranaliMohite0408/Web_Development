// let Data ={
//     name : 'abc',
//     age : 23,
//     getdata()
//     {
//         console.log(`My Name is ${Data.name} and my age is ${Data.age} `)
//     }
// }

// Data.getdata();

//Declare another object inside object

let Data ={
    name :{                 //another object
        FName : 'abc',
        LName : 'pqr'
    } ,
    age : 23,
    getdata()
    {
        console.log(`My Name is ${Data.name} and my age is ${Data.age} `)
    }
}

console.log(Data.name.FName);

