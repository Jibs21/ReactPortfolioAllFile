import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import reportingweb from "../../img/reportingweb.png";
import Ecommerce from "../../img/ecommerce.png";
import djangoweb from "../../img/djangoweb.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent</span>
      <span>PROJECTS</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src= {reportingweb} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src= {Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src= {djangoweb} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
