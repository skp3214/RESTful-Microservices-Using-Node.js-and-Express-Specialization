const calculateBillAfterDiscount = (billAmount, discount) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (discount <= 0) {
                reject("Invalid discount percentage");
            }
            resolve(billAmount - (billAmount * discount))
        }, 2000)
    })
};

const validateBill = (billAmount) => {
    return new Promise((resolve, reject) => {
        if (billAmount < 0) {
            reject("Invalid bill amount");
        } else {
            resolve(billAmount);
        }
    });
};

validateBill(2000).then((amount)=>{
    return calculateBillAfterDiscount(amount,0.25);
}).then((result)=>{
    console.log(result);
})
.catch(error=>{
    console.log(error)
})

