import SignUp from "./Components/SignUp";
import Login from "./Components/Login"
import './App.css';


function App() {
  const state = {"page": undefined};
  const URL = "http://localhost:3001";

  const sendSignUp = function(userName, password) {
    console.log(userName, password);

    const options = {
      name: userName,
      password: password
    }

    fetch(URL, options)
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log(data);
      })
  }

  const sendLogin = function(userName, password) {
    console.log(userName, password);

    const options = {
      name: userName,
      password: password
    }

    fetch(URL, options)
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log(data);
      })
  }


  if (state["page"] === undefined) {
    return (
      <div>
        <h1>
          <SignUp
            sendSignUp = {sendSignUp}
          />
        </h1>
      </div>
    );
  } else if (state["page"] === "logIn") {
    return (
      <div>
        <Login
          sendLogin = {sendLogin}
        />
      </div>
    )
  } else {
    return (
      <div>
        {/* <Dashboard/> component to implement */}
      </div>
    )
  }
}

export default App;
