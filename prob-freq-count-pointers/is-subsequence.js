function isSubsequence(word, msg) {
  // make arrays
  word = word.split("");
  msg = msg.split("");
  let wordObj = {};
  let msgObj = {};
  let count = 1;
  // make an object that keeps an order priority ['h','e','l','l','o'] => {h:1,e:2,l:3,o:4}
  msg.forEach((l) => {
    msgObj[l] = count;
    count++;
  });
  count = 1;

  word.forEach((l) => {
    wordObj[l] = count;
    count++;
  });
  // compare priorities and if letter is included in object

  for (let letter in wordObj) {
    if (msgObj[letter] < wordObj[letter]) return false;
    if (msgObj[letter] === undefined || null) return false;
  }
  return true;
}

module.exports = isSubsequence;
