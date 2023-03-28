// const не меняемая переменная
// let меняемая переменная
// var устаревший вид переменной(Не используем)

// const text = "Hello world"

//let text = "Hello world"
//console.log(text)

// A-Z a-z $ _ 0-9 -> можно

// 1text -> нельзя
// a1, a$, _a, $a -> можно

// car_name - snake case , не нужно использовать
// carName - camel case , нужно использовать
// car-name - kebab case , error

// const name = prompt("Write your name")
// console.log(typeof (name))

// console.log("Hello " + name) // конкатинация строк
// console.log(`Hello ${name}`) // интерполяция строк

// string, number
// const a = 5.9
// const b = "hello"
// console.log(a + " is " +typeof(a))
// console.log(b + " is " +typeof(b))

// console.log(a + " is " +typeof a)
// console.log(b + " is " +typeof b)

// const r = 120
// const g = 50
// const b = 83
// console.log('"rgb('+r+", "+g+", "+b+')"')
// console.log(`"rgb(${r}, ${g}, ${b})"`)

// const a = 12
// const b = 4

// console.log(a + b) // сложение
// console.log(a - b) // вычитание
// console.log(a / b) // деление 
// console.log(a * b) // умножение
// console.log(a % b) // остаток от деления
// console.log(a ** b) //возведение в степень

// ------- 2 + 2 = 22 ----------
// const a = prompt("Enter first number")
// const b = prompt("Enter second number")
// console.log(a + b)
// -----------------------------

// const a = "2" // string
// const b = 2   // number

// console.log(typeof Number(a))
// console.log(typeof +a)
// console.log(typeof String(b))
// // console.log(a + b)
// console.log(+a + b)

// const a = prompt("Insert your age")
// console.log("Your age is " + a)

// const a = prompt("Insert your age")
// console.log("Your age is " + a**2)

const a = 5
const b = 6

// == (5 == 5) // === (number/string == number/string)
// <
// >
// <=
// >=
// !=
// !==

if (a == b) { 
    console.log(1)
}else if (a < b){ 
    console.log(0)
}else if (a > b) {
    console.log(-1)
}

