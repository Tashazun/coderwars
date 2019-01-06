
// Delete occurances of an element if it occurs more than once

function deleteNth(arr,n){
    if (!arr) { return null; }
    if ( n < 1) { return []; }

    const result = [];
    const count = {};
    for (let i = 0; i < arr.length; i++){
        const item = arr[i];
        const counting = count[item] || 0;
        if (counting < n) {
            result.push(item);
            count[item] = counting + 1;
        }
    }    
    return result;
}

// RGB to HEX conversion

function rgb(r, g, b){
    let hex = '';
    
    [r, g, b].map(n => {
      if(n > 255) { n = 255}
      else if(n < 0) { n = 0};
    
    const bit = n.toString(16);
    hex += bit.length === 1 ? '0' + bit : bit;
    })
    return hex.toUpperCase();
    
  }

// Sum of Odd Cubed Numbers

function cubeOdd(arr) {

    const answer = arr.filter(x => x % 2 !== 0)
        .map(x => (x * x) * x)
        .reduce((a, b) => a + b);

    if (isNaN(answer)) {
      return undefined;
    } else {
    return answer;
    }
  }