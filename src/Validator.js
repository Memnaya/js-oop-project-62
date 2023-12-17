import StringSchema from './types.js/StringSchema';
import NumberSchema from './types.js/NumberSchema';
import ArraySchema from './types.js/ArraySchema';

class Validator {
  string() {
    return new StringSchema();
  }

  number() {
    return new NumberSchema();
  }

  array() {
    return new ArraySchema();
  }
}

export default Validator;
