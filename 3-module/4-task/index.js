function showSalary(users, age) {
  const usersFilter = users.filter(item => item.age <= age);
  const resultSalary = usersFilter.reduce((item, current) => item + current.name + ', ' + current.balance + '\n', '');
  return resultSalary.slice(0, -1);
}
