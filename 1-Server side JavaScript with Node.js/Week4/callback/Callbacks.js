function ShowResult(result){
    console.log("Result is",result)
}

function multiply(a,b,callback){
    setTimeout(()=>{
        let product=a*b;
        callback(product)
    },2000)
}
multiply(4,5,ShowResult);