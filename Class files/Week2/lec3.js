//loop
let currentNumber = 1;
let evenNumberCount = 0;

while(evenNumberCount < 4){
    if(currentNumber % 2 == 0){
        evenNumberCount = evenNumberCount + 1
    }

    if(evenNumberCount == 4){
        console.log('we found our number', currentNumber)
    }
    else{
        currentNumber = currentNumber + 1;
    }
}