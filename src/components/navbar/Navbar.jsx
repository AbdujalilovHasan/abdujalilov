import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="nav-row">
          <div className="author-name">
            <p>Hasan Abduazizovich Abdujalilov</p>
          </div>

          <div className={`nav-links ${open ? "active" : ""}`}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/hasan-abdujalilov/"
            >
              LinkedIn
            </a>
            <span>/</span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://t.me/hasanabdujalilov"
            >
              Telegram
            </a>
            <span>/</span>
            <a target="_blank" rel="noreferrer" href="#">
              Instagram
            </a>
          </div>

          <div className="burger" onClick={() => setOpen(!open)}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;