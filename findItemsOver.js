module.exports = function(items, threshold) {
  var list = [];
  for (var i = 0; i < items.length; i++) {
    var listItem = items[i];
    if (listItem.qty > threshold) {
      list.push(listItem);
    }
  }
  return list;
}
