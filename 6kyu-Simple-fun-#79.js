function number(n) {
    const arr = [];
    const str = n.toString();

    for (let i = 0; i < str.length; i++) {
      let num = str.slice(0, i) + str.slice(i + 1);
      arr.push(parseInt(num));
    }
   return Math.max(...arr);
  };

  number(578205);