import { URL } from './constant/constant.js';
import  request  from 'supertest';
import { expect }  from 'chai';

// need to pass done() in the end() function -
// Old-style callbacks are also supported, but not recommended.
describe('Check request status code ' , () => {
    it('request is successful to www.google.com', (done) => {
        request(URL.GOOGLE)
        .get('/')
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
            return done();
        })    
    })

    it('request is not found with wrong URL', (done) => {
        request(URL.GOOGLE)
        .get('/doesnotexist')
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(404);
            return done();
        })
    })
})
