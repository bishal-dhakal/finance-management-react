import React, { useState } from "react";
import AuthUser from "../../context/AuthUser";
import { useNavigate } from "react-router-dom";
import './Login.css'

export const Register = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const {http,setToken} = AuthUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    http.post('/register',{email:email,pass:pass,name:name}).then((res)=>{
      navigate('/login')
    })
  };

  return (
    <div className="Register">
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Name"
          required
        />
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
      <button className="link-btn">
        Already have an account? Login here.
      </button>
    </div>
    </div>
  );
};

export default Register;