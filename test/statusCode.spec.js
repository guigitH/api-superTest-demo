const request = require('supertest');
const expect = require('chai').expect;

// need to pass done() in the end() function
describe('Check request status code ' , () => {
    it('request is successful to www.google.com', (done) => {
        request("https://www.google.com")
        .get('/')
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
            return done();
        })    
    })

    it('request is not found with wrong URL', (done) => {
        request("https://www.google.com")
        .get('/doesnotexist')
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(404);
            return done();
        })
    })
})
