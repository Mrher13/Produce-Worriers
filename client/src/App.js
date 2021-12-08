import SignUp from "./Components/SignUp";
import Login from "./Components/Login"
import './App.css';

import { useMutation } from '@apollo/client';
//import { ADD_USER } from '../utils/mutations';


function App() {
   const state = {"page": undefined};
  // const URL = "http://localhost:3001";

  // const sendSignUp = function(userName, password) {
  //   console.log(userName, password);

  //   const [addUser, { error, data }] = useMutation(ADD_USER);

  

  //   try {
  //     const { data } =  addUser({
  //       'variables': {"userName": userName, "password": password}
  //     });

  //     // Auth.login(data.addUser.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  

  // const sendLogin = function(userName, password) {
  //   console.log(userName, password);

  //   const options = {
  //     name: userName,
  //     password: password
  //   }

  //   fetch(URL, options)
  //     .then(data => {
  //       return data.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //     })
  // }


  if (state["page"] === undefined) {
    return (
      <div>
        <h1>
          <SignUp
           
          />
        </h1>
      </div>
    );
  } else if (state["page"] === "logIn") {
    return (
      <div>
        <Login
          
        />
      </div>
    )
  } else {
    return (
      <div>
        Hi
        {/* <Dashboard/> component to implement */}
      </div>
    )
  }
}

export default App;
