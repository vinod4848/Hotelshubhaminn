"use client";
import Image from "next/image";
import React, { useState } from "react";
import videothumb from "../../../public/assets/img/welcome/welcome.jpg";
import videobg from "../../../public/assets/img/bg/welcome-bg.jpg";
import ModalVideo from "react-modal-video";
import Link from "next/link";
const WellcomeAreaSec = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <section className="bd-welcome-area theme-bg-2 fix p-relative pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="bd-welcome bg-white pt-140 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="bd-welcome__content mb-65 mmb-35">
                  <div className="bd-welcome__subtitle  mb-35"></div>
                  <div className="bd-section__title-wrapper ">
                    <h2 className="bd-section__title mb-30">
                      Welcome to
                      <br />
                      Hotel Shubham inn
                    </h2>
                  </div>
                  <p>
                    Hotel Shubham Inn promises an exceptional experience with
                    its remarkable food and beverage offerings. Our commitment
                    to providing unforgettable dining experiences sets us apart,
                    making your stay truly memorable. Indulge in a culinary
                    journey at our award-winning restaurant, where each dish is
                    crafted with precision and passion. Our chefs take pride in
                    using fresh, locally sourced ingredients to create a menu
                    that caters to diverse tastes and preferences. From
                    traditional Indian delicacies to international cuisines, our
                    restaurant at Hotel Shubham Inn aims to satisfy the
                    discerning palate of every guest
                  </p>
                </div>
                <div className="bd-welcome__thumb mmb-80 transform-none">
                  <Image
                    src={videothumb}
                    style={{ width: "100%", height: "100%" }}
                    alt="welcome thumb"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="bd-welcome__bg"
                style={{ backgroundImage: `url(${videobg.src})` }}
              >
                <div className="bd-welcome__right p-relative">
                  <div
                    className="bd-welcome__video-btn-2 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <button
                      className="popup-video"
                      onClick={() => {
                        openVideoModal();
                      }}
                    >
                      <i className="fa-sharp fa-solid fa-play"></i>
                    </button>
                  </div>
                  <div
                    className="bd-welcome__meta-wrap wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="bd-welcome__meta">
                      <span>+30</span>
                      <p>
                        <Link href="/room-one">ROOMS</Link>
                      </p>
                    </div>
                    <div className="bd-welcome__meta-2">
                      <div className="bd-welcome__meta-content">
                        <span>Reservation</span>
                        <Link href="tel:+917710085020">(91) 7710085020</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="4K6Sh1tsAW4"
        onClose={() => {
          openVideoModal();
        }}
      />
    </>
  );
};

export default WellcomeAreaSec;
