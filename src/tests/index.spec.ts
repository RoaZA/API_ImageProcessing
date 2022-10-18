import app from '../../app';
import supertest from 'supertest';
const fs = require('fs').promises;
import path from 'path';
import routes from '../routes';

describe('Testing the main page endpoint', function () {
  it('returns 200', async function () {
    // status code should be 200 `OK`
    await supertest(app).get('/').expect(200);
  });
});
