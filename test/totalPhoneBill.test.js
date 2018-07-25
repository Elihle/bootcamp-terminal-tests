let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function', function() {

  it('Should return the total amount of 3 sms and 2 calls', function() {
      assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
    });

  it('Should return the total amount of 2 calls and 1 sms', function() {
      assert.equal(totalPhoneBill('call, sms, call'), 'R6.15');
    });
});
