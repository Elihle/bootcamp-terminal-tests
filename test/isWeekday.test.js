let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The isWeekDay function', function() {

  it('Should return true because Monday is a weekday', function() {
    assert.equal(isWeekday('Monday'), true);
  });

  it('Should return false because Sunday is a weekend', function() {
    assert.equal(isWeekday('Sunday'), false);
  });

  it('Should return false because Saturday is a weekend', function() {
    assert.equal(isWeekday('Saturday'), false);
  });
});
