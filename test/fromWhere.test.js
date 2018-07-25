let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The fromWhere function', function() {

  it('Should return registration location from Bellville', function() {
    assert.equal(fromWhere('CY'), 'Bellville');
  });

  it('Should return registration number location from Cape Town', function() {
    assert.equal(fromWhere('CA'), 'Cape Town');
  });

  it('Should return registration number location from Paarl', function() {
    assert.equal(fromWhere('CJ'), 'Paarl');
  });

  it('Should return a notifying message if the registration number is not defined', function() {
    assert.equal(fromWhere('CAW'), 'Some other place!');
  });
});
