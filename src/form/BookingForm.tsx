import Preloader from "@/components/common/Preloader";
import { AppContext } from "@/contextApi/AppProvider";
import roomAndSuites from "@/data/roomAndSuitesData";
import { AppContextType } from "@/interFace/interFace";
import React, { useContext, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const BookingForm = () => {
  const [extraBed, setExtraBed] = useState<string | null>(null);
  const { roomId } = useContext(AppContext) as AppContextType;
  const room = roomAndSuites.find((item) => item.id == roomId);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    adults: "",
    extraBed: "",
    checkin: "",
    checkout: "",
    specialRequirements: "",
  });

  if (!room) {
    return <Preloader />;
  }

  const totalPrice =
    room && typeof room.price !== "undefined"
      ? extraBed === "1"
        ? room.price + 800
        : room.price
      : 0;

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const templateParams = {
      to_name: "vinod kumar",
      formData: formData,
    };

    emailjs
      .send(
        "service_iy53qdq",
        "template_xoadkr5",
        templateParams,
        "CSM5ny-M2R7aX5vJV"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          Swal.fire({
            title: "Thanks for Booking",
            icon: "success",
            confirmButtonText: "OK",
          });

          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            adults: "",
            extraBed: "",
            checkin: "",
            checkout: "",
            specialRequirements: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="bd-booking-4__form">
        <div className="bd-booking-4__input mb-15">
          <input type="text" defaultValue={room.title} readOnly />
        </div>
        <div className="bd-booking-4__input mb-15">
          <input type="text" value={`Price  ${totalPrice}`} readOnly />
        </div>
        <div className="bd-booking-4__input mb-15">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="bd-booking-4__input mb-15">
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="bd-booking-4__input mb-15">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="bd-booking-4__input mb-15">
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="bd-booking-4__input mb-15">
          <label htmlFor="date">Check in</label>
          <input
            // id="checkin"
            type="date"
            name="checkin"
            value={formData.checkin}
            onChange={handleChange}
          />
        </div>

        <div className="bd-booking-4__input mb-15">
          <label htmlFor="checkout">Check out</label>
          <input
            // id="checkout"
            type="date"
            name="checkout"
            value={formData.checkout}
            onChange={handleChange}
          />
        </div>

        <div className="bd-booking-4__input p-relative mb-15">
          <select
            name="adults"
            id="adults"
            className="bd-nice-select"
            value={formData.adults}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select ADULTS
            </option>
            <option value="1">ADULTS 01</option>
            <option value="2">ADULTS 02</option>
            <option value="3">ADULTS 03</option>
          </select>
        </div>

        <div className="bd-booking-4__input p-relative mb-15">
          <select
            name="extraBed"
            id="extrabad"
            className="bd-nice-select"
            onChange={(e) => setExtraBed(e.target.value)}
          >
            <option value="" disabled selected>
              Extra bed
            </option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
        </div>

        <div className="bd-booking-4__input message mb-30">
          <textarea
            name="specialRequirements"
            placeholder="Special Requirements"
            value={formData.specialRequirements}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="glo-booking-btn">
          <button type="submit" className="bd-btn dark-btn">
            Book Now{" "}
            <span>
              <i className="fa-regular fa-arrow-right-long"></i>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
