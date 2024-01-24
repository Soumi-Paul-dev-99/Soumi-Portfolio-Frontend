import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { SiIndeed } from "react-icons/si";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";

import "./Contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //HANDLE SUBMIT BUTTONS
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
      }
      const res = await axios.post(
        "http://localhost:8080/api/v1/portfolio/sendEmail",
        {
          name,
          email,
          msg,
        }
      );

      //validation success
      if (res.data.success) {
        // console.log("data", data);
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="contactus.avif"
                      alt="onContact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact with
                        <BsLinkedin
                          color="#0077B5"
                          className="ms-2"
                          size={30}
                        />
                        <BsGithub color="#24292e" className="ms-2" size={30} />
                        <FaFacebookSquare
                          color="#316FF6"
                          className="ms-2"
                          size={30}
                        />
                        <FaSquareWhatsapp
                          color="#25d366"
                          className="ms-2"
                          size={30}
                        />
                        <SiIndeed color="#2164f4" className="ms-2" size={30} />
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>

                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="email"
                        placeholder="write your Email"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="write your message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button
                        className="button"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
