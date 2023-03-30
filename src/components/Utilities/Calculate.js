 const add = (first, second) =>{
    return first + second;
}

const multiy= (first, second) =>{
    return first * second;
}
const menuCourt = (first, second) =>{
    return first - second
}

// const numbers = [12, 43, 53, 53, 543,]
// const sumReduce = (previous, courrent) => previous + courrent;
// const total = numbers.reduce(sumReduce,0)

// const items =[
//      {id: 32, product: 'lepistic', price: 455},
//      {id: 32, product: 'lepistic', price: 455},
//      {id: 32, product: 'lepistic', price: 455},
//      {id: 32, product: 'lepistic', price: 455},
//      {id: 32, product: 'lepistic', price: 455},
//     ]
// const itemSumReducer = (previous, curent) => previous + curent.price;
// const itemTotal = items.reduce(itemSumReducer,0)

const getTotalPrice = product =>{
    const reducer = (previous, current) => previous + current.price;
    const total = product.reduce(reducer,0)
    return total;
}


export {add, multiy, menuCourt, getTotalPrice} 