const request = require('supertest');
const expect = require('chai').expect;

// Using async await
describe('Check authorization', () => {
    it('no authorization is needed', async () => {
        const response = await request("https://www.google.com").get('/')
        expect(response.unauthorized).to.be.equal(false);
    })
})
