import React from "react";

import { ReactComponent as GithubIconImg } from "../assets/img/github_icon.svg";
import { ReactComponent as LinkedinIconImg } from "../assets/img/linkedin_icon.svg";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h5 className="footer_title">2020, Jussara Soares</h5>
        <h3 className="footer_logo">FASHIONISTA</h3>
        <div className="footer-list">
          <div class="footer-list-item icon-github">
            <a href="https://github.com/jussarasoares" target="_blank">
              <GithubIconImg />
            </a>
          </div>
          <div class="footer-list-item icon-linkedin">
            <a href="https://www.linkedin.com/in/jussaraacs/" target="_blank">
              <LinkedinIconImg />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
