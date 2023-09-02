import React from "react";
import heroImg from "/images/hero-person.png";
import siteLogo from "/images/main-logo.png";

const Hero = () => {
  const navigation = [
    { title: "Home", path: "" },
    { title: "Courses", path: "" },
    { title: "Contact Us", path: "" },
  ];

  const features = [
    "30 days free trail.",
    "Personalized onboarding.",
    "Access to all courses.",
  ];

  return (
    <div className="bg-[#F8FDF9]">
      <header>
        <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
          <a href="">
            <img
              src="https://z8tech.dev/wp-content/uploads/2022/11/tras_ZL-01-removebg-preview.png"
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </a>
          <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
            {navigation.map((item, idx) => (
              <li className=" text-slate-700 font-medium" key={idx}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section className=" mt-14 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-left lg:text-left">
          <h1 className="text-slate-700 font-semibold text-4xl xl:text-[42px] max-w-xl  sm:mx-auto lg:ml-0">
            Join Us To Get Your Dream
            <span className=" text-slate-700"> Courses</span>
          </h1>
          <p className=" text-slate-700 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            repellat necessitatibus reiciendis porro esse repudiandae quam qui
            praesentium architecto sunt cupiditate ducimus veritatis quia.
          </p>
          <ul className="space-y-3 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            {features.map((items, idx) => (
              <li key={idx} className="flex items-center gap-5">
                <div className=" border border-[#55C360] rounded-full p-[1px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#55C360]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                {items}
              </li>
            ))}
          </ul>
          <div className="pt-7 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex sm:justify-start max-w-xl  sm:mx-auto lg:ml-0">
            <a
              href=""
              className="px-7 py-3 w-full bg-[#55C360] text-white font-medium text-center rounded-md shadow-md block sm:w-auto"
            >
              Join With Us
            </a>
          </div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <img
            src={heroImg}
            className="w-full mx-auto sm:w-[80%] md:w-[70%] lmd:w-[60%] lg:w-[90%] "
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
