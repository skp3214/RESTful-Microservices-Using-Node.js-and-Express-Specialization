var chai = require('chai');
const { Model } = require('mongoose');
var expect = chai.expect;
var sinon = require('sinon');
var ordersDAO = require('../orders/orders.dao');

describe('Orders DAO ', () => {

    it('should contain saveOrder() function to save order data', () => {
        expect(typeof(ordersDAO.saveOrder)).to.be.equal("function");
    });

    it('should contain findOrdersPlacedByUser() function to find orders placed by user', () => {
        expect(typeof(ordersDAO.findOrdersPlacedByUser)).to.be.equal("function");
    });

   

});
