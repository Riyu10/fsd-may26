function addTwenty( num: number) : number{
    return num + 20;
}


const ab = addTwenty(10);
const ba = addTwenty(10.4)
console.log(ab)
console.log(ba)

type orderStatus = 'Confirmed' | 'Packaged' | 'Out for Delivery' | 'Delivered';

class Animal{
    constructor(name: String, age: Number){

    }
}
// interface ReptileI{
//     eat2(): undefined
// }
// interface FlyI{
//     fly(): undefined
// }
class Reptile extends Animal implements Reptile{
    eat(): undefined{
        console.log('eating')
    }
}
class Fly extends Animal{
    fly(): undefined{
        console.log('flying')
    }
}


// class DracoLizard extends Animal implements Fly, Reptile
class DracoLizard extends Reptile implements  Fly{
    // eat(): undefined{
    //     console.log('eating')
    // }
    fly(): undefined{
        console.log('flying')
    }
}