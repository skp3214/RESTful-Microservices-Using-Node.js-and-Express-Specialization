const chai=require('chai');
const expect=chai.expect;
const calculator=require('../src/CalcTest');

describe("Test Calculator Functionality",()=>{
    describe("Test Addtion Funcctionality",()=>{
        it("2+2 should be equal to 4",()=>{
            expect(calculator.addition(2,2)).to.equal(4);
        })
    })
})