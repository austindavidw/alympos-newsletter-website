import React from "react";
import { useState } from "react";
import alymposLogoTransparent from "../assets/alymposlogo.png";
import blacktopo from "../assets/blacktopo.png";

function Header() {
  const [click, setClick] = useState(true);

  function handleClick() {
    setClick(!click);
  }

  return (
    <div className="justify-content-center d-flex col mb-0 mt-0 pt-1 border-0 bg-transparent">
      <div
        className="p-0 p-2 rounded-5 bg-transparent  mt-4"
        style={{
          width: "100vw",
        }}
      >
        <div className="container-fluid px-5 d-flex">
          <a href="/" className="">
            <img
              src={alymposLogoTransparent}
              alt="alymposlogotransparent"
              width={90}
              height={60}
            />
          </a>
          <div className="container-fluid d-flex justify-content-end">
            <div className="mx-3 mt-2">
              <div
                className="collapse collapse-horizontal"
                id="collapseWidthExample"
              >
                <form className="d-flex">
                  <div>
                    <input
                      type="text"
                      class="form-control"
                      id="inlineFormInputGroupEmail"
                      placeholder="Email"
                      style={{ fontFamily: "Futura-pt, sans-serif" }}
                    />
                  </div>
                  <div className="mx-2">
                    <button
                      type="submit"
                      class="btn btn-outline-warning"
                      style={{ fontFamily: "Futura-pt, sans-serif" }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <p>
              <button
                class="btn fw-bold rounded-5 d-flex mt-2 px-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseWidthExample"
                data-bs-auto-close="outside"
                aria-expanded="false"
                aria-controls="collapseWidthExample"
                style={{
                  backgroundColor: "#800000",
                  color: "#eeeeee",
                  fontFamily: "Futura-pt, sans-serif",
                }}
                onClick={handleClick}
              >
                {click ? "Sign Up" : "Close"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
