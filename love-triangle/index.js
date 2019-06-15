/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var answer = [];
  var nFirst, kFirst, kSecond, kThird;

  for (var i=0; i < preferences.length; i++ ) {
    nFirst = i + 1;

    kFirst = preferences[nFirst - 1];
    kSecond = preferences[kFirst - 1];
    kThird = preferences[kSecond - 1];

    if (kThird === i+1) {
      answer.push(nFirst);
    }
  }

  return ~~(answer.length/3);
};
