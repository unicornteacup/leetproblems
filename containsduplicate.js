var containsDuplicate = function(nums) {
  let dupeCheck = new Set();
  
  for (let num of nums) {
      dupeCheck.add(num);
  }
  
  if (dupeCheck.size === nums.length) {
      return false;
  } else {
      return true;
  }
};