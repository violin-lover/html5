/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
let cleanWords = s.toLowerCase().replace(/[\W\_\-/]/g,"") 

if(cleanWords.split("").reverse().join("") == cleanWords){
return true;
  } return false;
};

//-----------------------------------------------------------------