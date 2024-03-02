import React, { useState } from 'react'

const Search = () => {
    const allItems = [
        'suraj','pavan','shubham',"mangesh",'bhau','prashant','rutik','jamnagar'
    ]

    const [search,setSearch] = useState('');

    const searchItem = allItems.filter((data)=> data.toLowerCase().includes(search.toLowerCase()))
    console.log(searchItem)
  return (
    <div>
        <h1>Search items</h1>
        <input type="text"  onChange={(e)=>setSearch(e.target.value)} />
        <hr />  
        <p>
            {searchItem?.map((item,index)=>{
                return(
                    <>
                    <p key={index}>
                        {item}
                    </p>
                    </>
                )
            })}
        </p>
    </div>
  )
}

export default Search