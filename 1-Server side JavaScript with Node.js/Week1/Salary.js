var name=process.argv[2];
var age=parseInt(process.argv[3]);
var basicSalary=parseFloat(process.argv[4]);
const HRA=(50*basicSalary)/100;
const specialAllowance=(30*basicSalary)/100;
const PF=Math.floor((12*basicSalary)/100);

let grossSalary=(basicSalary+HRA+specialAllowance)-PF;
console.log("The annual gross income of ",name," is ",grossSalary)

// PS D:\Lovely Professional University\RESTful Microservices Using Node.js and Express Specialization\1-Server side JavaScript with Node.js\Week1> node Salary.js sachin 19 2400
// The annual gross income of  sachin  is  4032