import BaseValidator from '../BaseValidation';

class ArraySchema extends BaseValidator {
  required() {
    this.validations.push((value) => Array.isArray(value));
    return this;
  }

  sizeof(size) {
    this.validations.push((value) => value.length === size);
    return this;
  }
}

export default ArraySchema;
