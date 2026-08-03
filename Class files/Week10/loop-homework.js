// sol.1--

// const input = [10,20,30,40,50];
// for(let i=0; i<input.length; i++){
//     console.log(input[i])
// }

// sol.2--

// const input = ['Apple','Banana','Mango','Orange'];
// for(let i=0; i<input.length; i++){
//     console.log(input[i])
// }

//sol.3--

// const arr = ['Apple','Banana','Mango','Orange','Guava','Litchi'];
// let count = 1;
// while (arr[count] !== undefined) {
//     count++;
// }
// console.log(count)

//sol.4--

// const input = [5,10,15,20];
// for(let i = input.length-1; i >= 0; i--){
//     console.log(input[i])
// }

//sol.5--

// const arr = [2,5,8,11,14,19];
// for(let i = 0; i < arr.length; i++){
//     if (arr[i]%2===0) {
//         console.log(arr[i])
//     }
// }

//sol.6--

// const arr = [5,10,15,20];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum)

//sol.7--

// const arr = [8,14,3,25,10];
// let num = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (num < arr[i]) {
//         num = arr[i];
//     }
// }
// console.log(num)

//sol.8--

// const arr = [18,6,9,45,12];
// let num = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (num > arr[i]) {
//         num = arr[i];
//     }
// }
// console.log(num)

//sol.9--

// const arr = [2,7,8,11,14,15];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         count++;
//     }
// }
// console.log(count)

//sol.10--

// const arr = [1,2,3,4,5,6,7];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//         count++;
//     }
// }
// console.log(count)

//sol.11--

// const arr = [1,2,8,9,7,3,4,6,5,2,6,8,6]
// let targetNumber = 6;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (targetNumber === arr[i]) {
//         count++;
//     }
// }
// if (count>0) {
//     console.log('Found')
// }
// else{
//     console.log('Not Found')
// }

//sol.12--

// const arr = [1,2,8,9,7,3,4,6,5,2,6,8,6]
// let targetNumber = 8;
// let count = 0;
// let str = '';
// for (let i = 0; i < arr.length; i++) {
//     if (targetNumber === arr[i]) {
//         count++;
//         str += (i) + ' ';
//     }
// }
// if (count>0) {
//     console.log(str)
// }
// else{
//     console.log('-1')
// }

//sol.13--

// const arr = [1,2,8,9,7,3,4,6,5,2,6,8,6]
// let targetNumber = 10;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (targetNumber === arr[i]) {
//         count++;
//     }
// }
// if (count>0) {
//     console.log(count + ' occurrences found')
// }
// else{
//     console.log('No Ocurences found.')
// }

//sol.14--

// const arr = [1,2,8,9,7,3,4,6,5,2,6,8,6]

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * 2;
// }
// console.log(arr)

//sol.15--

// const arr = [1,-2,8,-9,7,3,4,-6,5,2,6,-8,6]

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] < 0){
//         arr[i] = 0;
//     }
// }
// console.log(arr)

//sol.16--

// const arr = [1,2,8,9,7,3,4,6,5,2,6,8,6]

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + 5;
// }
// console.log(arr)

//sol.17--

// const arr = [1,2,8,9,7,3,4,6,5,2,6,8,6];
// let count = 0;

// while(count < arr.length){
//     console.log(arr[count]);
//     count++;
// }

//sol.18--

// const arr = [1,2,8,9,7,3,4,6,5,2,6,8,6];
// let count = 0;
// let sumAll = 0;

// while(count < arr.length){
//     sumAll += arr[count];
//     count++;
// }
// console.log(sumAll)

//sol.19--

// const arr = [1,2,8,9,7,3,4,6,5,2,6,8,6];
// let count = 0;//can also be set as 1.

// while(count < arr.length){
//     console.log(arr[count]);
//     count += 2;
// }

//sol.20--

// const arr = [1,2,18,9,7,3,14,6,15,2,16,8,6];
// let count = 0;

// while(count < arr.length){
//     if(arr[count] > 10){
//         console.log(arr[count]);
//     }
//     count++;
// }

//sol.21--

// const arr = [1,-2,-8,9,7,3,-4,-6,5,2,6,8,-6];
// let count = 0;
// let num = 0;

// while(count < arr.length){
//     if (arr[count] > 0) {
//         num++;
//     }
//     count++;
// }
// console.log(num)

//sol.22--

// const arr = ['b', 'E', '7', 'o', 'k', 'A', 'x', 'i', '9', 'm', 'U', '#', 'q', 'e', '3', 'Z', 'I', 'w', 'O', 'p'];
// let count = 0;
// let num = 0;

// while(count < arr.length){
//     if ((arr[count].toLowerCase() === 'a') || (arr[count].toLowerCase() === 'e') || (arr[count].toLowerCase() === 'i')  || (arr[count].toLowerCase() === 'o') || (arr[count].toLowerCase() === 'u')) {
//         num++;
//     }
//     count++;
// }
// console.log(num)/

//sol.23--

// const arr = [1,-2,8,9,7,3,4,6,5,2,6,8,-6];
// let count = 0;
// let num = 0;

// while(count < arr.length){
//     num += arr[count];
//     count++;
// }
// console.log(num/count)

//sol.24--

// const arr = [1,-2,-8,9,7,3,-4,-6,5,2,6,8,-6];
// let count = 0;
// let num = 0;

// while(count < arr.length){
//     if (count === 0 || count === (arr.length -1)) {
//         console.log(arr[count]);
//     }
//     count++;
// }

//sol.25--

// const arr = [1,2,8,9,7,3,4,6,5,2,6,8,6];
// let count = 0;
// let num = 0;

// while(count < arr.length){
//     if (arr[count] < 0) {
//         num++;
//     }
//     count++;
// }
// if (num > 0) {
//     console.log('There are negative numbers present.')
// }
// else{
//     console.log('All numbers are positive.')
// }