let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', function() {

  it('Should return true because registration number is from Bellville', function() {
    assert.equal(isFromBellville('CY 123'), true);
  });

  it('Should return return false because registration number is not from Bellville', function() {
    assert.equal(isFromBellville('CJ 123'), false);
  });
});
