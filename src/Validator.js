import NumberSchema from './types/NumberSchema';
import StringSchema from './types/StringSchema';
import ArraySchema from './types/ArraySchema';
import ObjectSchema from './types/ObjectSchema';

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

  object() {
    return new ObjectSchema();
  }
}

export default Validator;
