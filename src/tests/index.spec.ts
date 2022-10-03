// where Test for main Index file is written
import app from '../../app';
import supertest from 'supertest';
import myFunc from '../index';

describe('Testing the home page endpoint', function() {

  it('returns 200', async function() {
    // status code should be 200 `OK`
    await supertest(app)
      .get('/')
      .expect(200);
  });
  it('expect myFunc(5) to equal 25', () => {
    expect(myFunc(5)).toEqual(25);
  });

});