/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

/*
y = ax + b;
b = y - ax
*/

var checkStraightLine = function(coordinates) {
const [x0, y0] = coordinates[0];
const [x1, y1] = coordinates[1];
const slope =  (x1 === x0)?Infinity:(y1 - y0) / (x1 - x0);

 for(let i = 2; i < coordinates.length; i++ ){
     debugger
   if(coordinates[i][0] === x0 && slope == Infinity) continue;
   if(slope != (coordinates[i][1] - y0)/(coordinates[i][0] - x0)){
      return false;
   }
 }
 return true;
};