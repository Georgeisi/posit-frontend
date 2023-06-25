import React from "react";
import { Link } from "react-router-dom";
import twitter from "../assests/icons/twitter.png";
import facebook from "../assests/icons/facebook.png";
import linkedin from "../assests/icons/insta.png";
const Footer = () => {
  return (
    <div className="main-footer py-3   text-white">
      <div className="row mw1240 mx-auto text-lg-start border-bottom py-3">
        <div className="col-lg-5 ps-lg-0">
          <h2>
            About Post<span className="text-blue">it</span>.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            corporis aut eaque doloremque numquam ex necessitatibus neque sint,
            voluptatem iure consectetur maxime eius harum accusantium sequi.
            Eligendi, fuga tempora.
          </p>
        </div>
        <div className="col-lg-2 text-center">
          <h2>Quick Menu</h2>
          <div>
            <p>Home</p>
            <p>Stories</p>
            <p>Trending Stories</p>
            <p>Popular Stories</p>
          </div>
        </div>
        <div className="d-flex flex-column col-lg-2" >
          <Link className="text-white text-decoration-none" to={"/signup"}>
            Sign Up
          </Link>
          <Link className="text-white text-decoration-none" to={"/login"}>
            Login
          </Link>
          <Link className="text-white text-decoration-none">Contact</Link>
        </div>
        <div className="col-lg-3 pe-lg-0 ">
          <h2>Subscribe to our Newsletter</h2>
          <div className="d-flex ">
            <input placeholder="Email Address" type="email" />
            <button className="btn bg-blue rounded-0 text-white">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="d-lg-flex justify-content-lg-end mw1240 mx-auto gap-4 ">
        <p>Terms and Policy</p>
        <div className="d-lg-flex gap-lg-3 align-items-lg-baseline ">
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />
          <img src={facebook} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
