// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
  // should return an object create from the keys and values
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    // if not enough values, the rest must be null val
    obj[keys[i]] = vals[i] || null;
  }
  return obj;
}

module.exports = twoArrayObject;
