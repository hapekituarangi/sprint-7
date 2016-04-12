//Exercise 1 - Minimum

var min = function(low, high) {
if (low < high)
  return low;
else
  return high;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
