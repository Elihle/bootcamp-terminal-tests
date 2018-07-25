module.exports = function(regNumbers){
    var nums = regNumbers.split(', ');
    var paarl = [];
    for (var i=0; i<nums.length;i++){
      if (nums[i].startsWith('CJ')){
         paarl.push(nums[i]);
      }
    }
    return paarl.length;
}
