// @ts-nocheck


require('dotenv').config();
const dbName = process.env.DB_TEST;
const db_url = process.env.DB_URL;
const Koa = require('koa');
import router from '../router';
const bodyParser = require('koa-bodyparser');
// const superTest = require('supertest');
const request = require('supertest');

const Food = require('./../models/food');
const mongoose = require('mongoose');
const { describe, afterEach, default: test } = require('node:test');



describe('Tests', () => {
  const app = new Koa();
  app.use(bodyParser())
    .use(router.routes());
  const server = app.listen();

  beforeAll(async () => {
    await mongoose.connect(`${db_url}${dbName}`);
  });

  it('GET /db should return an array', async () => {
    const res = await request(server).get('/db');
    expect(res.status).toEqual(200);
  });

  it('GET /db should return an array', async () => {
    const res = await request(server).get('/db');
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /bd should return status 404', async () => {
    const res = await request(server).get('/bd');
    expect(res.statusCode).toEqual(404);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });

});

