import React from "react";
import { useState } from "react";
import "./UserData.css";

function GettingUserData() {
  const [userData, setuserData] = useState([]);

  const getUsers = async () => {
    const res = await fetch("https://reqres.in/api/users?page=1");
    const json = await res.json();
    setuserData(json.data);
  };

  return (
    <div className="usernavbar">
      <nav className="navbar">
        <p className="logo"> LETS GROW MORE </p>
        <button onClick={getUsers} className="btn">
          Get-Users
        </button>
      </nav>
      <div className="userData">
        {userData.map((user) => {
          return (
            <div className="userInfo">
              <img src={user.avatar} className="userimg" alt="" />
              <h4 key={user.first_name} className="userName">
                {user.first_name} {user.last_name}
              </h4>
              <p key={user.email} className="userEmail">
                {user.email}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GettingUserData;