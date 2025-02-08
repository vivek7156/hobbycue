import React, { useState } from "react";
import "./Index.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const JoinIn = () => {
  const [showPassword, setShowPassword] = useState(false);
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
        <div className="d-flex justify-content-end mt-1 fw-bold w-100">
          <p style={{ fontSize: "10px", color: "#939CA3" }}>
            Password strength
          </p>
        </div>

        <p
          style={{
            fontSize: "12px",
            color: "#6D747A",
            fontWeight: "400",
            marginTop: "0px",
          }}
        >
          By continuing, you agree to our{" "}
          <span style={{ color: "#08090A" }}>Terms of Service</span> and
          <span style={{ color: "#08090A" }}>Privacy Policy</span>.
        </p>

        <button className="btn custom-outline-btn w-100 fw-bold">
          Agree and Continue
        </button>
      </form>
    </>
  );
};

export default JoinIn;
