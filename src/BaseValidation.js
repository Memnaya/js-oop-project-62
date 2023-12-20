class BaseValidator {
  constructor() {
    this.validations = [];
  }

  isValid(value) {
    return this.validations.every((validation) => validation(value));
  }
}

export default BaseValidator;
