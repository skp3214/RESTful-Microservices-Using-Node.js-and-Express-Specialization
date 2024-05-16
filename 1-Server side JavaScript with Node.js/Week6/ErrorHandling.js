const AgeError=require('./CustomException');

const ageValidator = (age) => {
    try {
        if (age < 0) {
            // throw new Error("Age cannot be negative");
            throw new AgeError("Age cannot be negative");
        }
        if (age >= 0 && age < 18) {
            // throw new Error("Age is invalid for voting");
            throw new AgeError("Age is invalid for voting");
        }
        console.log("age is valid");
    } catch (error) {
        console.log(error.message);
        console.log(error.name);
        console.log(error.stack);
    }
    finally {
        console.log("Age is validated")
    }
}
ageValidator(-2);