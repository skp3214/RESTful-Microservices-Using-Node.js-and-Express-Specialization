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
            resolve("Valid bill amount");
        }
    });
};

calculateBillAfterDiscount(2000, 0.25)
    .then((discountedAmount) => {
        console.log("Discounted amount:", discountedAmount);
    },
        error => {
            console.log(error)
        }
    )

validateBill(2000)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
