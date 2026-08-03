for(let y = 0; y<=4; ++y){
        console.log("1 ".repeat(y))
    }
for (let i = 5; i>=0; --i){
    console.log("1 ".repeat(i))
}
// can't use above code as we are learning nested loops

for( let count = 5; count > 0; --count){
    // console.log(count)// what next??
    let stringToBePrinted = "";
    for(let timesPrinted=0; timesPrinted < count; ++timesPrinted){
        // console.log(1)
        stringToBePrinted = stringToBePrinted + 1 + " ";
    }
    console.log(stringToBePrinted)
}


for( let count = 5; count > 0; --count){
    // console.log(count)// what next??
    let stringToBePrinted = "";
    for(let timesPrinted=0; timesPrinted < count; ++timesPrinted){
        // console.log(1)
        stringToBePrinted = stringToBePrinted + (timesPrinted+1) + " ";
    }
    console.log(stringToBePrinted)
}
