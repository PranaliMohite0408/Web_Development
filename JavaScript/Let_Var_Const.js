/*Let VS Const VS Var

var => function scope
let and const => Block scope

*/

// var myName = "abc";
// console.log(myName);

// myName = "xyz";
// console.log(myName);

// let myName = "abc";
// console.log(myName);

// myName = "xyz";
// console.log(myName);

// const myName = "abc";
// console.log(myName);

// myName = "xyz";
// console.log(myName);


// function Demo()
// {
//     var  FName = "John";
//     console.log("FName :" , FName);

//     if(true)
//     {
//         var LName = "Sen";

//         console.log("Inner FName is : ", FName);
//         console.log("Inner LName is : ", LName);
//     }

//     console.log("InnerOuter LName is : ", LName);
// }

// Demo();

// function Demo()
// {
//     let  FName = "John";
//     console.log("FName :" , FName);

//     if(true)
//     {
//         let LName = "Sen";

//         console.log("Inner FName is : ", FName);
//         console.log("Inner LName is : ", LName);
//     }

//     console.log("InnerOuter LName is : ", LName); //Error
// }

// Demo();

function Demo()
{
    const FName = "John";
    console.log("FName :" , FName);

    if(true)
    {
        const LName = "Sen";

        console.log("Inner FName is : ", FName);
        console.log("Inner LName is : ", LName);
    }

    console.log("InnerOuter LName is : ", LName); //Error
}

Demo();


