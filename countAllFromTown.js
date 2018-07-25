module.exports = function(regNum, location) {
  var numReg = regNum.split(', ');
  var town = [];
  for (var i=0; i<numReg.length;i++){
    if (numReg[i].startsWith(location)){
       town.push(numReg[i]);
    }
  }
  return town.length;
}
