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
