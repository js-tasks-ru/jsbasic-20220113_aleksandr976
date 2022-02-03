/*
Напишите функцию makeDiagonalRed, которая выделит красным цветом все ячейки в таблице по диагонали.
Вам нужно получить из таблицы <table> все диагональные <td> и выделить их красным.
Структуру элементов таблицы можно посмотреть в файле index.html, рядом с index.js.
*/


function makeDiagonalRed(table) {

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
  }
}
