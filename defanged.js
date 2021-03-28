var defangIPaddr = function(address) {
  let defanged = []
  for (let letter of address) {
      if (letter === '.'){
          defanged.push('[.]');
      } else {
          defanged.push(letter);
      }
      
  }
  return defanged.join('');
};