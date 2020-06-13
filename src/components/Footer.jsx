import React from 'react';

import { ReactComponent as GithubIconImg } from '../assets/img/github_icon.svg';
import { ReactComponent as LinkedinIconImg } from '../assets/img/linkedin_icon.svg';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h5 className="footer_title">
          {new Date().getFullYear()} - Jussara Soares
        </h5>
        <h3 className="footer_logo">FASHIONISTA ©</h3>
        <div className="footer-list">
          <div className="footer-list-item icon-github">
            <a
              href="https://github.com/jussarasoares"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIconImg />
            </a>
          </div>
          <div className="footer-list-item icon-linkedin">
            <a
              href="https://www.linkedin.com/in/jussaraacs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIconImg />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
