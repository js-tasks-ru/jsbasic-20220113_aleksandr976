function getMinMax(str) {

  let arrNum = str.split(' ').filter(item => {
    if (isFinite(item)) {
      return item;
    }
  });

  let result = {
    min: Math.min(...arrNum),
    max: Math.max(...arrNum),
  };
  return result;
}
