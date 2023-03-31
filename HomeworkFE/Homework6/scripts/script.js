// Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
// 
for (let index = 0; index < 6; index++) {
    console.log(index*2);
}
// -------------------------------------------------
for (let index = 55; index > 19; index--) {
    console.log(index);
}
// --------------------------------------------------
const nubmers = [3,5,11,2,8,1,6]
const numbersSquared = []
for (let index = 0; index < nubmers.length; index++) {
    numbersSquared.push(nubmers[index]**2)
}
console.log(numbersSquared);
// --------------------------------------------------
const lastElem =numbersSquared[numbersSquared.length-1]
console.log(lastElem);
// --------------------------------------------------
const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
    }

console.log(`User's name is ${user.first_name} ${user.last_name}. He is ${user.age} years old.`);