module.exports = function getZerosCount(number) {
  var sum = 0;
  while (number) {
    number = ~~(number/5);
    sum = sum + number;
  }
  return sum;
};
