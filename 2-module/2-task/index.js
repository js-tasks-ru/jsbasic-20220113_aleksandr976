//Создайте функцию isEmpty(obj), которая возвращает true,
//если в объекте нет свойств и false – если хоть одно свойство есть.


function isEmpty(obj) {
  for (key in obj) {
    return false;
  }
  return true;
}

