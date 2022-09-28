'use strict';

//sayHi
console.log('Problem 1: ')

let sayHi = name => {
  let newStr = `Hi, ${name}`;
  return newStr;
}

console.log(sayHi("Kevin"));

//bigString
console.log('\n')
console.log('Problem 2: ')

let bigString = (str1, str2) => {
  if (str1.length > str2.length) {
    return "str1 is greater than str2";
  } else if (str2.length > str1.length) {
    return "str2 is greater than str1";
  } else{
    console.log(str1);
    console.log(str2);
    return "str1 is equal to str2";
  } 
}

console.log(bigString("Kevin is aw","Kevin is co"));

//bigNumber
console.log('\n')
console.log('Problem 3: ')

let bigNumber = (num1, num2) => {
  if (num1 > num2) {
    return "num1 is greater than num2";
  } else if (num2 > num1) {
    return "num2 is greater than num1";
  } else{
    return "num1 is equal to num2";
  } 
}

console.log(bigNumber(4,9));

//fiveMore
console.log('\n')
console.log('Problem 4: ')

let i = 0;

let fiveMore = arr => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 1){
      arr[i] += 5;
    }
  }
  return arr;
}

console.log(fiveMore([1,2,3,4,5]));

//arraySummer
console.log('\n')
console.log('Problem 5: ')


let arraySummer = arr => {

  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    j += arr[i];
  }
  return j;
}

console.log(arraySummer([1,2,3,4,5]));

//everyDivisible
console.log('\n')
console.log('Problem 6: ')

let num = 0;

let everyDivisible = n => {

  if(n < 10) {
    for(let num = 1; num <= 100; num++) {
      if (num % n == 0){
        console.log(num);
      }
    }
  }else{
    console.log('Number is greater than or equal to 10!')
  }
}

everyDivisible(9);
