const max = function (numbers) {
  let m = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (m < numbers[i]) {
      m = numbers[i];
    }
  }
  return m;
}

const mi = function (numbers) {
  let n = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (n > numbers[i]) {
      n = numbers[i];
    }
  }
  return n;
}

const range = function (numbers) {
  let a = numbers[0];
  let b = numbers[0];
  for (let j = 1; j < numbers.length; j++) {
    if (a > numbers[j]) {
      a = numbers[j];
    }
    if (b < numbers[j]) {
      b = numbers[j];
    }
  }
  return b - a;
}

const mean = function (numbers) {
  let sum = numbers[0];
  for (let c = 1; c < numbers.length; c++) {
    sum += numbers[c];
  }
  return Math.round(sum / numbers.length);
}

const median = function (numbers) {
  let sorted = numbers.sort();
  let answer = "";
  if (sorted.length % 2 === 1) {
    answer = sorted[Math.floor(sorted.length / 2)];
  } else {
    answer = (sorted[sorted.length / 2] + sorted[sorted.length / 2 - 1]) / 2;
  }
  return answer;
}

const sort = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    let min = numbers[i];
    for (let u = i + 1; u < numbers.length; u++) {
      if (numbers[u] < min) {
        min = numbers[u];
        index = u;
      }
    }

    if (index !== i) {
      [numbers[index], numbers[i]] = [numbers[i], numbers[index]];
    }
  }
  return numbers;
}

const toGrade = (score) => score < 60 ? "F" : score < 70 ? "D" : score < 80 ? "C" : score < 90 ? "B" : "A";

const mode = function (grades) {

  /*let empty = []
  let i = 0
  let max = 0
  let a = toGrade()
  
  if(i<a.length){
  
     if (a[i]==a[i+1]){
         empty = a[i] 
     i += 1
      }else{
        i +=1
        }
  
   }
   return empty;*/
  let modeGrade = "";
  let maxCount = 0;
  let cCount = 0;
  let cElement = "";
  for (let p = 1; p < grades.length; p++) {
    if (grades[p - 1] !== grades[p]) {
     if (cCount > maxCount) {
      maxCount = cCount;
      cCount = 0;
      modeGrade = cElement;
    }
      cCount = 0
      cElement = grades[p]
    }
      cCount++;
      
      }
  return cCount > maxCount ? cElement : modeGrade;
}

const modeO = function (grades) {
let counter = {};
for(let i = 0; i < grades.length; i++){
if(grades[i] in counter){
counter[grades[i]]++
    } else {
    counter[grades[i]] = 1;
    }
  }
  let maxCount = 0;
  let mode = ""
  for(c in counter){
  if(maxCount < counter[c]){
  maxCount = counter[c];
  mode = c;
    }
  }
  return mode;
}