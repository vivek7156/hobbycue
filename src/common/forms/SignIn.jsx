import React, { useState } from "react";
import "./Index.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    localStorage.setItem("login", "login");
  }
  return (
    <>
      <form action="" className="form">
        <input type="email" placeholder="Email" className=" form-control" />
        <div className=" position-relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className=" form-control mt-3"
          />
          <div
            className=" show-password pointer "
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>
        <div className="d-flex justify-content-between  mt-3 w-100">
          <div className=" d-flex  custom-checkbox">
            <input
              className="form-check-input"
              type="checkbox"
              id="exampleCheckbox"
            />
            <label
              className="form-check-label"
              htmlFor="exampleCheckbox"
              style={{ color: "#000000" }}
            >
              Remember me
            </label>
          </div>
          <div className="forgot-link">
            <Link
              to={"#"}
              className="nav-dropdown-link d-flex align-items-center"
            >
              <IoMdLock color="#939CA3" />
              <span style={{ color: "#000000" }}>Forgot password?</span>
            </Link>
          </div>
        </div>

        <button className="btn btn-outline-dark w-100 mt-3 fw-bold" onClick={handleSubmit}>
          Continue
        </button>
      </form>
    </>
  );
};

export default SignIn;
