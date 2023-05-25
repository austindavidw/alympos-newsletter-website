import React from "react";
import redTopo from "../assets/redTopo.png";
import { TypeAnimation } from "react-type-animation";
import alymposLogoTransparent from "../assets/alymposlogo.png";

function Hero() {
  return (
    <div
      className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"
      style={{ backgroundColor: "#eeeeee" }}
    >
      <header className="rounded-5" style={{ backgroundColor: "#070606" }}>
        <div
          className="p-4 text-center bg-image container-fluid"
          style={{
            backgroundImage: `url(${redTopo})`,
            height: "90vh",

            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <nav class="navbar sticky-sm-top pt-0 bg-transparent">
            <div class="container m-0">
              <a class="navbar-brand" href="#">
                <img
                  src={alymposLogoTransparent}
                  alt="alymposlogotransparent"
                  width="120"
                  height="80"
                />
              </a>
            </div>
          </nav>
          <div
            className="mask bg-transparent mt-3"
            style={{ backgroundColor: "#070606" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100 mt-3 ">
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
                    className="main-heading col-12"
                    style={{
                      fontSize: "6em",
                      fontFamily: "Futura-pt, sans-serif",
                      color: "#eeeeee",
                    }}
                  >
                    Unleash Your Potential
                  </h1>
                </div>
                <div className="mt-3 row">
                  <h3
                    style={{
                      fontSize: "2em",
                      fontFamily: "Futura-pt, sans-serif",
                      color: "#eeeeee",
                    }}
                    className="main-subheading col-12"
                  >
                    The ultimate premium credit card for every
                  </h3>
                </div>
                <div className="mt-3">
                  <TypeAnimation
                    sequence={[
                      "Sport",
                      2500,
                      "Adventure",
                      2500,
                      "Challenge",
                      2500,
                      "Journey",
                      2500,
                      "Summit",
                      2500,
                      "Trailblazer",
                      2500,
                      "Expedition",
                      2500,
                    ]}
                    speed={50}
                    style={{
                      fontSize: "2em",
                      color: "#eeeeee",
                      fontFamily: "Futura-pt, sans-serif",
                    }}
                    repeat={Infinity}
                    className="main-subsubheading fw-bold "
                  />
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
