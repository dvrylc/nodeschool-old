module.exports = (...nums) => {
  var total = nums.reduce((total, n) => total += n);
  return total / nums.length;
};
