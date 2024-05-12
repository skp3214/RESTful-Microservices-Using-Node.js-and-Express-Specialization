const calculateBillafterDiscount = (billAmount, discount) => {
    console.log(billAmount - (billAmount * discount))
}

const validateBill = (billAmount) => {
    if (billAmount < 0) {
        console.log("Invalid bill amount");
    }
    else {
        console.log("Valid bill amount");
    }
}
setTimeout(calculateBillafterDiscount,5000,2000,0.25);
validateBill(2000);