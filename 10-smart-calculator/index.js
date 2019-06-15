class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.value = '' + initialValue;
  }

  add(number) {
    // your implementation
    this.value += " + " + number;
    return this;
  }

  subtract(number) {
    // your implementation
    this.value += " - " + number;
    return this;
  }

  multiply(number) {
    // your implementation
    this.value += " * " + number;
    return this;
  }

  devide(number) {
    // your implementation
    this.value += " / " + number;
    return this;
  }

  pow(number) {
    // your implementation
    this.value += ' ** ' + number;
    return this;
  }

  toString() {
    return eval(this.value);
  }
}

module.exports = SmartCalculator;
