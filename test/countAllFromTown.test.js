let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function', function() {

  it('Should count and return registration number from CL', function() {
    assert.equal(countAllFromTown('CJ123, CL 123, CL 123', 'CL'), 2);
  });

  it('Should count and return registration numbers from CAW', function() {
    assert.equal(countAllFromTown('CJ123, CAW 123, CAW 123, CK125', 'CAW'), 2);
  });
});
