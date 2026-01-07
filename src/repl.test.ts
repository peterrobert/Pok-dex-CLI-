import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },

])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
     
    expect(cleanInput(input)).toHaveLength(expected.length);
    expect(input).toBeTypeOf("string");

    expected.forEach((item, index) => {
      expect(cleanInput(input)[index]).toBe(item);
    });
    expected.forEach((item, index) => {
      expect(cleanInput(input)[index]).toBeTypeOf("string");
    });

  });
});