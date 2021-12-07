import React from "react";
import "./Style.css";


export default function Login(props) {
  const formSubmit = function(event) {
    event.preventDefault();
    const userName = event.target.userName.value;
    const password = event.target.password.value
    event.target.userName.value = "";
    event.target.password.value = "";
    props.sendLogin(userName, password);
  }

  return(
    <div>
      <h1>Login page</h1>
      <form>
        <label>User name: </label>
        <input></input>
        <br/>
        <label>Password: </label>
        <input></input>
        <br/>
        <input type = "submit"></input>
      </form>
    </div>
  )
} 