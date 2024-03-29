"use client";
import React from "react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import roomAndSuites from "@/data/roomAndSuitesData";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
const RoomsSlider = () => {
  return (
    <>
      <section className="bd-room-area p-relative fix">
        <div className="bd-room-active-2 wow fadeInUp" data-wow-delay=".5s">
          <Swiper
            modules={[Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            loop={true}
            observeParents={true}
            observer={true}
            centeredSlides={true}
            autoHeight={true}
            breakpoints={{
              576: {
                slidesPerView: 1.2,
              },

              768: {
                slidesPerView: 1.5,
              },
              992: {
                slidesPerView: 2,
              },

              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3.5,
              },
              1600: {
                slidesPerView: 3.5,
              },
            }}
            pagination={{
              el: ".bd-room-pagination-2",
              clickable: true,
            }}
          >
            {roomAndSuites?.map((item) => (
              <SwiperSlide key={item.id}>
                <div>
                  <div className="bd-room bordered">
                    <div className="bd-room__content">
                      <h4 className="bd-room__title mb-20">
                        <Link href={`/room-details/${item.id}`}>
                          {" "}
                          {item.title}{" "}
                        </Link>
                      </h4>
                      <div className="bd-room__price mb-30">
                        <p>
                          ₹{item.price} <span>/{item.time}</span>
                        </p>
                      </div>

                      <div className="bd-room__details">
                        <p>{item.details}</p>
                        <div className="bd-room__list">
                          <div className="bd-room__list-item">
                           <span> <i className="flaticon-breakfast"></i></span>
                            <span>{item.list3}</span>

                            {item.list4 && (
                              <Fragment>
                                <span><i className="flaticon-bathtub"></i></span>
                                <span>{item.list4}</span>
                              </Fragment>
                            )}

                            {item.list5 && (
                              <Fragment>
                                <span><i className="flaticon-laundry"></i></span>
                                <span>{item.list5}</span>
                              </Fragment>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="bd-room__btn">
                        <Link href={`/room-details/${item.id}`}>
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

          <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".5s">
              <div className="col-12">
                <div className="bd-room__pagination-wrap d-flex justify-content-center d-md-none mt-70 mmt-40">
                  <div className="bd-room-pagination-2 bd-swiper-pagination mb-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomsSlider;
