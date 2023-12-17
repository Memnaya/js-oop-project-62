import { test, expect } from '@jest/globals';
import Validator from '../src/Validator';

const v = new Validator();
const schema = v.string();

test('Before required', () => {
  expect(schema.isValid('')).toBe(true);
  expect(schema.isValid(null)).toBe(true);
  expect(schema.isValid(undefined)).toBe(true);
});

test('After required', () => {
  schema.required();
  expect(schema.isValid('what does the fox say')).toBe(true);
  expect(schema.isValid('hexlet')).toBe(true);
  expect(schema.isValid('')).toBe(false);
  expect(schema.isValid(null)).toBe(false);
});

test('Is contains', () => {
  expect(schema.contains('what').isValid('what does the fox say')).toBe(true);
  expect(schema.contains('whatthe').isValid('what does the fox say')).toBe(false);
});

test('IsValid After contains', () => {
  expect(schema.isValid('what does the fox say')).toBe(false);
});

test('MinLength', () => {
  expect(schema.minLength(3).isValid('look at this duuude')).toBe(false);
  expect(schema.minLength(5).isValid('duuude')).toBe(false);
});
