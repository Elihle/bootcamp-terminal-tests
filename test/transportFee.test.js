let assert = require("assert");
let transportFee = require("../transportFee");

describe('The transportFee function', function() {

  it('Should return an amount of R10 because the shift is during the afternoon', function() {
      assert.equal(transportFee('afternoon'), 'R10');
    });

  it('Should return an amount of R20 as the shift is in the Morining', function() {
      assert.equal(transportFee('morning'), 'R20');
    });
});
