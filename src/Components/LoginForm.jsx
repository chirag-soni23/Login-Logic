import React, { useState } from "react";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Logging in with:", { username, password });
  }
  const containSpecialChars = (str) => {
    const specialChars = "!@#$%^&*";
    for (let i = 0; i < str.length; i++) {
      if (specialChars.includes(str[i])) return true;
    }
    return false;
  };
  function userNameHandler(e) {
    console.log("username", e.target.value);
    const inputUserNameValue = e.target.value;
    let errorMessage = "";
    if (!/\d/.test(inputUserNameValue)) {
     errorMessage = "";
    } else {
     errorMessage  =  "Username should not contain numeric" ;
    }
    setUserName(inputUserNameValue);
    setError(errorMessage)
  }


  function passHandler(e) {
    const inputPassValue = e.target.value;
  
    let errorMessage = "";

    if (inputPassValue.length < 8){
      errorMessage = "Password should be more than 8 characters long ";
    } else if (!containSpecialChars(inputPassValue)) {
      errorMessage = "Password must contain special characters .";
    }
    else {
        errorMessage = "";
      }
    
    
    setPassword(inputPassValue);
    setError(errorMessage);
  
   
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          onChange={userNameHandler}
          value={username}
          required
        />
        <br />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          onChange={passHandler}
          value={password}
          required
        />
        <br />
        <br />
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default LoginForm;
