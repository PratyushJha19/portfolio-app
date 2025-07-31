import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "../../styles/Footer.css"; // Import the custom CSS

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Connect Section */}
      <div className="text-center">
        <h3 className="fw-bold">
          <span className="heading-text">Connect </span>
          <span className="highlight">With Me</span>
        </h3>
        <p className="p-text">
          Find me on these platforms and let's get in touch
        </p>

        <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
          <div className="footer-col">
            <a href="/contact" className="footer-card text-decoration-none">
              <FaEnvelope className="footer-icon" />
              <div className="footer-label">Gmail</div>
            </a>
          </div>
          <div className="footer-col">
            <a
              href="https://www.linkedin.com/in/pratyush-jha-1348b8263/"
              className="footer-card text-decoration-none"
            >
              <FaLinkedin className="footer-icon" />
              <div className="footer-label">LinkedIn</div>
            </a>
          </div>
          <div className="footer-col">
            <a
              href="https://github.com/PratyushJha19"
              className="footer-card text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="footer-icon" />
              <div className="footer-label">GitHub</div>
            </a>
          </div>
          <div className="footer-col">
            <a
              href="https://twitter.com/"
              className="footer-card text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="footer-icon" />
              <div className="footer-label">Twitter</div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom mt-5 pt-3">
        <div className="footer-social-icons mb-2">
          <FaGithub />
          <FaLinkedin />
          <FaEnvelope />
          <FaTwitter />
        </div>
        <div className="small p-text">
          © 2025 Pratyush Jha • All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
