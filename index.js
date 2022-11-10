// multiply two numbers
function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') throw new Error();
    return a * b;
}


// checks if a word is a palindrome 
function isPalindrome(word) {
    if (typeof word !== 'string') throw new Error();
    let start = 0;
    let end = word.length - 1;
    while (start < end) {
        if (word[start] !== word[end]) return false;
        start++;
        end--;
    }
    return true;
}

module.exports = { multiply, isPalindrome }
