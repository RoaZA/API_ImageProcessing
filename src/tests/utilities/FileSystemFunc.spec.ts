const fs = require('fs').promises;
import path from 'path';
describe('Testing the existing of image', function () {
  it('Images with the provided properties should be found',  function() {
    expect(fs.access(path.join(__dirname, '../../images/thumbnail/Lamp-900-660.jpg'))).toBeTruthy();
  });
});