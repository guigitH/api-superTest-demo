import { URL } from './constant/constant.js';
import  request  from 'supertest';
import { expect }  from 'chai';

// Using try catch
describe('Check query string', () => {
    it('query string is accepted', async (done) => {
        try {
            const response = await request(URL.GOOGLE).get('/?uselessQuery');
            expect(response.statusCode).to.be.equal(200);
        } catch(error) {
            console.log(error)
        } finally {
            done()
        }
    })
})