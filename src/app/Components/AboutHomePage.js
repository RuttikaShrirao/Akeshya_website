import Button from "./Button";
import counts from "../../../assets/img/counts-img.svg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../CSS/HomePage.css";
import services from "./Data";
import process from "./Data";
import clients from "./Data";
import feature from "./Data";
import counter from "./Data";
import {
  RiCheckDoubleFill,
  RiMapPinLine,
  RiMailSendLine,
  RiPhoneLine,
} from "react-icons/ri";
import Image from "next/image";
import { useState } from "react";

const AboutHomePage = () => {
  const [counterStart, setCounterStart] = useState(false);
  return (
    <div>
      {/* client section */}
      <section id="clients" className="clients clients">
        <div className="container">
          <div className="row lg:columns-6 md:columns-3 sm: columns-2">
            {clients.clients.map((data, i) => (
              <div
                key={i}
                className={`${i == 4 ? "clints-logo" : ""} ${
                  i == 2 ? "clint-Ro-logo " : ""
                }`}
              >
                <Image
                  src={data.imgName}
                  alt="Image"
                  width="auto"
                  className="aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* about us */}
      <section id="about" className="about">
        <div className="container">
          <div
            className="section-title aos-init aos-animate"
            data-aos="fade-up"
          >
            <h2>About Us</h2>
          </div>

          <div className="row lg:columns-2 sm:columns-1 content">
            <div
              className=" aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <p>
                We are Akeshya, a firm that specializes in web design and
                marketing. We help transform ideas into reality with a team of
                passionate graphic designers, web developers, and seasoned
                marketing advisors.
              </p>
              <ul>
                <li>
                  <RiCheckDoubleFill size={22} />
                  We started with a simple idea: do what is best for the client.
                </li>
                <li>
                  <RiCheckDoubleFill size={35} /> Our methodical and individual
                  approach to each project delivers the finest possible results
                  for your media.
                </li>
                <li>
                  <RiCheckDoubleFill size={45} /> Our day-to-day work is to
                  solve your problems utilising the most up-to-date, practical
                  adaptive technology, and we have a lot of fun doing.
                </li>
              </ul>
            </div>
            <div
              className=" pt-lg-0 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <p>
                We're professional, but we're also friendly, and we'll always
                pay attention to your concerns. We expect to work with
                innovative people that have an open mind and are dedicated to
                making every idea a reality. We want to hear from you if you're
                interested in SEO, have Web Development ideas, or require a
                graphic designer who can match your goals.
              </p>
              <Button name="Learn More" />
            </div>
          </div>
        </div>
      </section>

      {/* conter */}
      <section id="counts" className="counts">
        <div className="container">
          <div className="row lg:columns-2 items-center">
            <div
              className="image aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <Image src={counts} alt="Image" />
            </div>

            <div
              className="col-xl-7 d-flex align-items-stretch pt-12 pt-xl-0 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <div className="content d-flex flex-column justify-content-center">
                <div className="row lg:columns-2  items-center">
                  {counter.counter.map((data, i) => (
                    <div key={i} className=" d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        {data.icon}
                        <ScrollTrigger
                          onEnter={() => setCounterStart(true)}
                          onExit={() => setCounterStart(false)}
                        >
                          <span className="purecounter">
                            {counterStart && (
                              <CountUp
                                start={0}
                                end={data.end}
                                duration={2}
                                delay={0}
                              />
                            )}
                          </span>
                        </ScrollTrigger>

                        <p>{data.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="services" className="services">
        <div className="container">
          <div
            className="section-title aos-init aos-animate"
            data-aos="fade-up"
          >
            <h2>Services</h2>
            <p>
              Akeshya will serve as your consultant and development partner to
              help you turn your idea into a reality.
            </p>
          </div>

          <div className="row lg:columns-4 sm:flex-wrap">
            {services.services.map((data, i) => {
              return (
                <div key={i} className="align-items-stretch mb-5 mb-lg-0">
                  <div
                    className="icon-box aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon"> {data.icon} </div>

                    <h4 className="title">
                      <a href="">{data.role}</a>
                    </h4>
                    <p className="description">{data.about}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* our services */}
      <section id="more-services" className="more-services">
        <div className="container">
          <div
            className="section-title aos-init aos-animate"
            data-aos="fade-up"
          >
            <h2>Our Process</h2>
            <p>
              Over the years we've evolved a tested method for attaining
              achievement for each one of our clients.
            </p>
          </div>

          <div className="row lg:columns-2">
            {process.process.map((data, i) => (
              <div key={i} className=" d-flex align-items-stretch">
                <div
                  className="card aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="">{data.role}</a>
                    </h5>
                    <p className="card-text">{data.about}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CORE FEATURES */}
      <section id="features" className="features">
        <div className="container">
          <div
            className="section-title aos-init aos-animate"
            data-aos="fade-up"
          >
            <h2>Our Core Features</h2>
            <p>
              Akeshya is a forward-thinking and intelligent design firm that is
              technically and creatively capable of transforming your brand into
              its best digital self. Our approach to design and development
              results in compelling, engaging branding and immersive digital
              experiences that provide a value for money.
            </p>
          </div>

          <div
            className="row lg:columns-4 md:columns-3 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {feature.feature.map((data, i) => (
              <div key={i} className="icon-box">
                <div className="icons">{data.img}</div>
                <h3>
                  <a href="">{data.text}</a>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT US */}
      <section id="contact" className="contact">
        <div className="container">
          <div
            className="section-title aos-init aos-animate"
            data-aos="fade-up"
          >
            <h2>Contact Us</h2>
          </div>

          <div className="row flex flex-wrap">
            <div
              className=" aos-init aos-animate w-80"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="contact-about ">
                <h3>Akeshya</h3>
                <p>
                  Designers, developers marketeers capable of delivering
                  solutions according to your needs,
                </p>
              </div>
            </div>

            <div
              className=" mt-4 mt-md-0 aos-init aos-animate w-96"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="info">
                <div className="flex items-start ">
                  <RiMapPinLine size={39} color="#14279b" />
                  <p>
                    26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh
                    524004
                  </p>
                </div>

                <div className="flex  items-start">
                  <RiMailSendLine size={30} color="#14279b" />
                  <p>info@akeshya.com</p>
                </div>

                <div className="flex items-start">
                  <RiPhoneLine size={30} color="#14279b" />
                  <p>+91 94942 40922 </p>
                </div>
              </div>
            </div>

            <div
              className=" aos-init aos-animate w-96"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <form className="php-email-form" method="POST" name="contact">
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHomePage;
