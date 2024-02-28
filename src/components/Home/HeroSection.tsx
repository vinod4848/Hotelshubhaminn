"use client";
import Image from "next/image";
import React, { useState } from "react";
import heroImg from "../../../public/assets/img/bg/room-view.jpg";
import DatePicker from "react-datepicker";
import Link from "next/link";
const HeroSection: React.FC = () => {
  const [startDate, setstartDate] = useState<Date | null>(new Date());
  const [endDate, setendDate] = useState<Date | null>(new Date());
  const handleCalendarClose = () => {};
  const handleCalendarOpen = () => {};
  return (
    <>
      <section className="bd-hero__halfim-wrapper p-relative">
        <div className="container bd-hero__halfim-container">
          <div className="row">
            <div className="col-xl-6">
              <div className="bd-hero__halfim-content mb-60">
                <div
                  className="bd-section__title-wrapper wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <h3 className="bd-section__title bd-hero__halfim-title mb-30">
                    welcome to 
                    <br />
                    hotel Shubham inn
                  </h3>
                </div>
                <p className=" wow fadeInUp" data-wow-delay=".7s">
                  Shubham Inn Hotel offers unforgettable food and drink options.
                  Enjoy dinner at the award-winning
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="bd-hero__halfim-img">
                <Image src={heroImg} alt="image not found" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
