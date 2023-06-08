let data = 123
console.log(data, typeof data) // 123 number

//typeconversion(explicite conversion)
data = String(123)
console.log(data, typeof data)

data = Number("abc")
console.log(data, typeof data)

//Coercion
data = 8 + ""
console.log(data, typeof data) //string

data = +data + 2
console.log(data ,typeof data) // 10 number

data = "123 abc"
console.log(data ,typeof data)// string

data = parseInt("123 abc")
console.log(data ,typeof data )

