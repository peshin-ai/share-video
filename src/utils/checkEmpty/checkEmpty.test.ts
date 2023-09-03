import { checkEmpty } from '@utils/checkEmpty/checkEmpty.util';
import {
  describe,
  expect,
  it,
} from 'vitest';

describe("checkEmpty function", () => {
  it("should return true for undefined", () => {
    expect(checkEmpty(undefined)).toBe(true);
  });

  it("should return true for null", () => {
    expect(checkEmpty(null)).toBe(true);
  });

  it("should return true for an empty string", () => {
    expect(checkEmpty("")).toBe(true);
  });

  it("should return true for an empty array", () => {
    expect(checkEmpty([])).toBe(true);
  });

  it("should return true for an empty object", () => {
    expect(checkEmpty({})).toBe(true);
  });

  it("should return false for a non-empty string", () => {
    expect(checkEmpty("Hello")).toBe(false);
  });

  it("should return false for a non-empty array", () => {
    expect(checkEmpty([1, 2, 3])).toBe(false);
  });

  it("should return false for a non-empty object", () => {
    expect(checkEmpty({ key: "value" })).toBe(false);
  });

  it("should return false for a number", () => {
    expect(checkEmpty(42)).toBe(false);
  });

  it("should return false for a boolean", () => {
    expect(checkEmpty(true)).toBe(false);
  });
});
