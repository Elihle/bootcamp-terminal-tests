module.exports = function(year) {
  var d = new Date();
  var fullYear = d.getFullYear();
  var answer = fullYear - year;
  return answer;
}
