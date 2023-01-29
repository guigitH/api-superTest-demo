const request = require('supertest');
const expect = require('chai').expect;

// Using promises
describe('Check method' , () => {
    it('post method is not allowed', () => {
        return request("https://www.google.com")
        .post('/')
        .expect(405)
        .then(response => {
            expect(response.request.res.statusMessage).to.be.equal("Method Not Allowed");
        })
    })
})
