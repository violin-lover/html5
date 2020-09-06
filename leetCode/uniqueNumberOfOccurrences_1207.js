/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {    
    arr.sort((a,b)=>a-b);
    let ar = [];
    let count = 1;
    for(let i = 0;i < arr.length; i++){
        if(arr[i] == arr[i+1]) {
            count++;
        } else {
            ar.push(count);
            count = 1;
        }
    }
    return new Set(ar).size == ar.length;
};