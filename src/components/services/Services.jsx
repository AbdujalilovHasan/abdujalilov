import React from "react";
import "./Services.css";
import uiux from "../../assets/images/ux-design.svg";
import branding from "../../assets/images/branding.svg";
import smart from "../../assets/images/smart-devices.svg";
import app from "../../assets/images/app-development.svg";

function Services() {
  return (
    <div className="services container">
      <h2 className="services-title">
        Collaborate with brands and agencies to create impactful results.
      </h2>

      <div className="services-list">
        <div className="service-card">
            <div className="service-icon">
                <img src={uiux} alt="" />
            </div>
          <h3>UX&UI</h3>
          <p>
            Designing intuitive, efficient, and enjoyable interfaces
          </p>
        </div>

        <div className="service-card">
            <div className="service-icon">
                <img src={smart} alt="" />
            </div>
          <h3>Web and mobile app</h3>
          <p>
            Turning ideas into amazing web and mobile app experiences
          </p>
        </div>

        <div className="service-card">
            <div className="service-icon">
                <img src={branding} alt="" />
            </div>
          <h3>Design and creativity</h3>
          <p>
            Creating visually stunning designs that connect with audiences
          </p>
        </div>

        <div className="service-card">
            <div className="service-icon">
                <img src={app} alt="" />
            </div>
          <h3>Development</h3>
          <p>
            Bring your vision to life with the latest technology and design trends
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;