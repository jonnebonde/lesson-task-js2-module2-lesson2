import { users } from "./userData.js";

let userList = users;

console.log(userList);

function removeUser(userToRemove) {
  const filteredUsers = userList.filter((userList) => userList.id !== userToRemove);



/*   function filterUsers(user) {
    if(user.id !== userToRemove) {
      return true;
    }
  } */

  userList = filteredUsers;
}

removeUser(3)

console.log(userList)