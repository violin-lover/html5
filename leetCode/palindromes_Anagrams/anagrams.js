/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
s = s.replace(/\W/g,"")
t = t.replace(/\W/g,"")
s = s.split("").sort().join("")
t = t.split("").sort().join("")
    
    if(s == t){
    return true;
    } return false;
};

//------------------------------------------------------------------
const groupAnagrams = function(strs) {
   let anaMap = {};
   for (const s of strs){
       let sKey = s.split('').sort().join('');
       if (anaMap[sKey]){
           anaMap[sKey].push(s);
       }
       else{
           anaMap[sKey] = [s];
       }
   }
   return Object.values(anaMap);
};

