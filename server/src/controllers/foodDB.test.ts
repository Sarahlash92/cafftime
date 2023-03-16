// @ts-nocheck


require('dotenv').config();
const dbName = process.env.DB_TEST;
const db_url = process.env.DB_URL;
const Koa = require('koa');
import router from '../router';
const bodyParser = require('koa-bodyparser');
const superTest = require('supertest');
const Food = require('./../models/food');
const mongoose = require('mongoose');
const { describe, afterEach, default: test } = require('node:test');

describe('Tests', () => {
  const app = new Koa();
  app.use(bodyParser())
    .use(router.routes());
  const request = superTest(app);

  beforeAll(async () => {
    await mongoose.connect(`${db_url}${dbName}`);
});

  it('GET /db', async () => {
    const res = await request.get('/db');
    expect(res.status).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });


});

// afterEach(async () => {
//   await Food.deleteMany({});
// });

// afterAll(async () => {
//   await mongoose.connection.close();
// });

it('should test something',  ()=>{
   // Your code here...
    expect( 1 ).toBe( 1 );
  });


