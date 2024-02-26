import Link from "next/link";
import React from "react";
interface classType {
  customeClass: string;
}
const Footer = ({ customeClass }: classType) => {
  return (
    <>
      <footer className={customeClass}>
        <div className="bd-footer-top pt-100 pb-30">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="bd-footer-widget-wrapper mb-60">
                  <div className="bd-footer-widget-title">
                    <h5>Useful Links</h5>
                  </div>
                  <div className="bd-footer-link">
                    <ul>
                      <li>
                        <Link href="/room-one">Accommodation</Link>
                      </li>
                      <li>
                        <Link href="/about">About Hotel</Link>
                      </li>
                      <li>
                        <Link href="/dining">Dining</Link>
                      </li>
                      <li>
                        <Link href="/contact">Location</Link>
                      </li>
                      <li>
                        <Link href="/about">Experience</Link>
                      </li>
                      <li>
                        <Link href="">Jobs &amp; Career</Link>
                      </li>
                      <li>
                        <Link href="/event">Occasions</Link>
                      </li>
                      <li>
                        <Link href="/contact">Get In Touch</Link>
                      </li>
                      <li>
                        <Link href="/dining">DINING</Link>
                      </li>
                      <li>
                        <Link href="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link href="/event">Events</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="bd-footer-widget-wrapper bd-footer-contact-wrapper mb-60">
                  <div className="bd-footer-widget-title">
                    <h5>Get in Touch</h5>
                  </div>
                  <div className="bd-footer__widget-content">
                    <h4
                      className="bd-footer__widget-title mb-15"
                      style={{ color: "black" }}
                    >
                      Contact us
                    </h4>
                    <p className="mb-30" style={{ color: "black" }}>
                      1st Floor A-Wing, Above SBI Bhaichand Textile Compound{" "}
                      <br />
                      Jainam Compound, LBS Marg Bhandup Mumbai 400078
                    </p>
                    <div className="bd-footer__meta mb-25">
                      <Link href="tel:7710085020" style={{ color: "black" }}>
                        (+91) 77100 58020
                      </Link>
                    </div>
                    <div className="bd-footer__meta">
                      <Link href="mailto:hotelshubhaminn24@gmail.com">
                        <span style={{ color: "black" }}>
                          hotelshubhaminn24@gmail.com
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="bd-footer-btn">
                    <Link href="/room-one" className="bd-btn fill-btn">
                      Reserve Now{" "}
                      <span>
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="bd-footer-widget-wrapper mb-60">
                  <div className="bd-footer-widget-title">
                    <h5>Subscribe Newsletter</h5>
                  </div>
                  <div className="bd-footer-newsletter__form">
                    <form action="#">
                      <div className="bd-footer-newsletter__input is-black">
                        <input type="text" placeholder="Your Email" />
                        <button type="submit">
                          subscribe now{" "}
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="payment-methods mt-30">
                    <strong>We accept</strong>
                    <div className="payment-methods-icons">
                      <span>
                        <i className="fa-brands fa-cc-visa"></i>
                      </span>
                      <span>
                        <i className="fa-brands fa-cc-mastercard"></i>
                      </span>
                      <span>
                        <i className="fa-brands fa-cc-amex"></i>
                      </span>
                      <span>
                        <i className="custom-upi-icon"></i>
                      </span>
                      <span>
                        <i className="custom-paytm-icon"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bd-footer-bottom d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="bd-footer-copyright">
                  <p>
                    Copyright &amp; Integrate360{" "}
                    <span>
                      ©{" "}
                      <Link href="https://www.integrate360.in">
                        Integrate360
                      </Link>
                    </span>{" "}
                    - 2024
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-md-end">
                <div className="bd-footer__list">
                  <div className="bd-footer__social-wrapper justify-content-center justify-content-md-end">
                    <div className="bd-footer__social is-black">
                      <Link href="https://www.facebook.com/" target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </div>
                    <div className="bd-footer__social is-black">
                      <Link href="https://twitter.com/" target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </div>
                    <div className="bd-footer__social is-black">
                      <Link href="https://youtube.com/" target="_blank">
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    </div>
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
