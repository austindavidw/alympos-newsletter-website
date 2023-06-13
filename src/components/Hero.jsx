import React from "react";
import olympiancardnew from "../assets/olympiancardnew.png";

function Hero() {
  return (
    <div className="justify-content-center d-flex col shadow-lg row pt-5 mt-2">
      <div
        className="px-4 pt-5 mb-5 text-center rounded-5 col-12 "
        style={{
          width: "75vw",
          height: "80vh",
          backgroundColor: "#070606",
          boxShadow: "5px 5px 75px 1px #303030",
        }}
      >
        <h1
          className="display-1 mainHeading fw-bold text-body-emphasis"
          style={{
            color: "#eeeeee",
            fontFamily: "Futura-pt, sans-serif",
          }}
        >
          Unleash Your Potential
        </h1>
        <div className="col-lg-6 mx-auto">
          <h2
            className="lead mb-4 display-5"
            style={{
              fontFamily: "Futura-pt, sans-serif",
              color: "#eeeeee",
            }}
          >
            The ultimate premium credit card for every sport
          </h2>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button className="btn btn-lg"></button>
          </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
          <div className="container px-5">
            <img
              src={olympiancardnew}
              alt="olympiancreditcardnew"
              className="img-fluid mb-4"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

{
  /* <div class="card-header justify-content-center col d-flex bg-transparent border-0 mt-2">
        <nav
          className="navbar navbar-fixed-top bg-body-tertiary m-0"
          style={{ width: "80vw" }}
        >
          <div className="container-fluid m-0">
            <a class="navbar-brand m-0" href="#">
              <img
                src={alymposLogoTransparent}
                alt="alymposlogotransparent"
                width="100vw"
                height="70vh"
              />
            </a>
          </div>
        </nav>
      </div>
      <div
        className="col d-flex justify-content-center "
        style={{ backgroundColor: "#070606" }}
      >
        <div
          class="card text-center rounded-5 mt-3 border border-light border-opacity-75 border-1 p-0"
          style={{
            backgroundColor: "#070606",
            height: "80vh",
            width: "80vw",
            // boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 white",
          }}
        >
          <img
            src={}
            class="card-img overflow-hidden img-fluid"
            alt="redtopography"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "90vh",
            }}
          />
          <div class="card-img-overlay container-fluid">
            <div className="row">
              <h1
                class="card-title fw-bold mt-5 pt-5 align-self-center col-12"
                style={{
                  fontFamily: "Futura-pt, sans-serif",
                  color: "#eeeeee",
                  fontSize: "6vw",
                }}
              >
                Unleash Your Potential
              </h1>
              <h4
                class="card-text mt-3 align-self-center col-12"
                style={{
                  fontFamily: "Futura-pt, sans-serif",
                  color: "#eeeeee",
                  fontSize: "3vw",
                }}
              >
                The ultimate premium credit card for every sport
              </h4>
            </div>
            <div className="overflow-hidden" style={{ maxHeight: "37vh" }}>
              <div className="container-fluid px-5">
                <img
                  src={olympiancardnew}
                  alt="olympiancreditcard"
                  className="img-fluid mb-4"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */
}
