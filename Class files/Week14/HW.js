const buttonElem = document.querySelector('#hamburger-btn');
const navbar = document.querySelector('#navbar');
const nav = document.getElementById('navbar');
console.log(navbar)
console.log(nav)
buttonElem.addEventListener('click',()=>{
    const dialogBox = document.createElement('dialog');
    dialogBox.appendChild(navbar.cloneNode(true));
    dialogBox.classList.toggle('active');
    console.log(dialogBox);
    document.body.append(dialogBox);
    dialogBox.showModal();
})