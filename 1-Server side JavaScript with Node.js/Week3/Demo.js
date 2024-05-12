var add=require('./ModulesDemo');
var xyz=require('./ModuleDemo2');
var abc=require('./Module3');
var {modulus,remainder}=require('./Module4');

add();
xyz.sub();
abc.division();
abc.multiplication();
modulus();
remainder();