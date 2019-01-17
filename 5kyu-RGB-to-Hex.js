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