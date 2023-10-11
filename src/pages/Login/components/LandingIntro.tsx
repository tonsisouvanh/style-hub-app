import React from "react";
import loginmain from "../../../assets/svg/loginmain.svg";

const LandingIntro = () => {
  return (
    <div className="hero min-h-full rounded-l-xl bg-base-200">
      <div className="hero-content py-12">
        <div className="max-w-md">
          <h1 className="text-center text-3xl font-bold ">
            {/* <img
              src="/logo192.png"
              className="mask mask-circle mr-2 inline-block w-12"
              alt="dashwind-logo"
            /> */}
            IDEVU
          </h1>

          <div className="mt-12 text-center">
            {/* <loginmain className="custom-svg" style={{ fill: "blue" }} /> */}
          </div>

          {/* Importing pointers component */}
          {/* <TemplatePointers /> */}
        </div>
      </div>
    </div>
  );
};

export default LandingIntro;
