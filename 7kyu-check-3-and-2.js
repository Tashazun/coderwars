// Check three and two
function checkThreeAndTwo(array) {
    let count = {};
    
    for(let i =0; i < array.length; i++) {
      let instance = array[i];
      count[instance] = count[instance] ? count[instance] + 1 : 1;
    }
    const arr = Object.values(count);
    return arr.includes(2) && arr.includes(3) ? true : false;
  }