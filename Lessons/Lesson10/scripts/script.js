// const a = "aa"
// console.log(isNaN(+a))

// alert("Hello world")

// const a = prompt("Введите любое число")

// if (isNaN(+a)) {
//     alert("Вы ввели не число")
// } else if(a > 0) {
//     console.log("Число больше нуля")
// } else if (a < 0) {
//     console.log("Число меньше нуля")
// } else {
//     console.log("Ваше число равно 0")
// }

// const year = +prompt("Введите год который хотите проверить")

// if (year % 400 === 0 ) {
//     console.log("Это високосный год") 
// } else if(year % 100 === 0) {
//     console.log("Это не високосный год")
// } else if(year % 4 === 0) {
//     console.log("Это високосный год")
// } else {
//     console.log("Это не високосный год")
// }


// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log("Это високосный год") 
// } else {
//     console.log("Это не високосный год")
// }

// const arr = [21, 85, 62, 20, 862,]
// console.log(arr[3])
// arr[3] = 1000
// console.log(arr)

// arr.push(700,800,900) // add element to end
// console.log(arr.pop()) // get last element and delete
// console.log(arr)

// arr.unshift(700,800,900) // add elements to start
// console.log(arr.shift()) // get first element and delete
// arr.splice(2,1)
// arr.splice(3,0,11,12) 
// delete arr[2]

const arr = [1,4,2,5,3]
const arr2 = []

// arr2.push(arr[0]**2,arr[1]**2,arr[2]**2,arr[3]**2,arr[4]**2)
// console.log(arr2)

for (let index = 0; index < arr.length; index++) {
// console.log(arr[index])
arr2.push(arr[index]**2)
}
console.log(arr2);
