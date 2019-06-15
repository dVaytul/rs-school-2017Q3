module.exports = function getZerosCount(number, base) {
  /* V_base_(number) = SUM of ( number! / base^k )
  *  1) разложить base на простые множители
  *  2) найти для каждого множителя количество 0 через getPowerOfMultiplier(number, множитель)
  *  3) посчитать повторяющиеся степени множителей, разделить на их число
  *  3) найти минимальную степень множителя*/

  function getPowerOfMultiplier(number, simpleMultiplier) {
    var sum = 0;
    while (number) {
      number = ~~(number / simpleMultiplier);
      sum = sum + number;
    }
    return sum;
  }

  var arrOfMultipliers = [];
  var arrOfPowers = [];
  var numOfDuplicatePowers = 1;

  var i = 2;

  // 1) находим простые множители
  while (i <= base) {
    if (base % i === 0) {
      base = base / i;
      arrOfMultipliers.push(i);
    } else {
      i += 1;
    }
  }

  // 2) находим степени множителей
  for (i = 0; i < arrOfMultipliers.length; i++) {
    arrOfPowers.push(getPowerOfMultiplier(number, arrOfMultipliers[i]));
  }

  // 3) считаем дубликаты степеней, уменьшаем один дубликат
  if( arrOfPowers.length > 1) {
    for (i = 0; i < arrOfPowers.length - 1; i++) {
      if (arrOfPowers[i] === arrOfPowers[i+1]) {
        numOfDuplicatePowers++;
      } else if (numOfDuplicatePowers !== 1) {
        arrOfPowers[i] = ~~(arrOfPowers[i] / numOfDuplicatePowers);
        numOfDuplicatePowers = 1;
      }

      // для последнего элемента в массиве
      if( i+1 === arrOfPowers.length-1) {
        arrOfPowers[i] = ~~(arrOfPowers[i] / numOfDuplicatePowers);
        numOfDuplicatePowers = 1;
      }
    }
  }

  // 4) находим наименьшую степень
  arrOfPowers.sort(function(a, b) {
    return a - b;
  });

  return arrOfPowers[0];
};