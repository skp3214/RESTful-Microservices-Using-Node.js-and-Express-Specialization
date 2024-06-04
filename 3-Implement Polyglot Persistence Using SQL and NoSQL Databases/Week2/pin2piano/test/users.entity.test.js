const chai = require('chai');
const expect = chai.expect;
const UsersModel = require("../users/users.entity");


describe('Users Model ', () => {
    const validModel = new UsersModel({
        userId: "1234321",
        userName: "trevis gomes",
        email: "trevis.gomes@gmail.com",
    });

    const inValidModel = new UsersModel();
    
    it('should be invalid if userId property is empty', function (done) {
        inValidModel.validate(function (err) {
            expect(err.errors.userName).to.exist;
            done();
        });
    });

    it('should be invalid if userName property is empty', function (done) {
        inValidModel.validate(function (err) {
            expect(err.errors.userName).to.exist;
            done();
        });
    });

    it('should be invalid if email property is empty', function (done) {
        inValidModel.validate(function (err) {
            expect(err.errors.email).to.exist;
            done();
        });
    });

    
    it('should have ordersPlaced property with default value 0', function (done) {

        expect(validModel.ordersPlaced).to.equal(0);
        done();
    });

    

});