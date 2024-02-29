"use client";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import Link from "next/link";
import roomAndSuites from "@/data/roomAndSuitesData";
import background from "../../../public/assets/img/bg/bd-room.jpg";
import { Fragment } from "react";
const RoomSuiteSection = () => {
  return (
    <>
      <section className="bd-room-area p-relative pt-150 pb-150 fix">
        <div
          className="bd-room__bg"
          style={{ backgroundImage: `url(${background.src})` }}
        ></div>
        <div className="container">
          <div
            className="row align-items-end mb-25 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-xl-6 col-lg-6 mb-0">
              <div className="bd-section__title-wrapper is-white">
                <p
                  className="bd-section__subtitle mb-20"
                  style={{ color: "#ee313d " }}
                >
                  Rooms
                </p>
                <h2 className=" bd-section__title mb-50 mmb-30">
                  Our Rooms & Suites
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 ">
              <div className="section-btn d-flex justify-content-lg-end mb-50">
                <Link href="/room-one" className="bd-btn">
                  All rooms{" "}
                  <span>
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="bd-room-slider-three ryl-overflow-none">
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                loop={false}
                observeParents={true}
                observer={true}
                centeredSlides={false}
                breakpoints={{
                  768: {
                    slidesPerView: 1.5,
                  },
                  992: {
                    slidesPerView: 2,
                  },

                  1400: {
                    slidesPerView: 2.4,
                  },
                  1700: {
                    slidesPerView: 3,
                  },
                }}
                navigation={{
                  nextEl: ".bd-room-slider-three-next",
                  prevEl: ".bd-room-slider-three-prev",
                }}
              >
                {roomAndSuites.length &&
                  roomAndSuites.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div>
                        <div className="bd-room mb-0">
                          <div className="bd-room__content">
                            <h4 className="bd-room__title mb-20">
                              <Link href={`/room-details/${item.id}`}>
                                {item.title}
                              </Link>
                            </h4>
                            <div className="bd-room__price mb-30">
                              <p>
                                ₹ {item.price} <span>/ {item.time} </span>
                              </p>
                            </div>
                            <div className="bd-room__thumb-wrap mb-30">
                              <div className="bd-room__thumb">
                                <Image
                                  src={item.img}
                                  style={{ width: "100%", height: "100%" }}
                                  alt="room image"
                                />
                              </div>

                              <div className="bd-room__details">
                                <p>{item.details}</p>
                                <div className="bd-room__list">
                                  <div className="bd-room__list-item">
                                    <span>
                                      {" "}
                                      <i className="flaticon-breakfast"></i>
                                    </span>
                                    <span>{item.list3}</span>

                                    {item.list4 && (
                                      <Fragment>
                                        <span>
                                          <i className="flaticon-bathtub">👕</i>
                                        </span>
                                        <span>{item.list4}</span>
                                      </Fragment>
                                    )}

                                    {item.list5 && (
                                      <Fragment>
                                        <span>
                                          <i className="flaticon-laundry">🧺</i>
                                        </span>
                                        <span>{item.list5}</span>
                                      </Fragment>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bd-room__btn">
                              <Link href={`/booking-form/${item.id}`}>
                                <span>book now</span>
                                <i className="fa-regular fa-arrow-right-long"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
          <div
            className="bd-room-slider-three-nav mt-35 mts-30 d-sm-none wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="bd-room-slider-three-prev square-nav">
              <i className="fa-light fa-angle-left"></i>
            </div>
            <div className="bd-room-slider-three-next square-nav">
              <i className="fa-light fa-angle-right"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomSuiteSection;
