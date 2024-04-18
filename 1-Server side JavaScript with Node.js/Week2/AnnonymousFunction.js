(function(){
    console.log("Anonymous function Demo")
})();

let employee={
    "name":"John",
    "age":30
};

(function(){
    console.log(`Employee name is ${employee.name}`);
    console.log(`Employee age is ${employee.age}`);
})(employee);