// add whatever parameters you deem necessary
// O(n), n = M + N

function constructNote(msg, letters) {
  // return true if the message can be built with the letters given
  const msgs = [...msg];
  const allLetters = [...letters];
  // What I need is to match the frequency of both strings.
  let freq_msg = {};
  let freq_letters = {};

  if (allLetters.length === 0) return false;
  if (msgs.length === 0) return true;

  msgs.forEach((letter) => (freq_msg[letter] = freq_msg[letter] + 1 || 1));
  allLetters.forEach(
    (letter) => (freq_letters[letter] = freq_letters[letter] + 1 || 1)
  );

  for (let letter in freq_msg) {
    if (freq_msg[letter] > freq_letters[letter]) return false;
  }
  // if freq_msg = freq_letters than true;
  return true;
}

module.exports = constructNote;
