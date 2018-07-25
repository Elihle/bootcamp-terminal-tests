let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('The countRegNumber function', function() {

  it('Should count three registration numbers', function() {
    assert.equal(countRegNumber('CA 182736, CY 523519, CJ 812328'), 3);
  });

  it('Should count two registration number', function() {
    assert.equal(countRegNumber('CA 182736, CAW 14453'), 2);
  });
});
