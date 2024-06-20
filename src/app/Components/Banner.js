import React, { useEffect } from "react";
import hero_img from "../../../assets/img/hero-img.png";
import Image from "next/image";
import "../CSS/HomePage.css";
import Button from "./Button";

const Banner = () => {
  return (
    <section id="hero">
        <div className="row ">
        <div className="lg:flex justify-between ">
         
          <div
            className="sm:order-2  hero-img aos-init aos-animate"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <Image 
            width={500} 
            height={500}
             src={hero_img} className="animated" alt="image" />
          </div>

          <div className="sm:order-1">
            <h1 data-aos="fade-up" className="aos-init aos-animate">
              Grow your business with Akeshya
            </h1>
            <h2
              data-aos="fade-up"
              data-aos-delay="400"
              className="aos-init aos-animate"
            >
              We are team of talented website designers, developers &amp;
              digital marketeers
            </h2>
            <div
              data-aos="fade-up"
              data-aos-delay="800"
              className="aos-init aos-animate"
            ></div>
            <Button name="Get Started" />
          </div>

          </div>
        </div>
    </section>
  );
};

export default Banner;
