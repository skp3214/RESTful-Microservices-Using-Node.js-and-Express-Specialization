const products = [
    ["Gucci", 300],
    ["Prada", 250],
    ["Chanel", 180]
]

const calcualtedDiscountPrice=discount=>products.map(
    product=>[product[0],product[1]-product[1]*discount/100,]
)
let discounted =calcualtedDiscountPrice(10)
console.log(products)
console.log(discounted)