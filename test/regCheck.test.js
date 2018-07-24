let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function', function() {

  it('returns true because registration number is from Gauteng', function() {
    assert.equal(regCheck('GP 123', 'GP'), true);
  });

  it('returns false because registration number is not from Gauteng', function() {
    assert.equal(regCheck('CA 123', 'CA'), true);
  });
});
