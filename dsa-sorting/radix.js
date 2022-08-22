const getDigit = (num, idx) => {
  const strNum = String(num);
  let end = strNum.length - 1;
  const foundNum = strNum[end - idx];

  return foundNum === undefined ? 0 : parseInt(foundNum);
};

const digitCount = (num) => {
  let strNum = String(num);
  return strNum.length;
};

const mostDigits = (arr) => {
  if (arr.length === 0) return 0;
  let largest = "0";
  arr.forEach((num) => {
    const strNum = String(num);
    if (strNum.length > largest.length) largest = strNum;
  });
  return largest.length;
};

function radixSort(arr) {
  let maxLength = mostDigits(arr);

  for (let i = 0; i < maxLength; i++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      let num = getDigit(arr[j], i);
      if (num !== undefined) buckets[num].push(arr[j]);
    }
    arr = buckets.flat();
  }
  return arr;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };
