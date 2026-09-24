function addTwenty(num) {
    return num + 20;
}
const ab = addTwenty(10);
const ba = addTwenty(10.4);
console.log(ab);
console.log(ba);
class Animal {
    constructor(name, age) {
    }
}
// interface ReptileI{
//     eat2(): undefined
// }
// interface FlyI{
//     fly(): undefined
// }
class Reptile extends Animal {
    eat() {
        console.log('eating');
    }
}
class Fly extends Animal {
    fly() {
        console.log('flying');
    }
}
// class DracoLizard extends Animal implements Fly, Reptile
class DracoLizard extends Reptile {
    // eat(): undefined{
    //     console.log('eating')
    // }
    fly() {
        console.log('flying');
    }
}
export {};
//# sourceMappingURL=intro.js.map