module.exports = function check(str, bracketsConfig) {
  if(!str || !bracketsConfig) {
    return;
  }

  var elemFromBracketConfig = [];
  var strWasReplaced = 0;

  for (var i = 0; i < bracketsConfig.length; i++) {
    elemFromBracketConfig = bracketsConfig[i].join('');

    while (true) {
      if (str.indexOf(elemFromBracketConfig) === -1) break;
      str = str.replace(elemFromBracketConfig, '');
      if( !strWasReplaced) {
        strWasReplaced = 1;
      }
    }

    //   Is it end of bracketsConfig?  AND str was replaced    AND str is not empty yet
    if( (i+1) === bracketsConfig.length && strWasReplaced === 1 && str.length ) {
      i = -1;
      strWasReplaced = 0;
    }
  }

  return !str.length;// ? false : true;
};
