//Rectangle pattern

// let count = 1;

// while(count<=4){
//     stringToBePrinted = "";
//     for(i = 0; i < 4; ++i){
//         stringToBePrinted += "*"
//     }
//     ++count;
//     console.log(stringToBePrinted)
// }


//Hollow-Rectangle pattern

// let count = 1;
// n = 5
// while(count<=n){
//     stringToBePrinted = "";
//     if(count === 1 || count === n){
//         for(let i = 0; i < n; ++i){
//             stringToBePrinted += "*"
//     }
//     }
//     else{
//         for(let i = 0; i < n; ++i){
//             if(i === 0 || i === 4){
//                 stringToBePrinted += "*"
//             }
//             else{
//                 stringToBePrinted += " "
//             }
//         }
//     }
//     ++count;
//     console.log(stringToBePrinted)
// }


//Left-aligned Triangle

// for( let count = 0; count < 5; ++count){
//     let stringToBePrinted = "";
//     for(let timesPrinted=0; timesPrinted <= count; ++timesPrinted){
//         stringToBePrinted = stringToBePrinted + "*";
//     }
//     console.log(stringToBePrinted)
// }


//Reverse Triangle

// for( let count = 5; count > 0; --count){
//     let stringToBePrinted = "";
//     for(let timesPrinted=0; timesPrinted < count; ++timesPrinted){
//         stringToBePrinted = stringToBePrinted + "*";
//     }
//     console.log(stringToBePrinted)
// }


//Number Triangle

// for( let count = 0; count < 5; ++count){
//     let stringToBePrinted = "";
//     for(let timesPrinted=0; timesPrinted <= count; ++timesPrinted){
//         stringToBePrinted = stringToBePrinted + (timesPrinted + 1);
//     }
//     console.log(stringToBePrinted)
// }


//Floyd's Triangle

// let num = 1;
// for( let count = 0; count < 5; ++count){
//     let stringToBePrinted = "";
//     for(let timesPrinted=0; timesPrinted <= count; ++timesPrinted){
//         stringToBePrinted += (num);
//         ++num;
//     }
//     console.log(stringToBePrinted)
// }


// a new pattern

// let num = 1;
// let n = 5;
// for( let count = 0; count < n; ++count){
//     let stringToBePrinted = "";
//     for(let timesPrinted=0; timesPrinted < n; ++timesPrinted){
//         if(num%2===1) {
//             stringToBePrinted += (num);
        
//         }
//         else{
//             stringToBePrinted += " ";
//         }
//         ++num;
//     }
//     console.log(stringToBePrinted)
// }


