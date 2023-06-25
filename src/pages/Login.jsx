import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login,token } = useContext(AuthContext);
  const navigate= useNavigate()
  useEffect(()=>{
    if(token){
      navigate('/dashboard')

    }

  },[])
  return (
    <div className="mw1240 mx-auto">
      <h1 className="py-3">Welcome Back</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = {
            email,
            password,
          };
          login(formData);
          console.log(formData);
        }}
        className="d-flex flex-column gap-4 px-4"
        action=""
      >
        <div>
          <label className="fw-semi-bold" htmlFor="email">
            Your Email Address
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-0 border-bottom border-dark w-100"
            type="email"
          />
        </div>
        <div>
          <label className="fw-semi-bold" htmlFor="password">
            {" "}
            Password
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border-0 border-bottom border-dark w-100"
            type="password"
          />
        </div>
        <button className="btn bg-blue text-white">Continue</button>
      </form>
      <p>No account? signup</p>
    </div>
  );
};

export default Login;
