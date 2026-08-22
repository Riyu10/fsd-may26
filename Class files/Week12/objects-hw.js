// //sol.1
// const Student = {
//     name: 'Akshay',
//     age: '26',
//     course: 'FSD'
// }
// console.log(Student)

// //sol.2
// const car = {
//     brand : 'volkswagen',
//     model : 'abd-19',
//     year : '2020'
// }
// console.log(car.brand)

// //sol.3
// let student = { 
//     name: "Rahul", 
//     age: 20, 
//     course: "JavaScript" 
// }
// console.log('Name ',student.name)
// console.log('Age ',student.age)

// //sol.4
// let student = { 
//     name: "Rahul", 
//     age: 20, 
//     course: "JavaScript" 
// }
// student.age = 25;
// console.log(student)

// //sol.5
// let student = { 
//     name: "Rahul", 
//     age: 20, 
//     course: "JavaScript" 
// }
// student.city = 'Delhi';
// console.log(student)

// //sol.6
// let bottle = {
//     name : 'plastic bottle',
//     price : 299,
//     quantity : 5
// };
// let totalPrice = bottle.price * bottle.quantity;
// console.log('Total: ', totalPrice)

// //sol.7
// let book = {
//     title : 'Harry Potter',
//     author : 'J.K. Rowlings',
//     pages : 1000
// }
// console.log(book.title)
// console.log(book.author)
// console.log(book.pages)

// //sol.8
// let employee = {
//     name : "klklj",
//     yoe : 3,
//     slary : 45000,
//     gender : 'male'
// }
// for(key in employee){
//     console.log(employee[key])
// }

// //sol.9
// let marks = {
//     eng : 45,
//     maths : 48,
//     science : 47
// }
// let total = marks.eng + marks.maths + marks.science;
// console.log('Totalmarks: ', total, '/150')
// //sol.10
// console.log('Averagemarks: ',total/3)

// //sol.11
// let student = {
//     name : 'Akshay',
//     address : {
//         city : 'Gurugram',
//         pincode : 122001
//     }
// }
// console.log(student.address.city)

// //sol.12
// let student = {
//     name : 'Akshay',
//     address : {
//         city : 'Gurugram',
//         pincode : 122001
//     }
// }
// student.address.city = 'Delhi';
// console.log(student)

/*
    advanced
*/
// //sol.1
// let arrStudent = [
//     {
//         name : 'Anil',
//         age : 12
//     },
//     {
//         name : 'sobha',
//         age : 11
//     },
//     {
//         name : 'kajal',
//         age : 12
//     }
// ]
// console.log(arrStudent)
// //sol.2
// for(stu of arrStudent){
//     console.log(stu.name)
// }

// //sol.3
// let products = [
//     {
//         name : 'bottle',
//         price : 250
//     },
//     {
//         name : 'toycar',
//         price : 199
//     },
//     {
//         name : 'watch',
//         price : 1500
//     }
// ]
// for(prod of products){
//     if(prod.price > 1000){
//         console.log(prod.name)
//     }
// }

//sol.4,5,6,7,8 will be solved similarly to 3

// //sol.9
// let users = [
//     {
//         name : ''
//     },
//     {
//         name : ''
//     }
// ]
// const nameToSearch = '';
// for(user of users){
//     if(user.name === nameToSearch){
//         console.log(user)
//     }
// }

// //sol.10
// let userHobbies = {
//     name : 'Akshay',
//     hobbies : ['Reading', 'Drawing', 'Anime']
// }
// for(hobby of userHobbies.hobbies){
//     console.log(userHobbies.name,':',hobby)
// }