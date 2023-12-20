import BaseValidator from '../BaseValidation';

class NumberSchema extends BaseValidator {
  required() {
    this.validations.push((value) => (typeof (value) === 'number'));
    return this;
  }

  positive() {
    this.validations.push((value) => Number(value) > 0);
    return this;
  }

  range(min, max) {
    this.validations.push((value) => value >= min && value <= max);
  }
}

export default NumberSchema;
