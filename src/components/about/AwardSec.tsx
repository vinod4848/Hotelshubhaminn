"use client";
import Image from "next/image";
import React from "react";
import "swiper/css/bundle";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import awardSliders from "@/data/award-data";
const AwardSec = () => {
  return (
    <>
      <section className="bd-award-area pt-150 pb-150 p-relative">
        <div className="container">
          <div
            className="row align-items-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-md-8">
              <div className="bd-section__title-wrapper">
                <p className="bd-section__subtitle mb-20">
                  the Hotel Shubham Inn palace awards
                </p>
                <h2 className="bd-section__title mb-60  mmb-30">
                  The Hotel Shubham Inn palace Recognition
                </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bd-award-pagination bd-swiper-pagination justify-content-md-end"></div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-12">
              <div className=" bd-award-active mmt-20">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={30}
                  loop={true}
                  observeParents={true}
                  observer={true}
                  breakpoints={{
                    576: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                  }}
                  pagination={{
                    el: ".bd-award-pagination",
                    clickable: true,
                  }}
                >
                  {awardSliders?.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="bd-award">
                        <div className="bd-award__thumb mb-40">
                          <Image
                            src={item.img}
                            alt="image not found"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </div>
                        <div className="bd-award__content bd-award__content-2">
                          <p> {item.title} </p>
                          <span> {item.year} </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AwardSec;
