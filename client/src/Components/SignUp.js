import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Style.css";

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';



export default function SignUp(props) {


  const formSubmit = function(event) {
    event.preventDefault();
    const userName = event.target.userName.value;
    const password = event.target.password.value
    event.target.userName.value = "";
    event.target.password.value = "";
    props.sendSignUp(userName, password);
  }

  return(
    <div>
      <h1>Sign up page</h1>
      <form  onSubmit = {formSubmit}>
        <label>User name: </label>
        <input name = "userName"></input>
        <br/>
        <label>Password: </label>
        <input name = "password"></input>
        <br/>
        <input type = "submit" value = "SignUp"></input>
      </form>
    </div>
  )
} 