  let assert = require("assert");
  let yearsAgo = require("../yearsAgo");

  describe('The yearsAgo function', function() {

    it('Should how mant years ago is the year', function() {
      assert.equal(yearsAgo('1998'), '20');
    });

    it('Should return a negative number as the year is still yet to come', function() {
      assert.equal(yearsAgo('2091'), '-73');
    });
  });
