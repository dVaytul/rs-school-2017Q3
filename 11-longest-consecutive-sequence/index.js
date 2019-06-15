module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if (array.length === 0) return 0;
  if (array.length === 1) return 1;

  var obj = {};
  var longestStreak = 1,
    currentStreak = 1,
    prevElem;

  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = array[i];
  }

  for (let key in obj) {
    if(!prevElem) {
      prevElem = obj[key];
      break;
    }
  }

  for (let key in obj) {
    if (obj[key] === prevElem) {
      continue;
    }

    if (obj[key] - prevElem === 1) {
      currentStreak++;
      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
    } else {
      currentStreak = 1;
    }

    prevElem = obj[key];
  }

  return longestStreak;
};