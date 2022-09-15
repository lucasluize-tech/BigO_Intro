function sameFrequency(int1, int2) {
  const n1 = int1.toString().split("").sort();
  const n2 = int2.toString().split("").sort();
  if (n1.length !== n2.length) return false;
  if (n1[0] !== n2[0] || n1[n1.length - 1] !== n2[n2.length - 1]) return false;
  return true;
}
module.exports = sameFrequency;
