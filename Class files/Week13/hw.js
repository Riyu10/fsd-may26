/*
    polifills
*/

//map()
Array.prototype.customMap = function(cb){
    const newArr = [];
    for(let i = 0; i < this.length; i++){
        const passValue = cb(this[i]);
        newArr.push(passValue);
    }
    return newArr
}

const arr = [1,2, 3,5,7];

const returnedValue = arr.customMap(function(val){
    if(val % 2 === 0){
        return val + 1
    }
})
console.log(returnedValue)

//filter()
Array.prototype.customFilter = function(cb){
    const newArr = [];
    for(let i = 0; i < this.length; i++){
        const ifPass = cb(this[i]);
        if(ifPass){
            newArr.push(this[i]);
        }
    }
    return newArr
}

const returnedValue2 = arr.customFilter(function(val){
        return val > 2
})
console.log(returnedValue2)

//forEach()
Array.prototype.customForEach = function(cb){
    for(let i = 0; i < this.length; i++){
        cb(this[i]);
    }
}

arr.customForEach(function(val){
    console.log(val + 1)
})

//includes()
Array.prototype.customIncludes = function(toMatch){
    for(let i = 0; i < this.length; i++){
        if(this[i] === toMatch){
            return true;
        }
    }
    return false;
}

const check = arr.customIncludes(5)
console.log(check)