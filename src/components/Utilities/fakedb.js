const addToBd = id => {
let shopingCart = {}
// get the shoppingCart
const storageCard = localStorage.getItem('shoping-cart')
if(storageCard){
  shopingCart = JSON.parse(storageCard);
}
else{
  shopingCart = {};
}
// add quantity
  const quantity = shopingCart[id];
  if(quantity){
    const newQuantity = quantity + 1;
    shopingCart[id] = newQuantity;
    // localStorage.setItem(id, newQuantity)
  }
  else{
      shopingCart[id] = 1;
    // localStorage.setItem(id, 1)
  }
  localStorage.setItem('shoping-cart', JSON.stringify(shopingCart))

}

const removeFromeDb = id =>{
const storedCart = localStorage.getItem('shoping-cart')
if(storedCart){
  const shopingCart = JSON.parse(storedCart)
  if(id in shopingCart){
    delete shopingCart[id]
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart))
  }
}
}

const removeShopingCart = ()=>{
  localStorage.removeItem('shoping-cart')
}

export {addToBd, removeFromeDb, removeShopingCart}


// const addToBd = id =>{
//   const quantity = localStorage.getItem(id)
//   if(quantity){
//     console.log('i am quantity')
//    const newQuantity = parseInt(quantity) + 1;
//    localStorage.setItem =(id, newQuantity)
//   }
//   else{
//     localStorage.setItem(id, 1)
//     console.log('new quantity');
//   }
// }

// export{addToBd}