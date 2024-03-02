import React, { useState } from "react";

const UserAuth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [userLogged, setUserLogged] = useState(false);
  const [users,setUsers] = useState([]);


// handleLogin
 const handleLogin = ()=>{
   if(isRegister){
     if(isRegister){
      const user =   users.find((u)=>u.username ===username)
      const pass = users.find((u)=>u.password === password)
        if(user && pass){

            setUserLogged(true)
        }
     }
   }else{
        const newUser = {username,password}
        setUsers([...users,newUser])
        localStorage.setItem("user",JSON.stringify([...users,newUser]))
        setUserLogged(true)
   }
 }

//  handleLogou
 const handleLogout = () =>{
    setUserLogged(false);  
 }
  return (
    <>
    {/* add operator to using short cut of if else */}
      {userLogged ? (
        <>
          <h1>Welcome : {username}</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <div>
            <div>{!isRegister ? "Register" : "Login"}</div>
            <form>
              <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
              <input type="text" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
              <button onClick={handleLogin} >{isRegister ? "Login" : "Register"}</button>
            </form>
            <p>
              {isRegister
                ? "User Does not have account Please Register "
                : "User already exist please Login"}
            </p>
            <button onClick={()=>setIsRegister(!isRegister)} >{isRegister   ? "Register" : "Login"}</button>
          </div>
        </>
      )}
    </>
  );
};

export default UserAuth;
