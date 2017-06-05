import http from 'http';
import assert from 'assert';

import '../index.js';

describe('Testing Node Server', () => {
  it('should return 200', done => {
    http.get('http://localhost:9000', res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
