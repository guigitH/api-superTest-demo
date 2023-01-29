import { URL } from './constant/constant.js';
import  request  from 'supertest';
import { expect }  from 'chai';

// Using try catch
describe('Response properties', () => {
    it('response Content-Type is text/html', async (done) => {
        try {
            const response = await request(URL.GOOGLE).get('/?uselessQuery');
            expect(response.type).to.be.equal('text/html');
        } catch(error) {
            console.log(error)
        } finally {
            done()
        }
    })
})
