module.exports = function(totalData) {
  var data = totalData.split(', ');
  var total = 0;
  for (var i = 0; i < data.length; i++) {

    if (data[i].startsWith('c')) {
      total = total + 2.75;
    } else if (data[i].startsWith('s')) {
      total = total + 0.65;

    }
  }

  return 'R' + total.toFixed(2);
}
