import React from "react";
import Image from "next/image";
import { fadeUpTitle } from "@/data/room-details-static-data";
import RoomFacilities from "./RoomFacilities";
import { idType } from "@/interFace/interFace";
import roomAndSuites from "@/data/roomAndSuitesData";
import Link from "next/link";
const DynamicDetails = ({ id }: idType) => {
  const room = roomAndSuites.find((item) => item.id == id);

  return (
    <>
      <section className="bd-room-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="bd-room-details__wrap mb-60">
                <div className="bd-room-details__thumb-wrap mb-10">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="bd-room-details__thumb mb-30 is-lg">
                        <Image
                          src={room?.img}
                          style={{ width: "100%", height: "100%" }}
                          alt="image not found"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bd-room-details__thumb mb-30">
                        <Image
                          src={room?.img1}
                          style={{ width: "100%", height: "100%" }}
                          alt="image not found"
                        />
                      </div>
                      <div className="bd-room-details__thumb mb-30">
                        <Image
                          src={room?.img2}
                          style={{ width: "100%", height: "100%" }}
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bd-room-details__content mb-75">
                  <h3 className="bd-room-details__title  mb-30">
                    {room?.title}
                  </h3>
                  {fadeUpTitle?.map((item) => (
                    <p key={item.id} className="bdFadeUp">
                      {item.title}
                    </p>
                  ))}

                  {/* facilitys */}
                  <RoomFacilities />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="bd-sidebar__wrap mb-60">
                <div className="bd-booking-3 mb-40 ">
                  <div className="bd-booking-3__content">
                    <h3>
                      <span>{room?.title} </span>
                    </h3>
                    <div>
                      <p>
                        <span>₹{room?.singleOccupancy} Single Occupancy</span>/
                        {room?.time}
                      </p>
                      <p>
                        <span>₹{room?.doubleOccupancy} Double Occupancy</span>/
                        {room?.time}
                      </p>
                      <p>
                        <span>₹{room?.extrabad} Extra bad</span>/{room?.time}
                      </p>
                    </div>
                    <div className="bd-booking-3__tax">
                      <p>
                        <span>
                          <i className="fa-light fa-times"></i> Non-Refundable
                        </span>
                        GST Applicable 12%
                      </p>
                    </div>
                  </div>
                  <div className="bd-booking-3__submit mt-15">
                    <button type="button">
                      <Link href={`/booking-form/${room?.id}`}>
                        BOOK NOW{" "}
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </Link>
                    </button>
                  </div>
                </div>
                <div className="bd-booking-3-info ">
                  <h3 className="bd-booking-3__title">Extra Services</h3>
                  <div className="bd-booking-3__list">
                    <ul>
                      <li>
                        <i className="flaticon-check-circle"></i>Room Cleaning
                      </li>
                      <li>
                        <i className="flaticon-check-circle"></i>Iron & loundry
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DynamicDetails;
