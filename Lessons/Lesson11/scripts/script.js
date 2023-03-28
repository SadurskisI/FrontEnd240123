// const arr = [2,38,895,10,26]
// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }

// console.log(sum);

// const arr = [2,-38,895,-10,26,-9,52,99,-62]
// let sum = 0

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) 
//             sum += arr[i]
//         }
//         console.log(sum);

// const arr = [2,38,895,10,26,9,52,99,62,5,7,16,24]
// sumOdd = 0
// sumEven = 0

// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] % 2) {
//         sumEven += arr[index]
//     } else sumOdd += arr[index]   
// }
// console.log(sumEven);
// console.log(sumOdd);

// if (sumEven > sumOdd) {
//     console.log(sumEven - sumOdd);
// } else console.log(sumOdd - sumEven);

// Найти сумму чисел из массива, чей индекс равен значению элемента

// const arr = [1,34,52,4,9,-5,6,59,52,9]
// let sum = 0
// for (let index = 0; index < arr.length; index++) {
//         if (arr[index] == index ) {
//             sum += arr[index]
//         }

// }
// console.log(sum);

// const user = ["John", "Smith",35 , 4500]
// console.log(`Name of person ${user[0]}`);
// console.log(`Lastname of person ${user[1]}`);
// console.log(`Age of person ${user[2]}`);
// console.log(`Salary of person ${user[3]}`);

// const user = {
//     name: "John",
//     lastname: "Smith",
//     age: 35,
//     salary: 4500,
//     'life events': 'hobbies' // Correct variant lifeEvents(CamelStyle)
// }

// console.log(user);
// console.log(`Name of person ${user['name']}`);
// console.log(`Lastname of person ${user['lastname']}`);
// console.log(`Age of person ${user['age']}`);
// console.log(`Salary of person ${user['salary']}`);

// console.log(`Name of person ${user.name}`);
// console.log(`Lastname of person ${user.lastname}`);
// console.log(`Age of person ${user.age}`);
// console.log(`Salary of person ${user.salary}`);
// console.log(`Life events of person ${user["life events"]}`);

// user.name = "Jake"
// user.proffesion = "Developer"
// console.log(user.gender);

// const products = [
//     {
//         name:"Product 1",
//         price: 1500,
//         type: "a",
//         discount: 50
//     },
//     {
//         name:"Product 2",
//         price: 2000,
//         type: "b",
//         discount: 5
//     },
//     {
//         name:"Product 3",
//         price: 500,
//         type: "c",
//         discount: 7
//     },
//     {
//         name:"Product 4",
//         price: 3200,
//         type: "b",
//         discount: 10
//     }
// ]

// for (let index = 0; index < products.length; index++) {
//     console.log(`Name of product ${products[index].name}`);
// }

// let sum = 0
// for (let index = 0; index < products.length; index++) {
//     sum += products[index].price
// }
// console.log(`Total price is: ${sum}`);

// const newarr = []
// for (let index = 0; index < products.length; index++) {
//     if (products[index].type === "b") {
//         newarr.push(products[index])
//     }
    
// }
// console.log(newarr);

// let lastPrice = 0
// for (let index = 0; index < products.length; index++) {
//     lastPrice = products[index].price - (products[index].price * products[index].discount / 100)
//     console.log(`${products[index].name} Price after discount ${lastPrice}`);
// }
// price - price * discount / 100 // discount formula

// for (let index = 0; index < products.length; index++) {
//     const {name, price, discount} = products[index]
//     console.log(`${name} Price after discount ${price - price * discount/100}`);
// }



const users = [
    {
        id: 1,
        firstName: 'Ivan',
        lastName: "Ivanov",
        age: 19,
        country: "Latvia"
    },
    {
        id: 2,
        firstName: 'Ivan2',
        lastName: "Ivanov2",
        age: 16,
        country: "Latvia"
    },
    {
        id: 3,
        firstName: 'Ivan3',
        lastName: "Ivanov3",
        age: 21,
        country: "Latvia"
    },
    {
        id: 4,
        firstName: 'Ivan4',
        lastName: "Ivanov4",
        age: 17,
        country: "Latvia"
    }
]

for (let index = 0; index < users.length; index++) {
    const {firstName, age,} = users[index]
    if (age >= 18)
    console.log(users[index]);
}