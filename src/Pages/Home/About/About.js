import React from "react";
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src={person}
            alt=""
            className=" rounded-lg w-4/5 h-full shadow-2xl"
          />
          <img
            src={parts}
            alt=""
            className=" rounded-lg h-full shadow-2xl w-3/5 absolute top-1/2 border-8 left-1/4"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-xl text-orange-700 font-bold">About Us</h1>

          <h2 className="text-4xl font-bold mt-5">
            We are qualified <br /> & of experience <br /> in this field
          </h2>
          <p className="py-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable
          </p>
          <p className="pb-5">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable
          </p>

          <button className="btn bg-orange-600 border-0">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
