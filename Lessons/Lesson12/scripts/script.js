// function pow(a, b = 2) {
//     let result = a**b 
//     return result
// }



// function pow(a, b = 2) {
//     return a**b
// }
// // console.log(pow(2,2))

// let aa = 3 
// let bb = 4

// let cc = pow((pow(aa)+pow(bb)),0.5)
// console.log(cc);


// function check(a) {
// // ----------
// //    if (a % 2 == 0) {
// //     return true
// //     } else { 
// //     return false
// //     }
// // ---------------
// return a % 2 === 0
// }
// console.log(check(3));


// Function declaration ------------------
// function createArr (arrSize){
//     const newArr = []

// for (let index = 0; index < arrSize; index++) {
//     newArr.push(index)
// }
// return newArr
// }
// const result = createArr(11)
// console.log(result);


// // Function expression --------------------- функция через переменную
// const createArr = function(arrSize){
//     const newArr = []

//     for (let index = 0; index < arrSize; index++) {
//         newArr.push(index)
//     }
//     return newArr
//     }
//     const result = createArr(11)
//     console.log(result);


// const printHello = function() {
//         console.log("Hello")
//     }

// const obj = {
//     print: printHello,
//     cout: console.log,
//     printWarn: console.warn,
//     printError: console.error,
//     printSecond: function(str){
//         console.log(str);
//     }
// }

// // console.log

// obj.print()
// obj.cout("Hello world")
// obj.printWarn("Hello world")
// obj.printError("Hii")



const createArr = function(a, b){
    const newArr = []
    let min, max
    if(a > b){
        max = a
        min = b
    } else {
        max = b
        min = a
    }
    for (let index = max; index >= min; index--) {
        newArr.push(index)
    }
    return newArr
    }

    console.log(createArr(5,8));
    console.log(createArr(3,11));