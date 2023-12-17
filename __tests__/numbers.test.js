import { test, expect } from '@jest/globals';
import Validator from '../src/Validator';

const v = new Validator();
const schema = v.number();

test('Before required', () => {
  expect(schema.isValid(null)).toBe(true);
});

test('After required', () => {
  schema.required();
  expect(schema.isValid(null)).toBe(false);
  expect(schema.isValid(7)).toBe(true);
});

test('Is positive', () => {
  expect(schema.positive().isValid(10)).toBe(true);
});

test('Range', () => {
  expect(schema.range(-5, 5));
});

test('Additional checks', () => {
  expect(schema.isValid(-3)).toBe(false);
  expect(schema.isValid(5)).toBe(true);
});
