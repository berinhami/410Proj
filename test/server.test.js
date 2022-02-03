const request = require('supertest')
const expect = require('chai').expect
const { server } = require('../server/server')

describe('server', () => {
    let app

    // beforeEach is a hook function that will run before every test.
    // We use it to get the express "app" from our server function.
    beforeEach(async () => {
        app = await server()
    })

    describe('accounts', () => {
        it('can create an account', () => {
            return request(app)
                .post('/accounts')
                .send({
                    username: 'bingbong22',
                    firstName: 'bing',
                    lastName: 'bong',
                    password: 'goodPassword'
                })
                .expect(201)
        })
    })

    describe('accounts', () => {
        it('it can get an account', async function() {
            const response = await request(app)
            .get('/accounts')
            .set('Accept', 'application/json')
            expect(200)
            
        })
    })

    describe('accounts', () => {
        it('it can delete an account', () => {
            return request(app)
                .delete('/accounts/{userid}')
                .expect(204)
        })
    })

    describe('accounts', () => {
        it('it can log into an account', () => {
            return request(app)
                .put('/accounts/{userid}/login')
                .send({
                    username: 'bob12',
                    password: 'notBob'
                })
                .expect(200)
        })
    })

    describe('accounts', () => {
        it('it can log out of an account', () => {
            return request(app)
                .put('/accounts/{userid}/logout')
                .expect(200)
        })
    })

    describe('puzzles', () => {
        it('can create a puzzle', () => {
            return request(app)
                .post('/puzzles')
                .send({
                    "puzzleDifficulty": 1,
                    "originalNumbers": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                })
                .expect(201)
              //  expect(response.res.body).to.be.an(Array)
        })
    })

    describe('puzzles', () => {
        it('it can delete a puzzle', () => {
            return request(app)
                .delete('/puzzles/{puzzleid}')
                .expect(204)
        })
    })

    describe('puzzles', () => {
        it('it can get a puzzle', () => {
            return request(app)
                .get('/puzzles/{puzzleid}')
                .set('Accept', 'application/json')
                expect(200)
                expect(response.res.body).to.be.an(Array)
        })
    })

})