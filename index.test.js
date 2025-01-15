// index.test.js
import request from 'supertest';
import { app, startServer, closeServer } from './index.js';

describe('GET /', () => {
  beforeAll(async () => {
    await startServer();
  });

  afterAll(async () => {
    await closeServer();
  });

  it('should return a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello, DevOps World!');
  });
});