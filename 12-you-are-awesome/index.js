// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propName) => {
  return propName;
};

const createNotEnumerableProperty = (propName) => {
  Object.defineProperty(Object.prototype, propName, {
    get: () => x,
    set: v => x = v
  });

  return propName;
};

const createProtoMagicObject = () => {
  return Function; // Function.proto.proto === Object
};

let counter = 0;
const incrementor = () => {
  counter++;

  const f = () => {
    counter++;
    return f;
  };
  f.valueOf = () => counter;

  return f;
};

let asyncCounter = 0;
const asyncIncrementor = () => {
  asyncCounter++;
  const f = () => {
    asyncCounter++;
    return f;
  };
  f.valueOf = () => asyncCounter;

  return f;
};

const createIncrementer = () => {
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(param), 1000);
    setTimeout(() => reject(new Error("game over")), 2000);
  });
};

const getDeepPropertiesCount = (obj) => {
  let letsCount = (obj) => {
    for (let key in obj) {
      count++;  //OR if (obj.hasOwnProperty(key)) count++;
      if (typeof obj[key] === 'object') {
        letsCount(obj[key]);
      }
    }
  };

  let count = 0;
  letsCount(obj);

  return count;
};

const createSerializedObject = () => {
  //return new Object(true);
  return new Object("{name: 'Alan', age: 42}");
};

const toBuffer = () => {};

const sortByProto = (arr) => {
  return arr.sort((a,b) => (a.isPrototypeOf(b) ? 1 : -1));
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;