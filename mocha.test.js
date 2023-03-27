import request from 'supertest';
import chai from 'chai';
const expect = chai.expect;
let id;

describe("test api rest full", () => {
    describe("FIRST POST", () => {
        it('must return a status of 201 and add the first product', async () => {
            let product = {nombre: "Leche", precio: 250, thumbnail: "url"}
            let response = await request('http://localhost:8080').post('/api').send(product)

            expect(response.status).to.eql(201)
            console.log(response._body);
        })
    })

    describe("SECOND POST", () => {
        it('must return a status of 201 and add the second product', async () => {
            let product = {nombre: "Jugo", precio: 300, thumbnail: "url"}
            let response = await request('http://localhost:8080').post('/api').send(product)

            expect(response.status).to.eql(201)
            console.log(response._body);
        })
    })

    describe("GET ALL", () => {
        it('must return a status of 200 and return all products', async () => {
            let response = await request('http://localhost:8080').get('/api')

            expect(response.status).to.eql(200)
            console.log(response._body);

            id = response._body[Math.floor(Math.random() * (response._body.length-1))].id
        })
    })

    describe("UPDATE BY ID", () => {
        it('must return a status of 200 and update random product', async () => {
            let product = {nombre: "Caja de Jugo", precio: 100, thumbnail: "url"}
            let response = await request('http://localhost:8080').put('/api/'+id).send(product)

            expect(response.status).to.eql(200)
            console.log(response._body);
        })
    })

    describe("DELETE BY ID", () => {
        it('must return a status of 200 and delete random product', async () => {
            let response = await request('http://localhost:8080').delete('/api/'+id)

            expect(response.status).to.eql(200)
            console.log(response._body);
        })
    })
})