// const data = [
//     [
//         ["Apple", 10],
//         ["Banana", 20],
//         ["Mango", 30]
//     ],
//     [
//         ["Orange", 15],
//         ["Grapes", 25]
//     ],
//     [
//         ["Watermelon", 50],
//         ["Papaya", 35],
//         ["Guava", 40]
//     ]
//     ];

// for(let val of data){
//     for(let items of val){
//         console.log(items[0],'->',items[1])
//     }
//     console.log('')
// }


/*
*/
// function domNode(element, classes, id, value){
//     this.elements = element;
//     this.class = classes;
//     this.id = id;
//     this.text = value;
// }
// const obj = new domNode('h1', ['head', 'title'], 'main-head', 'Top-of-page')
// console.log(obj)


/*
*/
// const someDiv = document.querySelectorAll('.me')
// const specialDiv = document.querySelector('#last')
// let num = 1;
// for(let val of someDiv){
//     val.textContent = num;
//     num++;
// }
// specialDiv.textContent = 200;


/*
*/
// const inputValue = document.querySelector('.input-text');
// inputValue.addEventListener('keydown', (e) => {
//     if(e.key === 'j'){
//         e.target.value = 'd';
//     }
//     if(e.key === 'd'){
//         e.target.value = 'j';
//     }
//     if(e.key === 'm'){
//         e.target.value = 'n';
//     }
//     if(e.key === 'n'){
//         e.target.value = 'm';
//     }
// })



const formElem = document.querySelector('#a-name');
const submitButton = document.querySelector('#btn');
const errorMessage = document.querySelector('#err-mess');

submitButton.addEventListener('click', (e)=>{
    e.preventDefault();
    // console.log(formElem.value)
    // console.log(errorMessage)
    if(formElem.value < 5 || formElem.value.includes('@')){
        errorMessage.classList.toggle('error')
    }
})