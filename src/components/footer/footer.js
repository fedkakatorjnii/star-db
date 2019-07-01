import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

const Footer = () => {
  return (
    <div className="footer d-flex">
      <h3>
        <Link to="/">StarDB</Link>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="https://github.com/ar-iv/star-db" target="_blank">github</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;