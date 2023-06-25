import React, { useContext, useEffect } from "react";
import RootLayout from "../LayOut/RootLayout";
import { AuthContext } from "../components/Context/AuthContext";
import { Link } from "react-router-dom";
import splash from '../assests/Images/unsplash_Z2bJeJQRbW0.png'

const DashBoard = () => {
  const { getCurrentUser, user } = useContext(AuthContext);
  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <RootLayout>
      <div className=" d-flex flex-column flex-md-row align-items-center mw1240 mx-auto">
        <div className="text-md-start">
          <h1>Welcome {user && user.username},</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis hic
            voluptatem atque odit facere, assumenda unde laborum earum explicabo
            molestias!
          </p>
          <div className="d-flex gap-2 justify-content-center justify-content-md-start ">
            <Link to={'/my-stories'} className="btn bg-blue text-white px-4 px-lg-5  rounded-1">My Stories</Link>
            <Link to={'/feeds'} className="btn border-1 border-blue px-4 px-lg-5 text-blue">Go to feed</Link>
          </div>
        </div>
          <img className="w-50 mx-auto" src={splash} alt="" />
      </div>
    </RootLayout>
  );
};

export default DashBoard;
