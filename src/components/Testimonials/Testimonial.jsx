import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "They turned our vision into a reality with their exceptional web development skills. The website they created for us is not only visually stunning but also highly functional and user-friendly. Their professionalism, attention to detail, and prompt communication made the entire process seamless.",
    },
    {
      img: profilePic2,
      review:
        "From the initial consultation to the final delivery, they displayed a remarkable level of expertise and creativity. The team took the time to understand our specific requirements and delivered a website that perfectly represents our brand and values.",
    },
    {
      img: profilePic3,
      review:
        "They brought our outdated website to life with a modern and sleek design that has already received praise from our customers. The entire team was responsive, and they implemented our feedback promptly, ensuring we got the exact website we envisioned.",
    },
    {
      img: profilePic4,
      review:
        "Their proficiency in the latest technologies and frameworks is evident in the robust and secure website they developed for us. What impressed me the most was their ability to take complex ideas and turn them into simple, intuitive features for our website visitors.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
