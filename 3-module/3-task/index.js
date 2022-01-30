
// Напишите функцию `camelize(str)`, которая преобразует строки вида `'my-short-string'` в `'myShortString'`.
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
  return str.split('-').map((currentValue, index) => (index === 0) ? currentValue : currentValue[0].toUpperCase() + currentValue.slice(1)).join('');
}
