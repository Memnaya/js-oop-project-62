class ArraySchema {
  constructor() {
    this.validations = [];
  }

  isValid(value) {
    return this.validations.every((validation) => validation(value));
  }

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
