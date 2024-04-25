const products = [
    ["Gucci", 300],
    ["Prada", 250],
    ["Chanel", 180]
]

const calcualteDiscountedPrice=discount=>{
    products.forEach(element => {
        element[1]=element[1]-element[1]*(discount/100)
    });
}
calcualteDiscountedPrice(10);
console.log(products)