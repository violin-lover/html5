/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
s = s.split("").sort().join("")
t = t.split("").sort().join("")
    
for(let i = 0; i < s.length; i++){

    if(s[i] !== t[i]){
    return t[i]
        }
    }   
    return t[t.length - 1]
};