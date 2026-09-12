// const dataReceived = fetch('https://dummyjson.com/users');
// dataReceived.then((data)=>{
//     return data.json();
// })
// .then((info)=>{
//     console.log(info)
// })
// .catch((err)=>{
//     console.log(err)
// })



//Print the thumbnails for all returned products
// const receiveData = fetch('https://dummyjson.com/products');
// receiveData.then((data)=>{
//     return data.json();
// })
// .then((info)=>{
//     const productInfo = info.products;
//     // let thumbArr = [''];
//     const thumbArr = productInfo.map(element => {
//         // console.log(element.thumbnail)
//         // let some = element.thumbnail;
//         // thumbArr += String(some) + ', ';
//         return element.thumbnail
//     });
//     console.log(thumbArr)
// })
// .catch((err)=>{
//     console.log(err)
// })