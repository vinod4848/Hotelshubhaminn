import Preloader from "@/components/common/Preloader";
import { AppContext } from "@/contextApi/AppProvider";
import roomAndSuites from "@/data/roomAndSuitesData";
import { AppContextType } from "@/interFace/interFace";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";

const BookingForm = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [extraBed, setExtraBed] = useState<string | null>(null);
  const handleCalendarClose = () => {};
  const handleCalendarOpen = () => {};
  const { roomId } = useContext(AppContext) as AppContextType;
  const room = roomAndSuites.find((item) => item.id == roomId);

  if (!room) {
    return <Preloader />;
  }

  const selectHandler = () => {};

  const totalPrice =
    room && typeof room.price !== "undefined"
      ? extraBed === "1"
        ? room.price + 800
        : room.price
      : 0;

  return (
    <form action="#">
      <div className="bd-booking-4__form">
        <div className="bd-booking-4__input mb-15">
          <input type="text" defaultValue={room.title} readOnly />
        </div>
        <div className="bd-booking-4__input mb-15">
          <input type="text" value={`Price  ${totalPrice}`} readOnly />
        </div>
        <div className="bd-booking-4__input mb-15">
          <input type="text" placeholder="First Name" />
        </div>
        <div className="bd-booking-4__input mb-15">
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="bd-booking-4__input mb-15">
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="bd-booking-4__input mb-15">
          <input type="email" placeholder="Phone Number" />
        </div>
        <div className="bd-booking-4__input p-relative mb-15">
          <select
            name="adults"
            id="adults"
            className="bd-nice-select"
            onChange={selectHandler}
          >
            <option value="" disabled selected>
              Select ADULTS
            </option>
            <option value="1">ADULTS 01</option>
            <option value="2">ADULTS 02</option>
            <option value="3">ADULTS 03</option>
          </select>
        </div>
        <div className="bd-booking-4__input p-relative mb-15">
          <select
            name="extrabad"
            id="extrabad"
            className="bd-nice-select"
            onChange={(e) => setExtraBed(e.target.value)}
          >
            <option value="" disabled selected>
              Extra bad
            </option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
        </div>
        <div className="bd-booking-4__input mb-15 ryl-block">
          <i className="flaticon-calendar-2 zindex-5"></i>
          <DatePicker
            selected={startDate}
            onChange={(startDate) => setStartDate(startDate as Date)}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
            className="bd-date-picker"
          />
        </div>
        <div className="bd-booking-4__input mb-15 ryl-block">
          <i className="flaticon-calendar-2 zindex-5"></i>
          <DatePicker
            selected={endDate}
            onChange={(endDate) => setEndDate(endDate as Date)}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
            className="bd-date-picker bd-booking__input-date"
          />
        </div>
        <div className="bd-booking-4__input message mb-30">
          <textarea
            name="message"
            placeholder="Special Requirements"
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
