"use client";
import React, { useContext } from "react";
import logoBlack from "../../../public/assets/img/logo/Artboard 2@2x.png";
import Image from "next/image";
import Link from "next/link";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import useScrollDirection from "@/hooks/stacky-header";
import headerBg from "../../../public/assets/img/bg/hero-bg.jpg";
import Menu from "./Menu";

const HearderThree = () => {
  const { toggleSideMenu } = useContext(AppContext) as AppContextType;
  const scrollDirection = useScrollDirection(null);
  return (
    <>
      <header>
        <div className="bd-header transparent-header">
          <div
            className="bd-header__bg"
            style={{ backgroundImage: `url(${headerBg.src})` }}
          ></div>
          <div
            className="bd-header__top d-none d-xl-block"
            id="header-top_sticky"
          >
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="bd-header-top-wrapper d-flex justify-content-between align-items-center">
                    <div className="bd-header-top-left">
                      <div
                        onClick={toggleSideMenu}
                        className="bd-header-hamburger offcanvas-open-btn"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div className="bd-header__meta-item d-none bd-header-menu-meta d-lg-flex align-items-center">
                      <div className="bd-header__meta-icon">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div className="bd-header__meta-text">
                        <p>
                          <Link href="tel:+917710085020">+917710085020</Link>
                        </p>
                      </div>
                    </div>
                    <div className="bd-header-top-right d-none d-sm-block">
                      <div className="bd-header-top-btn">
                        <Link href="/booking-form" className="bd-btn">
                          book now
                          <span>
                            <i className="fa-regular fa-arrow-right-long"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="header-sticky"
            className={`bd-header-bottom bd-header-2__main theme-bg ${
              scrollDirection === "down" ? "header-sticky" : " "
            }`}
            style={{ backgroundColor: "#606062" }}
          >
            <div className="container">
              <div className="mega-menu-wrapper p-relative">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="bd-header__bottom-left">
                    <div className="bd-header__logo">
                      <Link href="/">
                        <Image
                          src={logoBlack}
                          style={{ width: "70%", height: "70%" }}
                          alt="image not found"
                        />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="bd-main-menu d-none d-lg-flex align-items-center"
                    style={{ marginRight: "102px", color: "yellow" }}
                  >
                    <nav id="mobile-menu">
                      <ul>
                        <Menu />
                      </ul>
                    </nav>
                  </div>
                  <div
                    onClick={toggleSideMenu}
                    className="bd-header-hamburger offcanvas-open-btn d-xl-none"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HearderThree;
