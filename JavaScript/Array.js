var data = ["abc","pqr", "xyz", "demo"];

console.log("Using for loop")

for(let i=0;i<data.length;i++)
{
    console.log(data[i]);
}

console.log("Using For in Loop")  //It returns Elements Index

for(let elements in data )
{
    console.log(elements);
}

console.log("Using For of Loop")   //It returns Particular Element

for(let elements of data )
{
    console.log(elements);
}

console.log("For Each Loop")

data.forEach(function(element,index,array){
    console.log(element)
})