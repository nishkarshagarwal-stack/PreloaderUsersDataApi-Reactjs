import React, { useSyncExternalStore } from "react";
import {useState} from 'react'
import Spinner from "./components/Spinner";

function App() {
  const[users, setUsers] = useState([])
  const[isLoading, setIsLoading] = useState(false)

      const handledata = () => {
        setIsLoading(true);
        fetch('https://reqres.in/api/users?page=0')
        .then((response) => response.json())
        .then((response) => {
          setTimeout(() => {
          setUsers(response.data)
          console.log(response.data)
          setIsLoading(false)
          }, 1000)
        })
      }

     const renderUser = (
        <div className="userlist-container">
          {users.map((item, index) => (
            <div className="user-container" key={index}>
              <img src={item.avatar} alt="" />
              <div className="userDetail">
                <div className="first-name">{`${item.first_name}
                                               ${item.last_name}`}</div>
              <div className="last-name">{item.email}</div></div>
            </div>
          ))}
        </div>
      )

      return(
        <div className="App">
          {isLoading ? <Spinner/> : renderUser}
        <button onClick={handledata} >fetch Users data</button>
        </div>
      )

   
}

export default App;
