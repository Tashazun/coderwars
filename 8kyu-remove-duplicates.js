function distinct(a) {
    return a.filter((x, i, arr) => arr.indexOf(x) == i); 
  }