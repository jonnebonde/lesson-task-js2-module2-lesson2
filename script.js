// level 1
let users = [
  { id: 1, name: "Emma", gender: "Female" },
  { id: 2, name: "Oscar", gender: "Male" },
  { id: 3, name: "Alexis", gender: "Female" },
  { id: 4, name: "Adam", gender: "Male" },
];

function filterUsers(userId) {
  const userFilter = users.filter(filterFunction)

  function filterFunction(user) {
    if (user.id !== userId) {
      return true
    }
  }

  users = userFilter
}

filterUsers(1)
console.log(users)


// level 2
const filterUsers = (userId) => users.filter((user) => user.id !== userId)

const filteredUsers = filterUsers(1)
console.log(filteredUsers)