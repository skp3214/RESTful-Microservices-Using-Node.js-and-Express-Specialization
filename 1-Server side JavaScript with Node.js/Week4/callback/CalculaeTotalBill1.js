const calculateBillafterDiscount=(billAmount,discount)=>{
    setTimeout(()=>{
        console.log(billAmount-(billAmount*discount))
    },2000)
}

const validateBill=(billAmount)=>{
    if(billAmount<0){
        console.log("Invalid bill amount");
    }
    else{
        console.log("Valid bill amount");
    }
}

calculateBillafterDiscount(2000,0.25)
validateBill(2000);