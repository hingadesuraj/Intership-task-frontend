import faker from 'faker'
import React from 'react'

const Pagination = () => {

// Generate random user data
const userData = [];
for (let i = 0; i < 40; i++) {
    const user = {
        id: faker.datatype.uuid(),
        username: faker.internet.userName()
    };
    const userString = `[id=${user.id}, username=${user.username}]`;
    userData.push(userString);
}

// console.log(userData);
  return (
    <div>
        <h2>Paginationo</h2>
    </div>
  )
}

export default Pagination