import React, { useState } from "react";
import AuthUser from "../../context/AuthUser";
import { useNavigate } from "react-router-dom";
import './Login.css'

export const Login = (props) => {
  const {http,setToken} =AuthUser();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate(); 
  
  const routeChange = () =>{ 
    let path = `/register`; 
    navigate(path);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    http.post('/login',{email,pass}).then((res)=>{
      setToken(res.data.user,res.data.access_token)
    })
  };

  return (
    <div className="Login">
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          required
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          required
        />
        <button type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={routeChange}
      >
        Don't have an account? Register here.
      </button>
    </div>
    </div>
  );
};

export default 