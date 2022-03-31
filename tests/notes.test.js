const supertest = require('supertest');
const app = require('../pages/react');

const api = supertest(app)

test('notes are returned in JSON', () => {
    api
    .get('/api/resources-react')
    .expect(200)
})

afterAll(() => {
    // close the server after all the tests have run
    server.close();
})