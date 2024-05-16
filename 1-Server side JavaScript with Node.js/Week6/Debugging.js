const calaculateTax=(category, price)=>{
    var totprice=0.0;
    if(category==='mobile'){
        totprice=(12.5/100)*price+price;
        console.log("Total price of the mobile is : "+totprice);
    }
    else if(category==="books"){
        totprice=(2.5/100)*price+price;
        console.log("Total price of the book is : "+totprice);
    }
    else if(category==="clothes"){
        totprice=(7.5/100)*price+price;
        console.log("Total price of the clothes is : "+totprice);
    }
    else if(category==="electronics"){
        totprice=(12.5/100)*price+price;
        console.log("Total price of the electornics is : "+totprice);
    }
    else{
        console.log("unlisted category")
    }
    return totprice;
}

calaculateTax("clothes",1000);