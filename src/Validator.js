import StringSchema from './types.js/StringSchema';
import NumberSchema from './types.js/NumberSchema';

class Validator {
  string() {
    return new StringSchema();
  }

  number() {
    return new NumberSchema();
  }
}

export default Validator;
