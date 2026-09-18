const nam = document.querySelector('#name');
const age = document.querySelector('#age');
const address = document.querySelector('#address');
const clase = document.querySelector('#class');
const form = document.querySelector('#a-form');

nam.value = localStorage.getItem('name') || '';
age.value = localStorage.getItem('age') || '';
address.value = localStorage.getItem('address') || '';
clase.value = localStorage.getItem('class') || '';

//saving at intervals=>
// setInterval(()=>{
//     localStorage.setItem('name', nam.value);

//     localStorage.setItem('age', age.value);

//     localStorage.setItem('address', address.value);

//     localStorage.setItem('class', clase.value);
// },5000);

//using input event=>
form.addEventListener('input', ()=>{
    localStorage.setItem('name', nam.value);

    localStorage.setItem('age', age.value);

    localStorage.setItem('address', address.value);

    localStorage.setItem('class', clase.value);
})