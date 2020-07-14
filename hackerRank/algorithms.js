function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    let sum = 0;
    for(let i = 0; i < ar.length; i++){
    sum += ar[i]
    }
    return sum;
}

function compareTriplets(a, b) {
let points = [];
let score1 = 0;
let score2 = 0;
for(let i = 0; i < 3; i++){
if(a[i] > b[i]){score1++}
if(a[i] < b[i]){score2++}
}
points.push(score1,score2);
return points;
}

function aVeryBigSum(ar) {
let sum = 0;
for(let i = 0; i < ar.length; i++){
sum += ar[i]
    }
return sum;
}