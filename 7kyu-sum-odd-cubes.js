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