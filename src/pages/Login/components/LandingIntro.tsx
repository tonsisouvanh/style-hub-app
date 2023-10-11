import React from "react";
import loginmain from "../../../assets/svg/loginmain.svg";

const LandingIntro = () => {
  return (
    <div className="hero min-h-full rounded-l-xl bg-base-200">
      <div className="hero-content py-12">
        <div className="max-w-md">
          <div className="space-y-10 pr-0 md:w-1/2 md:pr-16 lg:w-3/5 lg:pr-0">
            <h1 className="title-font text-3xl font-medium  md:text-5xl">
              By IDEVU
            </h1>
            <p className="mt-4 text-lg leading-relaxed md:text-2xl">
              {
                "Login to access your account and start exploring our amazing features!"
              }
            </p>
            <img className="" src={loginmain} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingIntro;
