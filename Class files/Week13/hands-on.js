// Array.prototype.customIncludes = function(name){
//     for(let i = 0; i < this.length; i++){
//         if(this[i] === name){
//             return true;
//         }
//     }
//     return false;
// }

// const strArr = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];

// const result = strArr.customIncludes('Bob')
// console.log(result);

// const numberArr = [1,2,1,1,0,5,1,1,2,3,4,1];
// const totalCount = numberArr.reduce((count, num)=>{
    
// },0)

//find()
// const a = arr.find((val)=>{
//     return val >4
// })

Array.prototype.customFind = function(cb){
    //can you write? 

    for( let i=0; i<this.length; i++){
        const answer = cb(this[i]);
        if(answer){
            return this[i]
        }
    }
}

//every()
// const returned = arr.every((elem)=>{
//     return elem >= 0
// })
// console.log(returned)

Array.prototype.customEvery = function(cb){
    for(let i = 0; i < this.length; i++){
        if(!cb(this[i])){
            return false
        }
    }
    return true
}

//some()
// const result = arr.some((num)=>{
//     return num > 88
// })
// console.log(result)

Array.prototype.customSome = function(cb){
    for(let i = 0; i < this.length; i++){
        if(cb(this[i])){
            return true
        }
    }
    return false
}

//findIndex()
// const result = arr.findIndex((num)=>{
//     return num > 66
// })
// console.log(result)

Array.prototype.customFindIndex = function(cb){
    for(let i = 0; i < this.length; i++){
        if(cb(this[i])){
            return i
        }
    }
    return -1
}

//optional chaining
const userDetails = {
    name: 'naman',
    email: 'namanjindal@gmail.com',
    dob: "10/10/10",
    adhaar: '9999',
    savedCards: ['a', 'b'],
    // address: {
    //     firstLine: 'str',
    //     secondLine: 'str',
    //     state: 'delhi'
    // }
}

if(userDetails?.dob){
    console.log(userDetails?.dob)
}
if(userDetails.address && userDetails.address.state){
    console.log(userDetails.address.state)
}
if(userDetails?.address?.state){
    console.log(userDetails.address.state)
}
console.log(userDetails?.address?.state)
