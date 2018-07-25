let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('The findItemsOver20 function', function() {
  it('Should return only return items that are over the threshold 20', function() {
  assert.deepEqual(findItemsOver20 ([{name : 'apples', qty : 10},
   {name : 'pears', qty : 37}]), [{'name' : 'pears', 'qty' : 37}]);
   });

   it('Should return banana and apples they are above 20', function() {
   assert.deepEqual(findItemsOver20 ([{name : 'apples', qty : 10},
    {name : 'banana', qty : 37}, {name : 'apples', qty : 37}]), [{'name' : 'banana', 'qty' : 37}, {name : 'apples', qty : 37}]);
    });

   it('Should not return any item because there are no items above 20', function() {
     assert.deepEqual(findItemsOver20 ([{name : 'apples', qty : 16},
    {name : 'pears', qty : 10}]), []);
});
});
