function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      total += arr[i];
    } else {
      continue;
    }
  }
  return total;
}

const arr = [0.1, 20, 30, 40];
const answers = sum(arr);
console.log(answers);
