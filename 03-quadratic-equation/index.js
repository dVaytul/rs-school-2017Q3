module.exports = function solveEquation(equation) {
  // your implementation
  function isMinus (minusPos) {
    return (minusPos === '-') ?  -1:  1;
  }

  var a, b, c, d, x1, x2;
  var equationArray = equation.split(' ');

  a = +equationArray[0];
  b = +equationArray[4] * isMinus(equationArray[3]);
  c = +equationArray[8] * isMinus(equationArray[7]);

  d = b * b - 4 * a * c;
  x1 = (-b + Math.sqrt(d)) / (2 * a);
  x2 = (-b - Math.sqrt(d)) / (2 * a);

  return [Math.round(x1), Math.round(x2)].sort( function(a,b){return a-b;});
};
