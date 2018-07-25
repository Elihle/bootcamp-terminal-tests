module.exports = function(regNum, location) {
  if (regNum === 'CY') {
    return 'Bellville';
  } else if (regNum === 'CJ') {
    return 'Paarl';
  } else if (regNum === 'CA') {
    return 'Cape Town';
  } else
    return 'Some other place!';
}
