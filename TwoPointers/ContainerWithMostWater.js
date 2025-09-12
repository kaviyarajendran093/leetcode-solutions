var maxArea = function (height) {
  let n = height.length,
    left = 0,
    right = n,
    h = 0,
    b = 0,
    max = 0;
  if (n <= 1) return 0;
  while (left < right) {
    if (height[left] < height[right]) {
      h = height[left];
      b = right - left;
      left++;
    } else {
      h = height[right];
      b = right - left;
      right--;
    }
    let result = h * b;
    if (max < result) {
      max = result;
    }
  }
  return max;
};

console.log(maxArea([1, 1]));

var maxAreaOptimized = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let currentVolume = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, currentVolume);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
console.log(maxAreaOptimized([1, 8, 6, 2, 5, 4, 8, 3, 7]));
