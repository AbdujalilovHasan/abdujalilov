import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./Skills.css";

import ts from "../../assets/images/typescript.svg";
import sass from "../../assets/images/sass.svg";
import tailwind from "../../assets/images/tailwindcss.svg";
import bootstrap from "../../assets/images/bootstrap.svg";
import js from "../../assets/images/javascript.svg";
import postman from "../../assets/images/postman.svg";
import html from "../../assets/images/html5.svg";
import git from "../../assets/images/git.svg";
import redux from "../../assets/images/redux.svg";
import reactIcon from "../../assets/images/react.svg";
import css from "../../assets/images/html3.svg";

const skills = [
  sass,
  tailwind,
  bootstrap,
  js,
  postman,
  html,
  git,
  ts,
  redux,
  reactIcon,
  css,
];

// loop uchun yetarli miqdor
const duplicatedSkills = [...skills, ...skills, ...skills];

function Skills() {
  return (
    <div className="skills">
      <Swiper
        loop
        speed={6000}
        spaceBetween={40}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 4 },
          425: { slidesPerView: 6 },
          768: { slidesPerView: 8 },
          1024: { slidesPerView: 11 },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {duplicatedSkills.map((icon, index) => (
          <SwiperSlide key={index}>
            <div className="icon">
              <img src={icon} alt="skill" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Skills;