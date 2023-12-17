import { test, expect } from '@jest/globals';
import Validator from '../src/Validator';

const v = new Validator();
const schema = v.array();

test('Before required', () => {
  expect(schema.isValid(null)).toBe(true);
});

test('After required', () => {
  schema.required();
  expect(schema.isValid(null)).toBe(false);
  expect(schema.isValid([])).toBe(true);
  expect(schema.isValid(['hexlet'])).toBe(true);
});

test('SizeOf', () => {
  schema.sizeof(2);
  expect(schema.isValid(['hexlet'])).toBe(false);
  expect(schema.isValid(['hexlet', 'code-basics'])).toBe(true);
});
