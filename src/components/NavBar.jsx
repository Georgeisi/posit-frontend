import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";

const NavBar = () => {
  const { token, logOutUser } = useContext(AuthContext);
  return (
    <div className="d-flex  py-3 mw1240 justify-content-between mx-auto">
      <Link className="text-decoration-none text-dark fw-bold fs-2" to={"/"}>
        Post<span className="text-blue">it</span>.
      </Link>
      <div className="d-flex gap-3 align-items-center">
        <Link
          to={"/dashboard"}
          className="text-decoration-none text-dark fw-semibold"
        >
          Stories
        </Link>
        <Link className="text-decoration-none text-dark fw-semibold">
          Contact
        </Link>
        {token !== null ? (
          <Link
            onClick={() => {
              logOutUser();
            }}
            className="text-decoration-none text-white btn btn-danger"
          >
            Log Out
          </Link>
        ) : (
          <div className=" d-flex align-items-center gap-3">
            <Link
              className="text-decoration-none text-dark fw-semibold"
              to={"/login"}
            >
              Sign in
            </Link>
            <Link className="btn bg-blue text-white fw-semibold" to={"signup"}>
              Get Started
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
