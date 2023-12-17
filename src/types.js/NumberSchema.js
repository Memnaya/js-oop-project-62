class NumberSchema {
  constructor() {
    this.validations = [];
  }

  isValid(value) {
    return this.validations.every((validation) => validation(value));
  }

  required() {
    this.validations.push((value) => (typeof (value) === 'number'));
    return this;
  }

  positive() {
    this.validations.push((value) => value > 0);
    return this;
  }

  range(min, max) {
    this.validations.push((value) => value >= min && value <= max);
  }
}

export default NumberSchema;
