class StringSchema {
  constructor() {
    this.validations = [];
  }

  isValid(value) {
    return this.validations.every((validation) => validation(value));
  }

  required() {
    this.validations.push((value) => (!!value));
    return this;
  }

  contains(subStr) {
    this.validations.push((value) => String(value).includes(subStr));
    return this;
  }

  minLength(len) {
    this.validations.push((value) => String(value).length >= len);
    return this;
  }
}

export default StringSchema;
