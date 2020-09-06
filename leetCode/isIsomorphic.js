/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
if(s.length !== t.length){
return false;
}
    
let hashA = {};
let hashB = {};
let resultA = "";
let resultB = "";
    
    for(let i = 0; i < s.length; i++){
    hashA[s[i]] = t[i]
    hashB[t[i]] = s[i]
    }
    
    return s.split("").map(c => hashA[c]).join("") === t && 
    t.split("").map(c => hashB[c]).join("") === s
    
    /*for(let i = 0; i < s.length; i++){
    resultA+= hashA[s[i]]
    resultB+= hashB[t[i]]
    }*/
return resultA === t && resultB === s;
};