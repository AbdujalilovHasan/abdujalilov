import React, { useEffect, useState } from "react";
import "./Hero.css";
import robot from "../../assets/images/robot.jpg";

function Hero() {
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (window.innerWidth < 768) return; 

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;

      const x = e.clientX - innerWidth / 2;
      const y = e.clientY - innerHeight / 2;

      const rotateX = (y / innerHeight) * 12;
      const rotateY = (x / innerWidth) * 12;

      setStyle({
        transform: `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="info">
      <div className="frame-img">
        <div className="author-img" style={style}>
          <img src={robot} alt="robot" />
        </div>
      </div>

      <h1 className="title">Frontend Developer</h1>
      <p className="subtitle">
        JavaScript, React.js, TypeScript experience
      </p>
    </div>
  );
}

export default Hero;