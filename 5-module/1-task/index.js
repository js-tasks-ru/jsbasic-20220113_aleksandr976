// Напишите функцию `hideSelf`, которая сделает так, чтобы кнопка с классом `hide-self-button`
// скрывала себя по нажатию. Чтобы скрыть кнопку, добавьте ей атрибут `hidden`.


function hideSelf() {
  const hiddenButton = document.querySelector('.hide-self-button');
//  hiddenButton.onclick = function() {
//  hiddenButton.hidden = true;
  hiddenButton.onclick = () => hiddenButton.hidden = true;
}
