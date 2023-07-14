const add = (a,b) =>{
    return a+b;
}

const sub = (a,b) =>{
    return a-b;
}

const mult = (a,b) =>{
    return a*b;
}

const div = (a,b) =>{
    return a/b;
}

const calculator = (num1, num2, gun) => {
    return gun(num1, num2)
}

console.log(calculator(5,2,add))