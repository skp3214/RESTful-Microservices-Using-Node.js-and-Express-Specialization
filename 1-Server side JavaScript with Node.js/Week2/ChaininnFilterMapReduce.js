const products = [
    ["Gucci Round Belt", 400],
    ["Gucci Round Belt", 450],
    ["Gucci Round Belt", 300],
    ["Gucci Round Belt", 500],
    ["Gucci Round Belt", 50],
    ["Gucci Round", 100],
    ["Gucci Round Belt", 250],
    ["Gucci Round Belt", 250],
]

const nonPremiumprducts = products.filter(product => product[1] <= 300)
    .map(prod => [prod[0].toUpperCase(), prod[1]])
    .reduce((stocks, currentProduct) => {
        {
            let stockitem = stocks.find(item => item[0] == currentProduct[0]);
            if (!stockitem) {
                stocks.push([currentProduct[0], 1])
            }
            else {
                stockitem = ++stockitem[1];
            }
            return stocks;
        }
    }, [])

console.log(nonPremiumprducts);