import React from "react";
import roomBg from "../../../public/assets/img/bg/bd-room.jpg";
import roomAndSuites from "@/data/roomAndSuitesData";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
interface propsType {
  title: string;
  sectionTitle: string;
}
const RoomAndSuitsSec = ({ title, sectionTitle }: propsType) => {
  return (
    <>
      <section className="bd-room-area p-relative pt-150 pb-120">
        <div
          className="bd-room__bg"
          style={{ backgroundImage: `url(${roomBg.src})` }}
        ></div>
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            {roomAndSuites.length &&
              roomAndSuites.map((item) => (
                <div key={item.id} className="col-xxl-4 col-xl-6 col-lg-6">
                  <div className="bd-room mb-30">
                    <div className="bd-room__content">
                      <Link href={`/room-details/${item.id}`}>
                        <div className="bd-room__title mb-20">
                          <h4>{item.title}</h4>
                        </div>

                        <div className="bd-room__price mb-30">
                          <p>
                            ₹ {item.price} <span>/ {item.time} </span>
                          </p>
                        </div>

                        <div className="bd-room__thumb-wrap mb-30">
                          <div className="bd-room__thumb">
                            <Image src={item.img} alt="room image" />
                          </div>

                          <div className="bd-room__details">
                            <p>{item.details}</p>
                            <div className="bd-room__list">
                              <div className="bd-room__list-item">
                                <span>
                                  <i className="flaticon-breakfast"></i>
                                </span>
                                <span>{item.list3}</span>

                                {item.list4 && (
                                  <Fragment>
                                    <i className="fa-light fa-shirt"></i>
                                    <span>{item.list4}</span>
                                  </Fragment>
                                )}

                                {item.list5 && (
                                  <Fragment>
                                    <i className="fa-solid fa-bath"></i>
                                    <span>{item.list5}</span>
                                  </Fragment>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="bd-room__btn">
                        <Link href={`/booking-form/${item.id}`}>
                          <span>book now</span>
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomAndSuitsSec;
