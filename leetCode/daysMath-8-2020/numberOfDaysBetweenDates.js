/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
let d1 = new Date(date1).getTime();
let d2 = new Date(date2).getTime();

return Math.abs((d2 - d1)/24/3600/1000);
};