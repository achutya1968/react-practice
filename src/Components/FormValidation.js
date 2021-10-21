import React, { useState } from "react";

function FormValidation() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleEmailChange = (e) => {
    setSuccessMsg("");
    setEmailError("");
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setSuccessMsg("");
    setPasswordError("");
    setPassword(e.target.value);
  };

  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@demo.com") {
      setEmailError("");
      if (password === "demo") {
        setSuccessMsg("Logged in")
      } else {
        setPasswordError("Password does't match")
      }
    } else {
      setEmailError("Email doesn't match!")
    } if(email !== ''){

    }
    else{
      setEmailError("Email required!")
    } if(password !== ''){

    }
    else{
      setPasswordError("Password required!")
    }
  };

  return (
    <div>
      <h1>React Login form Validation</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Email:</label><br></br>
        <input
          type="text"
          placeholder="Type your email address... "
          onChange={handleEmailChange}
          value={email}
        />
        <br></br>
        {emailError && <div>{emailError}</div>}
        <label>Password:</label><br></br>
        <input
          type="password"
          placeholder="Enter your password... "
          onChange={handlePasswordChange}
          value={password}
        />
        <br></br>
        {passwordError && <div>{passwordError}</div>}<br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default FormValidation;
