import { URL } from './constant/constant.js';
import  request  from 'supertest';
import { expect }  from 'chai';

// Using async await
describe('Check authorization', () => {
    it('no authorization is needed', async () => {
        const response = await request(URL.GOOGLE).get('/')
        expect(response.unauthorized).to.be.equal(false);
    })
})
