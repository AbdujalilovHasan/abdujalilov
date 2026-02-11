import React from "react";
import "./Footer.css";
import shakeshands from "../../assets/images/shakeshands.svg";

function Footer() {
  const openGmail = () => {
    const email = "abdujalilovhasan171@gmail.com";
    const subject = encodeURIComponent("New Project (Project name)");
    const body = encodeURIComponent("Hi Hasan, I want to discuss a project with you.");
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    
    window.open(gmailUrl, "_blank"); 
  };

  return (
    <div className="footer">
      <div className="footer-block">
        <img src={shakeshands} alt="handshake" />
        <p className="footer-title">Tell us about your next project</p>
        <button className="footer-btn" onClick={openGmail}>
          Email me
        </button>
        <p className="author">Hasan Abdujalilov Abduazizovich @2026</p>
      </div>
    </div>
  );
}

export default Footer;