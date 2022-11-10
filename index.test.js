const { multiply, isPalindrome } = require(".")

describe('multiply function', () => {
    test('it should multiply two numbers', () => {
        expect(multiply(2, 5)).toBe(10);
    })
    test('it should throw an error if one of the inputs is not a number', () => {
        expect(() => multiply(2, 'im a number')).toThrow();
    })
})

describe('isAPalindrome', () => {
    test('it should throw an error if the argument is not a string', () => {
        expect(() => isPalindrome(2022)).toThrow();
    })
    test('it should return true if the string is a palindrome', () => {
        expect(isPalindrome('kayak')).toBe(true);
    })
    test('it should return false if the string is not a palindrome', () => {
        expect(isPalindrome('stadium')).toBe(false);
    })

})
