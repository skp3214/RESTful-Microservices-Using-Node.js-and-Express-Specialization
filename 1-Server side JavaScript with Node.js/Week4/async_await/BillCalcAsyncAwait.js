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

const totalBillAmount=async (billAmount,discountedAmount)=>{
    const amount=await validateBill(billAmount);
    const total=await calculateBillAfterDiscount(amount,discountedAmount);
    return total;
}

totalBillAmount(2000,0.25).then((result)=>{
    console.log('resuslt is: ',result);
}).catch((err)=>{
    console.log(err);
})

