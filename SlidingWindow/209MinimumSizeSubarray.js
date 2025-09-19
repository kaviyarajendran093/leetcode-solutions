var minSubArrayLen = function (nums, target) {
  let sum = 0,
    init = 0,
    min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      min = Math.min(min, i - init + 1);
      sum -= nums[init];
      init += 1;
    }
  }
  return min != Infinity ? min : 0;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
