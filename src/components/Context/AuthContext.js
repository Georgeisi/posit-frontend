import React, { createContext, useState, useEffect } from "react";
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(()=> JSON.parse(localStorage.getItem('token')|| null))
  const navigate= useNavigate()

  const login = async (Incoming) => {
    const res = await fetch("http://127.0.0.1:8000/api/auth/token/login/", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(Incoming),
    });
    const json = await res.json();
    console.log(res);
    // setToken(res)
    console.log(json);
    if(res.status===400){
      if(json.non_field_errors){
        toast.error(json.non_field_errors[0])
      }
      else if(json.email){
        toast.error(json.email[0])
      }else if(json.password){
        toast.error(json.password[0])
      }
     
    }if(res.status===200){
      setToken(json.auth_token)
      toast.success('welcome Nigger')
      localStorage.setItem('token', JSON.stringify(json.auth_token))
      navigate('/dashboard')
    }

  };

  const loginuser = async (Incoming) => {
    const res = await fetch("http://127.0.0.1:8000/api/auth/users/", {
      method: "POST",
      headers:{
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(Incoming),
    });

    const json = await res.json();
    if(res.status===400){
      // toast.error(json.password[0])
      console.log(json);
      if (json.email){
        toast.error(json.email[0])
        
      }
      else if(json.username){
        toast.error(json.username[0])
        
      }
      else if(json.password){
        toast.error(json.password[0])

      }
    }
    else if(res.status===201){
      toast.success(`Registered Succesfully welcome ${json.username}`)
      // setUser(json)
    //   setTimeout(()=>{
    //     navigate('/dashboard')

    //   },2000)
    login({
      email: Incoming.email,
      password: Incoming.password
    })
    }

    

    // console.log(json);
  };
  const getCurrentUser=async()=>{
    const res = await fetch('http://127.0.0.1:8000/api/auth/users/me',{
    headers:{
      'Content-Type':'application/json',
      Authorization : `Token ${token}`
    }
    })
    const data = await res.json()
    setUser(data)

  }

  
  const logOutUser=async ()=>{
    const res =await fetch('http://127.0.0.1:8000/api/auth/token/logout/',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
        Authorization : `Token ${token}`
      }
    })

    // const data=await res.json()
    setToken(null)
    setUser(null)
    localStorage.removeItem('token')
    navigate('/')
    toast.success('you have succesfully loged out')

  }

  
  


  const AuthData = {
    loginuser,
    login,
    user,
    token,
    getCurrentUser,
    logOutUser

  };

  return (
    <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
  );
};
