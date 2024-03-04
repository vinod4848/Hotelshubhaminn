"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactArea = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    rooms: "",
    checkin: "",
    checkout: "",
    comments: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Hotel Shubham Inn",
      message: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Comments: ${formData.comments}
        Rooms: ${formData.rooms}
        Checkin: ${formData.checkin}
        heckout: ${formData.checkout}
      `,
    };

    emailjs
      .send(
        "service_um4gwlh",
        "template_puyy4an",
        templateParams,
        "B9yJhMthcFiPHyeuw"
      )
      .then(
        (response: any) => {
          console.log("Email sent successfully:", response);
          Swal.fire({
            title: "Thanks for contact us!",
            icon: "success",
            confirmButtonText: "OK",
          });

          setFormData({
            name: "",
            email: "",
            phone: "",
            date: "",
            comments: "",
            rooms: "",
            checkin: "",
            checkout: "",
          });
        },
        (error: any) => {
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <section className="bd-contact-area x-clip pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 mb-60">
            <div className="bd-contact-form">
              <h3 className="bd-contact-form-title mb-25">
                Contact Us Right Here
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="bd-contact-input mb-30">
                      <label htmlFor="name">
                        Name
                        <sup>
                          <i className="fa-solid fa-star-of-life"></i>
                        </sup>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bd-contact-input mb-30">
                      <label htmlFor="email">
                        Email
                        <sup>
                          <i className="fa-solid fa-star-of-life"></i>
                        </sup>
                      </label>
                      <input
                        id="email"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bd-contact-input mb-30">
                      <label htmlFor="phone">
                        Phone
                        <sup>
                          <i className="fa-solid fa-star-of-life"></i>
                        </sup>
                      </label>
                      <input
                        id="phone"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bd-contact-input mb-30">
                      <label htmlFor="rooms">Number of rooms</label>
                      <input
                        id="rooms"
                        type="number"
                        name="rooms"
                        value={formData.rooms}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bd-contact-input mb-30">
                      <label htmlFor="date">Check in</label>
                      <input
                        id="checkin"
                        type="date"
                        name="checkin"
                        value={formData.checkin}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bd-contact-input mb-30">
                      <label htmlFor="checkout">Check out</label>
                      <input
                        id="checkout"
                        type="date"
                        name="checkout"
                        value={formData.checkout}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="bd-contact-input mb-20">
                      <label htmlFor="textarea">
                        Comments
                        <sup>
                          <i className="fa-solid fa-star-of-life"></i>
                        </sup>
                      </label>
                      <textarea
                        name="comments"
                        id="textarea"
                        value={formData.comments}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="bd-contact-agree-btn">
                      <button type="submit" className="bd-btn">
                        Send Now
                        <span>
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-6 mb-60">
            <div className="bd-contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3768.9582305776707!2d72.93456397440688!3d19.153305582067315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDA5JzExLjkiTiA3MsKwNTYnMTMuNyJF!5e0!3m2!1sen!2sin!4v1709020347509!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
