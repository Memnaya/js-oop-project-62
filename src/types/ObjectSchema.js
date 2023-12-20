import BaseValidator from '../BaseValidation';

class ObjectSchema extends BaseValidator {
  shape(obj) {
    this.schema = obj;
    return this;
  }

  isValid(data) {
    return Object.entries(this.schema)
      .every(([key, validator]) => validator.isValid(data[key]));
  }
}

export default ObjectSchema;
