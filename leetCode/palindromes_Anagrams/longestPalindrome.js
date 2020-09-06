/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
Input: s = "a"
Output: 1

Example 3:
Input: s = "bb"
Output: 2
 

Constraints:
1 <= s.length <= 2000
s consits of lower-case and/or upper-case English letters only.
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
debugger;

let letters = new Map()
let count = 0;

for(const ch of s){
    if(!letters.has(ch)){
        letters.set(ch,1)
        }
    
    if(letters.has(ch)){
    letters.set(ch,letters.get(ch)+1)
    //continue
        
        if((letters.get(ch)+1)%2 == 0){
        count += 2;
            }
        }
    }
    return s.length > count ? count + 1 : count;
};

//One of the testcases:
//"civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesay"