// import faker from "faker";
import React, { useState } from "react";

const Pagination = () => {
  // Generate random user data
  // const userData = [];
  // for (let i = 0; i < 40; i++) {
  //     const user = {
  //         id: faker.datatype.uuid(),
  //         username: faker.internet.userName()
  //     };
  //     const userString = `[id=${user.id}, username=${user.username}]`;
  //     userData.push(userString);
  // }

  const myArray = [
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
    { id: 1, username: "suraj" },
    { id: 2, username: "pavan" },
    { id: 3, username: "bhau" },
  ];

  const [itemPerPage,setItemPerPage] = useState(10);
  const [currentItem,setCurrentItem] = useState(1);

  const indexOfLastItem = currentItem*itemPerPage
  const indexOfFirstItem = indexOfLastItem - itemPerPage
  const currentItems = myArray.slice(indexOfFirstItem,indexOfLastItem)
  

  console.log(currentItem);
 
  const handleBack = () =>{

  }

  const handleNext = () =>{

  }

  console.log(myArray.length)
  return (
    <div>
      <h2>Paginationo</h2>
      {myArray.map((item)=>{
        return(
            <>
            <p>{item.id}</p>
            <p>{item.username}</p>
            </>
        )
      })}
  
      <button onClick={handleBack} >Back</button>
      <button onClick={handleNext} >Next</button>
   
    </div>
  );
};

export default Pagination;
