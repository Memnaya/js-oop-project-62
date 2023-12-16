import StringSchema from './types.js/StringSchema';

class Validator {
  string() {
    return new StringSchema();
  }
}

export default Validator;
