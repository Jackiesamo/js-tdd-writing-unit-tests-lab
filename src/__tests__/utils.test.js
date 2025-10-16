// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a palindrome word like 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome word like 'car'", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("returns true for words with mixed case like 'RaceCar'", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error if the input contains non-alphabetic characters", () => {
    expect(() => isPalindrome("r@cecar")).toThrow("Word must contain only alphabetic characters");
  });

  it("throws an error if input is not a string", () => {
    expect(() => isPalindrome(12321)).toThrow("Input must be a string");
  });
});
