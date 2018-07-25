let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('The findItemsOver20 function', function() {
it('should print items above the threshold 30' , function(){
assert.deepEqual(findItemsOver ([{name : 'apples', qty : 10},
{name : 'pears', qty : 58}], 30), [{'name' : 'pears', 'qty' : 58}])
});

it('should print items over the threshold of 10' , function(){
assert.deepEqual(findItemsOver ([{name : 'apples', qty : 11},
{name : 'pears', qty : 8}], 10), [{'name' : 'apples', 'qty' : 11}])
});

it('should print items over the threshold of 20' , function(){
assert.deepEqual(findItemsOver ([{name : 'apples', qty : 10},
{name : 'pears', qty : 37}], 20), [{'name' : 'pears', 'qty' : 37}])
});
});
