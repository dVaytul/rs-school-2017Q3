class Sorter {
  constructor() {
    // your implementation
    this.store = [];
    this.comparator = function (a,b) { return a - b; }
  }

  add(element) {
    // your implementation
    this.store.push(element);
  }

  at(index) {
    // your implementation
    return this.store[index];
  }

  get length() {
    // your implementation
    return this.store.length;
  }

  toArray() {
    // your implementation
    return this.store;
  }

  sort(indices) {
    // your implementation
    if (indices.length < 2) {
      return this.store;
    } else {
      var arr = [];
      indices.sort(function(a,b) {
        return a - b;
      });
      for (var i = 0; i < indices.length; i++) {
        arr.push(this.store[indices[i]]);
      }
      arr.sort( this.comparator );
      for (var i = 0; i < indices.length; i++) {
        this.store[indices[i]] = arr[i];
      }
      return this.store;
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
    //return this.store.sort(compareFunction);

  }
}

module.exports = Sorter;