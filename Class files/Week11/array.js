//find the missing number from the given array provided they are always from 1 to n

// n = 10
// arr = [7, 9, 8, 4, 6, 2, 1, 10, 3] //sorting 

// const n = 10;
// const arr = [7, 9, 8, 4, 6, 2, 1, 10, 3]
// const sortedValues = arr.sort((a,b) => a -b)
// console.log(sortedValues)

// let answer = -1;
// for(let i=0; i<arr.length; i++){
//     if(arr[i] != i+1){
//         answer = i+1
//         break;
//     }
// }
// if(answer === -1){
//     console.log(n)
// }
// else{
//     console.log(answer)
// }

//above solution gives a time complexxity of nlogn(sort) & n(for) , i.e. n + nlogn

//solution 2

// const markValuesArray = new Array(n).fill(-1);
// for(let i=0; i<arr.length; i++){
//     markValuesArray[arr[i]-1] = 1;
// }
// console.log(markValuesArray)

// let answer = -1; //temporary new variable
// for(let i=0; i<markValuesArray.length; i++){
//     if(markValuesArray[i] === -1){
//         answer = i +1;
//         break;
//     }
// }
// console.log(answer)