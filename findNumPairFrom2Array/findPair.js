// Simple algorithm without nesting loops

function twoSum(numbers, target) {
    let mem = {}, result;
    
    numbers.forEach(el => {
      if ( mem[target - el] ) result = [numbers.indexOf(target - el), numbers.lastIndexOf(el)];
      mem[el] = 1;
    });
  
    return result;
  }

console.log(twoSum([2,2,3], 4)); // [0, 1] The indices of the numbers in the array that give the "target"