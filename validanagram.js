var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  let sSorted = s.split('').sort();
  let tSorted = t.split('').sort();
  
  console.log("s & sSorted", s, sSorted);
  console.log("t & tSorted", t, tSorted)
  
  if (JSON.stringify(sSorted) === JSON.stringify(tSorted)) {
      return true;
  } else {
      return false;
  }
};