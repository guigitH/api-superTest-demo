import { URL } from './constant/constant.js';
import  request  from 'supertest';
import { expect }  from 'chai';
// Using promises
describe('Check method' , () => {
    it('post method is not allowed', () => {
        return request(URL.GOOGLE)
        .post('/')
        .expect(405)
        .then(response => {
            expect(response.request.res.statusMessage).to.be.equal("Method Not Allowed");
        })
    })
})
