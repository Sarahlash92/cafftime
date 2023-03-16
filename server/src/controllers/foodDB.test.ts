// @ts-nocheck

import request from "supertest";

const baseUrl = 'http://localhost:4000/';

describe('FoodDB endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
			.get('db');
		expect(response.statusCode).toBe(200);
	});

  it('GET /db should return an array', async () => {
        const res = await request(baseUrl)
        .get('/db');
        expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /bd should return status 404', async () => {
        const res = await request(server).get('/bd');
        expect(res.statusCode).toEqual(404);
  });

});