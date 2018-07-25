let assert = require("assert");
let mostProfitableDepartment = require("../mostProfitableDepartment");

describe('The mostProfitableDepartment function', function() {
  it('Should print the department with highest sales which is outdoor' , function(){
    assert.deepEqual(mostProfitableDepartment ([{department : 'hardware', sales : 200, day : 'Friday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'}]), 'outdoor');
  });

    it('Should print the department with the most sales which is hardware' , function(){
      assert.deepEqual(mostProfitableDepartment ([{department : 'hardware', sales : 869, day : 'Friday'},
      {department : 'outdoor', sales : 365, day : 'Tuesday'}]), 'hardware');
    });
});
