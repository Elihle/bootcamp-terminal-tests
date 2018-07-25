let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('The countAllPaarl function', function() {

  it('Should return the number registration numbers from Paarl', function() {
    assert.equal(countAllPaarl('CJ 123, CA 123, CJ 123'), 2);
  });

  it('Should return 0 as there are no registration numbers from Paarl', function() {
    assert.equal(countAllPaarl('CA 333, CAW 777'), 0);
  });
});
