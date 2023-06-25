import React, { useContext, useEffect, useState } from "react";
import RootLayout from "../LayOut/RootLayout";
import { AuthContext } from "../components/Context/AuthContext";
import { useFetch } from "../hooks/useFetch";
import Loading from "../utils/Loading";
import { Link } from "react-router-dom";
import bridge from '../assests/Images/Rectangle 5 (5).png'

const Landingpage = () => {
  // const[data,setdata]= useState({})
  const { token } = useContext(AuthContext);

  const { data, loading, error } = useFetch(
    "http://127.0.0.1:8000/api/stories/user/",
    token
  );

  return (
    <RootLayout>
      <div className="hero-section text-start">
        <div className="mx-auto  mw1240">
          <h1 className="fw-bolder py-2">Stay curious</h1>
          <p className="fw-semi-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
            vero consectetur. Sit consectetur tempora iure nemo omnis harum
            natus pariatur!
          </p>
          <Link to={'/signup'} className="btn btn-bg text-white bg-blue px-4">
            Get Started
          </Link>
        </div>
      </div>
      <div className="mw1240 mx-auto">
        <div className="border border-light p-2 mt-5 d-flex flex-column gap-2 flex-md-row">
          {data &&
            data.slice(0, 3).map((datum) => {
              return (
                <div className="d-flex align-items-center gap-2" key={datum.id}>
                  <img className="rounded " src={bridge} alt="" />
                  <div className="text-start w-100 ">
                  <p className="bg-blue btn py-0 m-0 text-white">{datum.tags}</p>
                  <p className="m-0">{datum.title}</p>
                  </div>
                </div>
              );
            })}
        </div>
        {loading&&<Loading/>}
        {error && <h2 className="fw-bold text-blue">{error}</h2>}
      </div>
      <div className="try-it mx-auto py-4 my-5 mw1240 px-3 ">
        <h2 className="fw-bold">Try Post <span className='text-blue'>it.</span></h2>
        <p className="fw-semi-bold">Do you wtite or discover stories from writers on any topic</p>
        <div style={{maxWidth: '600px'}} className="w-100 mx-auto d-flex">
        <input type="text" className="w-75 border-0 rounded-start px-3" />
            <button className="btn bg-blue text-white w-25 rounded-0 rounded-end fs-4 px 1">Get started</button>
        </div>
      </div>
    </RootLayout>
  );
};

export default Landingpage;
