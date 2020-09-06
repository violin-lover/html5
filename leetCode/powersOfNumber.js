//power of 3

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
for(let i = 0; i < Math.sqrt(n); i++){
    
if(3**i == n){return true;}
    }
    return false;
};

//-------------------------------------------------------------------

//power of 4

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
for(let i = 0; i < Math.sqrt(num); i++){
    
if(4**i == num){
return true;
        }
    }
    return false;
};