module.exports = function(mostProfitable) {
  var salesData = {};
  var data = '';
  var highestSales = 0;
  for (var i = 0; i < mostProfitable.length; i++) {
    var store = mostProfitable[i].department;

    if (salesData[store] === undefined) {
      salesData[store] = 0;
    }
    salesData[store] += mostProfitable[i].sales;
  }
  for (var j in salesData) {
    if (salesData[j] > highestSales) {
      highestSales = salesData[j];
      data = j;
    }
  }
  return data;
}
