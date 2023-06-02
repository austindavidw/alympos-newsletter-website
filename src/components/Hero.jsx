import React from "react";
import redTopo from "../assets/redTopo.png";
import { TypeAnimation } from "react-type-animation";
import alymposLogoTransparent from "../assets/alymposlogo.png";
import olympiancreditcard from "../assets/olympiancreditcard.png";
import columnwhite from "../assets/columnwhite.png";

function Hero() {
  return (
    <div
      className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"
      style={{ backgroundColor: "#eeeeee" }}
    >
      <header
        className="rounded-5 shadow-lg"
        style={{ backgroundColor: "#070606" }}
      >
        <div
          className="p-4 text-center bg-image container-fluid"
          style={{
            backgroundImage: `url(${redTopo})`,
            height: "95vh",

            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <nav class="navbar sticky-sm-top pt-2 bg-transparent">
            <div class="container m-1">
              <a class="navbar-brand" href="#">
                <img
                  src={alymposLogoTransparent}
                  alt="alymposlogotransparent"
                  width="150vh"
                  height="100vh"
                />
              </a>
            </div>
          </nav>
          <div
            className="mask bg-transparent mt-3"
            style={{ backgroundColor: "#070606" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100 w-100 mt-3 ">
              <div
                className="text-white sticky-md-top z-1 mt-3 container-fluid"
                style={{
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="mt-3 row">
                  <h1
                    className="main-heading col-12 display-5 text-body-emphasis fw-bold"
                    style={{
                      fontFamily: "Futura-pt, sans-serif",
                      color: "#eeeeee",
                      fontSize: "7vh",
                    }}
                  >
                    Unleash Your Potential
                  </h1>
                </div>
                <div className="mt-3 row">
                  <h3
                    style={{
                      fontFamily: "Futura-pt, sans-serif",
                      color: "#eeeeee",
                      fontSize: "4vh",
                    }}
                    className="main-subheading col-12 shadow-lg "
                  >
                    The ultimate premium credit card for every
                  </h3>
                  <h3 className="mt-4">
                    <TypeAnimation
                      sequence={[
                        "Sport",
                        1500,
                        "Journey",
                        1500,
                        "Trailblazer",
                        1500,
                        "Expedition",
                        1500,
                        "Challenge",
                        1500,
                        "Adventure",
                        1500,
                        "Summit",
                        1500,
                      ]}
                      repeat={Infinity}
                      style={{
                        backgroundColor: "#eeeeee",
                        color: "#070606",
                        fontFamily: "Futura-pt, sans-serif",

                        fontSize: "4vh",
                      }}
                      className="rounded-3 p-1 fw-bold fst-italic position-relative"
                    />
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero;
