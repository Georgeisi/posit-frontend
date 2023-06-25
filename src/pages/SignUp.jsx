import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/Context/AuthContext";
import { useNavigate,Link } from "react-router-dom";

const SignUp = () => {
  const[username,setUsername]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  const{loginuser,token} =useContext(AuthContext)
  const navigate= useNavigate()

  useEffect(()=>{
    if(token){
      navigate('/dashboard')

    }

  },[])

  return (
    <div className="mw1240 mx-auto">
      <h1>Join Posts<span className="text-blue">it</span>.</h1>
      <p>Enter your email adderess to craeate an account on Postit</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = {
            username,
            email,
            password,
          }
          console.log(formData)
          loginuser(formData)
          // console.log(loginuser);
        }}
        className="px-4 d-flex flex-column gap-4"
      >
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className=" border-0 border-bottom border-dark w-100"
            type="text"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="username">Your Email Address</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className=" border-0 border-bottom border-dark w-100"
            type="emailt"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="username">Password</label>
          <input
            onChange={(e) => {
              let y = setPassword(e.target.value);
            }}
            className=" border-0 border-bottom border-dark w-100"
            type="password"
            id="password"
          />
        </div>
        <button className="btn bg-blue text-white w-100 fw-bold">
          Continue
        </button>
        <p>Already have an account?<Link to={'/login'} className="text-blue text-decoration-none">Sign up</Link></p>
        
      </form>
    </div>
  );
};

export default SignUp;
