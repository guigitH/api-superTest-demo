const request = require('supertest');
const expect = require('chai').expect;
const app = require('./app');

describe('get requests' , () => {
    it('get course id', () => {
        request(app)
        .get('/course/1')
        .end((err, res) => {
            expect(res.body.id).to.be.equal('1');
        })
    })

    it('get query param name', (done) => {
        request(app)
        .get('/course')
        .query({'name': 'mocha'})
        .expect(200, {id: '1', name: 'mocha'}, done)
    })
})