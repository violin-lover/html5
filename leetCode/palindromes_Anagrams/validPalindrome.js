/*
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True

Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.

Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
 */

/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function(s) {
for (let l = 0, r = s.length-1, removed = 1; l < r;) {
    
    if (s[l] == s[r]) {  //matching
      l++;
      r--;
    }
      else if (s[l+1] === s[r] && s[l+2] === s[r-1] && removed > 0) {
       l++;
       removed--;
     }  else if (s[l] === s[r-1] && removed > 0){
        r--;
        removed--;
     } else {
         return false;
     }
    }
   return true;
}