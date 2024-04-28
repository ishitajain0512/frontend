
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  console.log("hello");
  const auth = localStorage.getItem("user");
  let role;
  if (auth) {
    role = JSON.parse(localStorage.getItem("user")).role;
  }
  console.log(role);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      
         
        <ul className="nav-ul nav-right">
          <li>
            M and I Diagnosis Services
          </li>
          <li>
            
          </li>
        </ul>
    </div>
  );
};
export default Nav;
