// Напишите функцию `toggleText`, которая сделает так, чтобы при первом нажатии на кнопку с классом `toggle-text-button` текст
//`<div id="text">Текст</div>` исчезал, а при повторном нажатии появлялся. Чтобы скрыть текст, добавьте ему атрибут `hidden` и наоборот.

function toggleText() {
  const text = document.querySelector('#text');
  const button = document.querySelector('.toggle-text-button');
  button.onclick = () => text.hidden = !text.hidden;
}
