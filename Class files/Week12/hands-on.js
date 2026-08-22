function completeObject(obj, a, b, c, d, e){
    obj[a] = b;
    obj[c] = d;
    obj['name'] = e;
    return obj;
}

const student = {
    name: 'naman',
    age: 5,
    address: 'delhi'
}

const newProperty1 = 'class'
const property1Value = '2nd'
const newProperty2 = 'rollNumber'
const newProperty2Value = 20
const newName = 'aakash';

const ans = completeObject(student, newProperty1, property1Value, newProperty2, newProperty2Value, newName)

console.log(ans)