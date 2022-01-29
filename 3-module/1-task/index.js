
//  У вас есть массив объектов `user`, и в каждом из них есть `user.name`. Напишите функцию `namify`,
//  которая преобразует их в массив имён.


function namify(users) {
  return users.map(currentValue => currentValue.name);
}

