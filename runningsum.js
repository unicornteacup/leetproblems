var runningSum = function(nums) {
  let running = [];
  let current = 0;
  for (let i = 0; i<nums.length; i++) {
      current += nums[i];
      running.push(current);
  }
  
  return running;
};