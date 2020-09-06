/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
let [year,month,day] = date.split("-").map(Number)
let days = [0,31,28,31,30,31,30,31,31,30,31,30,31]

if(isLeapYear(year)){
days[2] = 29
}
    
let dayBeforeMonth = 0;
    
for(let i = 1; i < month; i++){
dayBeforeMonth += days[i]
    }
    return dayBeforeMonth + day;
};

var isLeapYear = function(year) {
    if (year % 4 !== 0) {return false;}
    else if (year % 100 !== 0) {return true;}
    else if (year % 400 !== 0) {return false;}
    else {return true;}    
}