import React from "react";
import blacktopo from "../assets/blacktopo.png";

const Product = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 my-5">
        <div className="row my-5 py-5">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2">
            <div
              className="card overflow-hidden rounded-5"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#070606",
                boxShadow: "5px 5px 75px 1px #303030",
              }}
            >
              <img
                src={blacktopo}
                className="card-img"
                alt="..."
                height="100%"
              />
              <div className="card-img-overlay">
                <h1
                  className="display-1 mainHeading fw-bold text-body-emphasis"
                  style={{
                    color: "#eeeeee",
                    fontFamily: "Futura-pt, sans-serif",
                    fontSize:
                      "14vh" /* Adjust the font size for large screens */,
                  }}
                >
                  Get 50% Daily Cash Back
                </h1>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6 my-2">
            <div
              className="card overflow-hidden rounded-5"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#070606",
                boxShadow: "5px 5px 75px 1px #303030",
              }}
            >
              <img
                src={blacktopo}
                className="card-img"
                alt="..."
                height="100%"
              />
              <div className="card-img-overlay">
                <h1
                  className="display-1 mainHeading fw-bold text-body-emphasis"
                  style={{
                    color: "#eeeeee",
                    fontFamily: "Futura-pt, sans-serif",
                    fontSize:
                      "4vh" /* Adjust the font size for large screens */,
                  }}
                >
                  Unleash Your Potential
                </h1>
                <div className="col-lg-6 mx-auto">
                  <h2
                    className="lead mb-4 display-5"
                    style={{
                      fontFamily: "Futura-pt, sans-serif",
                      background:
                        "linear-gradient(45deg, rgba(255,153,51,1) 25%, rgba(51,136,255,1) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize:
                        "2.5vh" /* Adjust the font size for large screens */,
                    }}
                  >
                    The ultimate premium credit card for every sport
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
