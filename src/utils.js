// Your code here
export function isPalindrome(word) {
  // Handle invalid input type
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }

  // Handle empty string
  if (word.length === 0) {
    return false;
  }

  // Handle non-alphabetic input
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Word must contain only alphabetic characters");
  }

  const normalized = word.toLowerCase();
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
}