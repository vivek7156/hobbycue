import React, { useState } from "react";
import "./Index.css";
import Google from "../assets/google.svg";
import Facebook from "../assets/facebook.svg";
import SignIn from "./forms/SignIn";
import JoinIn from "./forms/JoinIn";

const AuthTemplet = () => {
  const [activeTab, setActiveTab] = useState("signin");
  return (
    <>
      <section className=" d-flex container-tab gap-5">
        <div
          className={`${activeTab === "signin" ? "active-tab" : "tab"} `}
          onClick={() => setActiveTab("signin")}
        >
          <h5>Sign In</h5>
        </div>
        <div
          className={`${activeTab !== "signin" ? "active-tab" : "tab"} `}
          onClick={() => setActiveTab("joinin")}
        >
          <h5>Join In</h5>
        </div>
      </section>

      <section className="  pt-4">
        {/* for large screen */}
        <div className=" d-none d-lg-block">
          {/* login with google or facebook */}
          <button className="btn d-flex  justify-content-between align-items-center -2 w-100 templet-button ">
            <img src={Google} alt="" />
            <span>Continue with Google</span>
            <span></span>
          </button>
          <button className="btn d-flex  justify-content-between align-items-center -2 w-100 templet-button mt-3 ">
            <img src={Facebook} alt="" />
            <span>Continue with Facebook</span>
            <span></span>
          </button>
          {/* divider */}
          <div className=" position-relative pt-3">
            <hr />
            <p className=" position-absolute breakline-content ">
              Or connect with
            </p>
          </div>
        </div>

        {/* form */}
        <div>
          {activeTab === "signin" ? (
            <>
              <SignIn />
            </>
          ) : (
            <>
              <JoinIn />
            </>
          )}
        </div>

        {/* for small screen */}
        <div className=" d-lg-none">
          {/* divider */}
          <div className=" position-relative pt-3">
            <hr />
            <p className=" position-absolute breakline-content ">
              Or connect with
            </p>
          </div>

          {/* login with google or facebook */}
          <button className="btn d-flex  justify-content-between align-items-center -2 w-100 templet-button ">
            <img src={Google} alt="" />
            <span>Continue with Google</span>
            <span></span>
          </button>
          <button className="btn d-flex  justify-content-between align-items-center -2 w-100 templet-button mt-3 ">
            <img src={Facebook} alt="" />
            <span>Continue with Facebook</span>
            <span></span>
          </button>
        </div>
      </section>
    </>
  );
};

export default AuthTemplet;
