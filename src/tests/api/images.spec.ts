// where Test for main Index file is written
import app from '../../../app';
import supertest from 'supertest';

describe('Testing the routing page endpoint', function () {
  it('returns 200 for api/ endpoint', async function() {
    await supertest(app).get('/api').expect(200);});

  it('returns 200 for api/images/ endpoint', async function() {
    await supertest(app).get('/api/images').expect(200);
  });
  it('returns 200 for api/images? endpoint',  async function() {
    await supertest(app).get('/api/images?filename=Lamp&width=900&height=660').expect(200);
  });
});
