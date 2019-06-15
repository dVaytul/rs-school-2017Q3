module.exports = function makeExchange(currency) {
  if (!currency || currency <= 0) {
    return {};
  } else if (currency > 10000) {
    return { error: "You are rich, my friend! We don't have so much coins for exchange"};
  } else {
    var coins = {
      "H" : 50,
      "Q" : 25,
      "D" : 10,
      "N" : 5,
      "P" : 1
    };
    var coinsToGiving = {
      "H" : 0,
      "Q" : 0,
      "D" : 0,
      "N" : 0,
      "P" : 0
    };

    for (let key in coins) {
      coinsToGiving[key] = ~~(currency / coins[key]);
      currency = currency % coins[key];
      if (currency === 0) {
        break;
      }
    }

    // currency === 0
    for (let key in coinsToGiving) {
      if (coinsToGiving[key] === 0) {
        delete coinsToGiving[key];
      }
    }

    return coinsToGiving;
  }
};
