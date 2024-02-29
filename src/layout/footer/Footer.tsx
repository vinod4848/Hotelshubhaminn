import React from "react";
import logo from "../../../public/assets/img/logo/Artboard 2@2x.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="bd-footer-area">
          <div className="bd-footer-wrapper p-relative pt-140">
            <div className="container">
              <div className="bd-footer-top">
                <div className="row align-items-center">
                  <div className="col-12 text-center">
                    <div className="bd-footer-top__widget-1 mb-40">
                      <div className="bd-footer__logo-wrap">
                        <div className="bd-footer__logo mx-auto text-center">
                          <Link href="/">
                            {" "}
                            <Image
                              style={{ width: "100%", height: "auto" }}
                              src={logo}
                              alt="img not found!"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="bd-footer-line">
                    <hr />
                  </div>
                </div>
              </div>
              <div className="bd-footer pt-45 p-relative">
                <div className="row">
                  <div className="col-xxl-4 col-xl-3 col-lg-6 col-md-6 col-sm-6">
                    <div className="bd-footer__widget bd-footer__widget-1 mb-50">
                      <div className="bd-footer__widget-content">
                        <h4 className="bd-footer__widget-title mb-15">
                          Contact us
                        </h4>
                        <p className="mb-30">
                          1st Floor A-Wing, Above SBI Bhaichand Textile Compound{" "}
                          <br />
                          Jainam Compound, LBS Marg Bhandup Mumbai 400078
                        </p>
                        <div className="bd-footer__meta mb-25">
                          <Link href="tel:7710085020">(+91) 77100 58020</Link>
                        </div>
                        <div className="bd-footer__meta">
                          <Link href="mailto:hotelshubhaminn24@gmail.com">
                            <span>hotelshubhaminn24@gmail.com</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6">
                    <div className="bd-footer__widget bd-footer__widget-2 mb-50">
                      <div className="bd-footer__widget-content">
                        <h4 className="bd-footer__widget-title mb-15">
                          Rooms & Suites
                        </h4>
                        <div className="bd-footer__list mb-35">
                          <ul>
                            <li>
                              <Link href="/">Deluxe Room</Link>
                            </li>
                            <li>
                              <Link href="/room-one">Super Deluxe Room</Link>
                            </li>
                            <li>
                              <Link href="/room-two">Premium Room</Link>
                            </li>
                            <li>
                              <Link href="/room-two">Suite Room</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 col-sm-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3768.9582305776707!2d72.93456397440688!3d19.153305582067315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDA5JzExLjkiTiA3MsKwNTYnMTMuNyJF!5e0!3m2!1sen!2sin!4v1709020347509!5m2!1sen!2sin"
                      style={{
                        border: 0,
                        width: "100%",
                        height: "250px",
                        marginLeft: "-15px",
                      }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="bd-footer-line">
                    <hr />
                  </div>
                </div>
              </div>
              <div className="bd-footer__copyright pt-15 pb-35">
                <div className="bd-footer__copyright-wrap d-flex justify-content-center">
                  <div className="bd-footer__copyright-text">
                    <p>
                      &copy;{" "}
                      <Link
                        href="https://www.integrate360.in"
                        rel="nofollow"
                      ></Link>
                      2024 Hotel Shubham Inn. All Rights Reserved. Designed &
                      Developed by Integrate 360
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
