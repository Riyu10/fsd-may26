// //sol.1
// const arrFruits = ['Apple', 'Banana', 'Guava', 'Kiwi', 'Grapes'];
// console.log(arrFruits)

// //sol.2
// const arrNum = [1, 2, 3, 4, 5];
// console.log(arrNum[0])
// //sol.3
// console.log(arrNum[arrNum.length-1])

// //sol.4
// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers[2])

// //sol.5
// let arr = new Array(10);
// arr[1] = 'black';
// console.log(arr)

// //sol.6
// const arrNum = [1, 2, 3, 4, 5];
// for(num of arrNum){
//     console.log(num)
// }
// //sol.7
// let count = 0;
// while(count<arrNum.length){
//     console.log(arrNum[count])
//     count++;
// }

// //sol.8
// let numbers = [10,15,20,25,30];
// for(num of numbers){
//     if(num > 20){
//         console.log(num)
//     }
// }

// //sol.9
// let numbers = [2,4,6,8,10];
// let sum = 0;
// for (num of numbers) {
//     sum += num;
// }
// console.log(sum)

//sol.10
// let numbers = [5,10,15,20];
// let sum = 0;
// for (num of numbers) {
//     sum += num;
// }
// console.log(sum/numbers.length)

// //sol.11
// let numbers = [10,20,30,40,50];
// let count = 0;
// for(num of numbers){
//     if(num > 25){
//         count++;
//     }
// }
// console.log(count)

// //sol.12
// const arrNum = [1, 2, 3, 4, 5];
// let lNum =0;
// for(num of arrNum){
//     if(num > lNum){
//         lNum = num;
//     }
// }
// console.log(lNum)
// //sol.13
// let sNum = 1000;
// for(num of arrNum){
//     if(num < sNum){
//         sNum = num;
//     }
// }
// console.log(sNum)

// //sol.14
// let numbers = [10,20,30,40];
// for (let i = numbers.length-1; i >= 0; i--) {
//     console.log(numbers[i])
// }

// //sol.15
// const arrNames = ['akshay', 'abhay', 'ajya', 'zayn', 'shawn', 'dirk'];
// let searchName = '';
// let present = 0;
// for(name of arrNames){
//     if(name === searchName){
//         present++;
//     }
// }
// if(present>0){
//     console.log('Name was found')
// }
// else{
//     console.log('Name was not found')
// }

/*
    advanced
*/
// //sol.16
// let numbers = [12,7,25,3,18];
// //same sol. as 12 & 13 combined

// //sol.17
// const arrNum = [1,1,1,12,2,5,8,6,49,5,7,3,2,3,1,6,4];
// let evenCount = 0;
// let oddCount = 0;
// for(num of arrNum){
//     if(num % 2 === 0){
//         evenCount++;
//     }
//     else{
//         oddCount++;
//     }
// }
// console.log('Even: ',evenCount)
// console.log('Odd: ',oddCount)

// //sol.18
// const arrNum = [1,1,1,12,2,5,8,6,49,5,7,3,2,3,1,6,4];
// let evenSum = 0;
// for(num of arrNum){
//     if(num % 2 === 0){
//         evenSum += num;
//     }
// }
// console.log(evenSum)

// //sol.19
// const arrNum = [1,1,1,12,2,5,8,6,49,5,7,3,2,3,1,6,4];
// let arrReverse = [];
// for(let i = 1; i <= arrNum.length; i++){
//     arrReverse[arrNum.length-i] = arrNum[i-1];
// }
// console.log(arrReverse)

// //sol.20
// const arrNames =['klkl', 'fghfgh'];
// for(name of arrNames){
//     if(name.length > 5){
//         console.log(name)
//     }
// }

// //sol.21
// let numbers = [10,20,10,30,10,40];
// let count = 0;
// for(num of numbers){
//     if(num === 10){
//         count++;
//     }
// }
// console.log(count)

// //sol.22
// const arrNum = [1,1,1,12,2,5,8,6,49,5,7,3,2,3,1,6,4];
// let negativeNumbers = 0;
// for(num of arrNum){
//     if(num < 0){
//         negativeNumbers++;
//     }
// }
// if(negativeNumbers > 0){
//     console.log('Negative numbers are present.')
// }
// else{
//     console.log('Negative numbers are not present.')
// }

// //sol.23
// const arrNum = [1, 2, 3, 4, 5];
// let lNum = 0;
// let lNum2 = 0;
// for(num of arrNum){
//     if(num > lNum){
//         lNum = num;
//     }
// }
// for(num of arrNum){
//     if((num > lNum2) && (num !== lNum)){
//         lNum2 = num;
//     }
// }
// console.log(lNum2)

// //sol.24
// const arrNum1 = [1,1,1,12,2,5,8,6,49,5,7,3,2,3,1,6,4];
// const arrNum2 = [1, 2, 3, 4, 5];
// let newArr =[];
// for(let i = 0; i < (arrNum1.length + arrNum2.length); i++){
//     if(i < arrNum1.length){
//         newArr[i] = arrNum1[i];
//     }
//     else{
//         newArr[i] = arrNum2[i-arrNum1.length];
//     }
// }
// console.log(newArr)

// //sol.25
// let arr = [12,5,3,8,74,62];
// let removeIndex = 3;
// let length = arr.length;
// for(let i = 0; i < arr.length; i++){
//     if(i >= removeIndex){
//         arr[i] = arr[i+1];
//     }
// }
// arr.length--;
// console.log(arr)