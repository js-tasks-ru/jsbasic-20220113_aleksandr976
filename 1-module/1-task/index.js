function factorial(n) {
  let result = n;
  if (n === 0 || n === 1) {
    result = 1;
  } else {
    for (let counter = n - 1; counter > 0; counter--) {
      result *= counter;
    }
  }
  return result;
}
