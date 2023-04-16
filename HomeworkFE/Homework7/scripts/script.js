// ------------------------------------------------ task 1
function compareNum(num1, num2){
    if (num1 > num2) {
        return num2
    }else {
        return num1
    }
}

// ------------------------------------------------- task 2

function printEvenNumDecr(num1, num2){
    let start = (num1>num2)?num1:num2
    let end = (num1<num2)?num1:num2
        start -=start%2
        end -=end%2
    const numberOfIterrations = (start - end)/2
    for (let index = 0; index < numberOfIterrations; index++) {
        console.log(start-index*2);    
    }
}
printEvenNumDecr(1,20)

// ------------------------------------------------- task 3 

function pow(number, extent=2){
    return number**extent
}

// ------------------------------------------------ task 4

function sumCalc(n){
    return (n*n+n)/2
}

// ------------------------------------------------- task 5

function sumCalcOddEven(n, m){
  
    const start=(n>m)?m:n;
    const end=(n<m)?m:n;
      
    let sumEven=0
    let sumOdd=0

    for (let index = start; index <= end; index++) {

        if (index % 2 == 0) {
            sumEven = sumEven + index
        } else {
            sumOdd = sumOdd + index
        }
    }
    console.log(`The sum of even numbers is = ${sumEven}`);
    console.log(`The sum of odd numbers is = ${sumOdd}`);
}

sumCalcOddEven(1,20)

// ------------------------------------------------- task 6

function arrayFunction(arr){
    let elemLength = 0
    let longestElem= "null"
    for (let index = 0; index < arr.length; index++) {
        if(arr[index].length > elemLength){
            longestElem = arr[index]
            elemLength = arr[index].length
        }
    }
    console.log(longestElem);
}
arrayFunction([`one`,`two`,`three`])