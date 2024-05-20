const { expect } = require("chai");
const supertest = require("supertest");

const app = require("../app");

describe('Testing the routes', () => {
  it('login route test found', (done) => {
    supertest(app)
      .get('/oauth/login')
      .expect(302)
      .end((err, res) => {
        expect(err).to.be.equal(null);
        expect(res.headers['location']).to.match(/^https:\/\/github.com\/login\/oauth\/authorize/);
        done(err);
      });
  });
  
  it('callback route test unauthorized access', (done) => {
    supertest(app)
      .get('/oauth/callback')
      .query({ code: 'invalid_code' })
      .expect(401)
      .end((err, res) => {
        expect(err).to.be.equal(null);
        done(err);
      });
  });
});
