import React from "react";
import "./Index.css";
import Navbar from "../components/Navbar";
import Section1bg from "../assets/section1.svg";
import AuthTemplet from "../common/AuthTemplet";
import { MdGroups } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbBasketFilled } from "react-icons/tb";
import { FaCalendarCheck } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import Quote from "../assets/quote.svg";
import AudioPlayer from "../common/AudioPlayer";

import Profile from "../assets/profile.jpg";
import Section4 from "../assets/section4.jpg";
import { Link } from "react-router-dom";
import ScrollUpButton from "../common/ScrollUpButton";
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      {/* section 1 */}
      <Navbar />
      <section
        style={{
          backgroundColor: "#F7F5F9",
          paddingTop: "100px",
          width: "100%",
        }}
      >
        <div className="container mx-auto ">
          <div className="row">
            <div className="col-lg-8">
              {/* heading and content */}
              <div>
                <h2>
                  <i>
                    Explore your <span style={{ color: "#0096C8" }}>hobby</span>{" "}
                    or <span style={{ color: "#8064A2" }}>passion</span>
                  </i>
                </h2>
                <p style={{ maxWidth: "706px", lineHeight: "30px" }}>
                  Sign-in to interact with a community of fellow hobbyists and
                  an eco-system of experts, teachers, suppliers, classes,
                  workshops, and places to practice, participate or perform.
                  <span className=" d-none d-lg-inline-block">
                    Your hobby may be about visual or performing arts, sports,
                    games, gardening, model making, cooking, indoor or outdoor
                  </span>
                  activities…
                </p>
                <p
                  className=" d-none d-lg-inline-block"
                  style={{ maxWidth: "706px", lineHeight: "30px" }}
                >
                  If you are an expert or a seller, you can Add your Listing and
                  promote yourself, your students, products, services or events.
                  Hop on your hobbyhorse and enjoy the ride.
                </p>
              </div>
              {/* small screen login page */}
              <div className="  d-lg-none">
                <AuthTemplet />
              </div>
              <div className=" pt-5 section-1">
                <img src={Section1bg} alt="" />
              </div>
            </div>
            <div className="col-lg-4 container d-none d-lg-block">
              <AuthTemplet />
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="container mx-auto">
        <div className="row mt-5 w-100">
          <div className="col-lg-6 d-flex">
            <div className="container border rounded-2 m-3 pb-3 pt-3 w-100 text-center text-lg-start">
              <div className="d-flex gap-2 align-items-center justify-content-center justify-content-lg-start">
                <MdGroups color="#8064A2" size={32} />
                <h5 className="pt-2 fw-bold" style={{ color: "#000000" }}>
                  People
                </h5>
              </div>
              <div
                className="mt-3 text-dark"
                style={{
                  fontSize: "18px",
                  lineHeight: "27px",
                  color: "black",
                }}
              >
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </div>
              <button className="btn custom-outline-btn mt-3">Connect</button>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="container border rounded-2 m-3 pb-3 pt-3 w-100 text-center text-lg-start">
              <div className="d-flex gap-2 align-items-center justify-content-center justify-content-lg-start">
                <FaLocationDot color="#77933C" size={32} />
                <h5 className="pt-2 fw-bold" style={{ color: "#000000" }}>
                  Place
                </h5>
              </div>
              <div
                className="mt-3 text-dark"
                style={{
                  fontSize: "18px",
                  lineHeight: "27px",
                  color: "black",
                }}
              >
                Find a class, school, playground, auditorium, studio, shop or an
                event venue. Book a slot at venues that allow booking through
                hobbycue.
              </div>
              <button className="btn custom-outline-btn mt-3">Meet up</button>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="container border rounded-2 m-3 pb-3 pt-3 w-100 text-center text-lg-start">
              <div className="d-flex gap-2 align-items-center justify-content-center justify-content-lg-start">
                <TbBasketFilled color="#C0504D" size={32} />
                <h5 className="pt-2 fw-bold" style={{ color: "#000000" }}>
                  Product
                </h5>
              </div>
              <div
                className="mt-3 text-dark"
                style={{
                  fontSize: "18px",
                  lineHeight: "27px",
                  color: "black",
                }}
              >
                Find equipment or supplies required for your hobby. Buy, rent or
                borrow from shops, online stores or from community members.
              </div>
              <button className="btn custom-outline-btn mt-3">Get it</button>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="container border rounded-2 m-3 pb-3 pt-3 w-100 text-center text-lg-start">
              <div className="d-flex gap-2 align-items-center justify-content-center justify-content-lg-start">
                <FaCalendarCheck color="#0096C8" size={32} />
                <h5 className="pt-2 fw-bold" style={{ color: "#000000" }}>
                  Program
                </h5>
              </div>
              <div
                className="mt-3 text-dark"
                style={{
                  fontSize: "18px",
                  lineHeight: "27px",
                  color: "black",
                }}
              >
                Find events, meetups and workshops related to your hobby.
                Register or buy tickets online.
              </div>
              <button className="btn custom-outline-btn mt-3 ">Attend</button>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "150px" }}></div>

      {/* section 3 Add new */}
      <section className="container mx-auto">
        <div className="container border rounded-2 m-3 pb-3 pt-3 text-center">
          <div className="d-flex gap-2 align-items-center justify-content-center justify-content-lg-start">
            <IoMdAddCircle color="#0096C8" size={32} />
            <h5 className="pt-2 fw-bold" style={{ color: "#000000" }}>
              <Link to={"/add-new"}>Add your own</Link>
            </h5>
          </div>
          <div
            className="mt-3 text-dark"
            style={{
              fontSize: "18px",
              lineHeight: "27px",
              color: "black",
            }}
          >
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </div>
          <Link to={"/add-new"} className="btn custom-outline-btn mt-3">Add new</Link>
        </div>
      </section>

      <div style={{ height: "150px" }}></div>

      {/* testimonials */}
      <section
        className=" container mx-auto"
        style={{ backgroundColor: "#F7F5F9" }}
      >
        <div className="container border rounded-2 m-3 pb-3 pt-3   px-4 py-4">
          <div className=" d-flex gap-4 align-items-center">
            {/* <IoMdAddCircle color="#0096C8" size={32} /> */}
            <img src={Quote} alt="" />
            <h5 className="pt-2 fw-bold" style={{ color: "#000000" }}>
              Testimonials
            </h5>
          </div>
          <div
            className=" mt-3  "
            style={{
              fontSize: "18px",
              lineHeight: "27px",
              color: "#6D747A",
            }}
          >
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </div>

          <div className=" w-100 row gap-4 py-3">
            <div className=" col-lg-4 d-flex justify-content-center align-items-center gap-4">
              <div
                style={{
                  height: "52px",
                  width: "52px",
                  aspectRatio: 1 / 4,
                  borderRadius: "50%",
                  objectPosition: "contain",
                }}
              >
                <img
                  src={Profile}
                  alt=""
                  style={{
                    height: "52px",
                    width: "52px",
                    aspectRatio: 1 / 4,
                    borderRadius: "50%",
                    objectPosition: "contain",
                  }}
                />
              </div>

              <ul className=" list-unstyled">
                <li
                  style={{
                    color: "#8064A2",
                    fontSize: "18px",
                    lineHeight: "27px",
                    fontWeight: 600,
                  }}
                >
                  Shubha Nagarajan
                </li>
                <li style={{ color: "#0096C8", cursor: "pointer" }}>
                  Classical Dancer
                </li>
              </ul>
            </div>
            <div
              style={{ backgroundColor: "#CCC1DA" }}
              className=" col-lg-7 rounded-4"
            >
              <AudioPlayer />
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "150px" }}></div>

      {/* section 4 */}
      <div className="container mx-auto">
        <div>
          <p className="sction-4-heading">
            <i>
              Your <span style={{ color: "#0096C8" }}>Hobby</span>, Your
              <span style={{ color: "#8064A2" }}> Community...</span>
            </i>
          </p>

          <button
            className="btn border-2 rounded-3 mt-4"
            style={{ background: "#8064A2", color: "white" }}
          >
            Get Started
          </button>
        </div>

        <div className=" section-1 mt-5">
          <img src={Section4} alt="" />
        </div>
      </div>

      {/* scroll button */}
      <ScrollUpButton />
      <Footer />
    </>
  );
};

export default Home;
