import React from "react";
import Navbar from "../components/Navbar";
import { IoMdAddCircle } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import ScrollUpButton from "../common/ScrollUpButton";

const AddNew = () => {
  return (
    <>
      <Navbar />

      {/* section 1 */}
      <section className="container mx-auto add-new">
        <div className=" d-flex gap-2 justify-content-center align-items-center my-3">
          <IoMdAddCircle color="#0096C8" size={32} />
          <h5 className="pt-2 fw-bold" style={{ color: "#000000" }}>
            Add Your Listing
          </h5>
        </div>
        <div className="">
          <div className="row ">
            {/* card-1 */}
            <div className=" col-md-12 col-lg-6 mt-2 pointer">
              <div className="container card-1  ">
                <div className=" d-flex gap-2 align-items-center title mt-2">
                  <MdGroups size={32} className="card-1-icon" />
                  <h5 className="pt-2 fw-bold">People</h5>
                </div>
                <div
                  className=" mt-3 py-2  desc "
                  style={{
                    fontSize: "14px",
                    lineHeight: "21px",
                  }}
                >
                  An Individual or Organization. Teacher, Coach, Professional or
                  Online Seller. Company, Business or Association.
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className=" col-md-12 col-lg-6 mt-2 pointer">
              <div className="container card-2  ">
                <div className=" d-flex gap-2 align-items-center title  mt-2">
                  <MdGroups size={32} className="card-2-icon" />
                  <h5 className="pt-2 fw-bold">Place</h5>
                </div>
                <div className=" mt-3 py-2  desc ">
                  An Address. Classroom, Shop, Performance or Event Venue,
                  Sports Arena, Play Area, Studio, School or Campus.
                </div>
              </div>
            </div>

            {/* card-3 */}
            <div className=" col-md-12 col-lg-6 mt-4 pointer">
              <div className="container card-3  ">
                <div className=" d-flex gap-2 align-items-center title  mt-2">
                  <MdGroups size={32} className="card-3-icon" />
                  <h5 className="pt-2 fw-bold">Product</h5>
                </div>
                <div
                  className=" mt-3 py-2  desc "
                  style={{
                    fontSize: "14px",
                    lineHeight: "21px",
                  }}
                >
                  An Item that you can Book, Buy or Rent. Appointment, Ticket,
                  or Voucher. Equipment, Instrument or Activity Kit.
                </div>
              </div>
            </div>

            {/* card-4 */}
            <div className=" col-md-12 col-lg-6 mt-4 pointer">
              <div className="container card-4  ">
                <div className=" d-flex gap-2 align-items-center title  mt-2">
                  <MdGroups size={32} className="card-4-icon" />
                  <h5 className="pt-2 fw-bold">Product</h5>
                </div>
                <div
                  className=" mt-3 py-2  desc "
                  style={{
                    fontSize: "14px",
                    lineHeight: "21px",
                  }}
                >
                  An Item that you can Book, Buy or Rent. Appointment, Ticket,
                  or Voucher. Equipment, Instrument or Activity Kit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollUpButton />
      <div className="mt-5"></div>
    </>
  );
};

export default AddNew;
