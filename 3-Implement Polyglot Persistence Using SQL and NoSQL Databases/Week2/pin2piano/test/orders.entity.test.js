const chai = require('chai');
const expect = chai.expect;
const OrdersModel = require("../orders/orders.entity");

describe('Orders Model', () => {
    let validModel;
    let inValidModel;

    beforeEach(() => {
        validModel = new OrdersModel({
            orderId: "9965321",
            orderName: "mixed-fruit juice",
            productId: "12345",
            productName: "Sample Product",
            userId: "67890",
            userName: "John Doe",
            orderDate:Date.now()
        });

        inValidModel = new OrdersModel();
    });

    it('should be invalid if orderId property is empty', async () => {
        try {
            await inValidModel.validate();
            throw new Error('Expected validation error but none was thrown');
        } catch (err) {
            expect(err.errors.orderId).to.exist;
        }
    });

    it('should be invalid if orderName property is empty', async () => {
        try {
            await inValidModel.validate();
            throw new Error('Expected validation error but none was thrown');
        } catch (err) {
            expect(err.errors.orderName).to.exist;
        }
    });

    it('should be invalid if productId property is empty', async () => {
        try {
            await inValidModel.validate();
            throw new Error('Expected validation error but none was thrown');
        } catch (err) {
            expect(err.errors.productId).to.exist;
        }
    });

    it('should be invalid if productName property is empty', async () => {
        try {
            await inValidModel.validate();
            throw new Error('Expected validation error but none was thrown');
        } catch (err) {
            expect(err.errors.productName).to.exist;
        }
    });

    it('should be invalid if userId property is empty', async () => {
        try {
            await inValidModel.validate();
            throw new Error('Expected validation error but none was thrown');
        } catch (err) {
            expect(err.errors.userId).to.exist;
        }
    });

    it('should be invalid if userName property is empty', async () => {
        try {
            await inValidModel.validate();
            throw new Error('Expected validation error but none was thrown');
        } catch (err) {
            expect(err.errors.userName).to.exist;
        }
    });

    it('should have unitsPlaced property with default value 0', async () => {
        expect(validModel.unitsPlaced).to.equal(0);
    });

    

    
});
