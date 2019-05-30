import React from 'react';

import './footer.css';

const Footer = () => {
  return (
    <div className="footer d-flex">
      <h3>
        <a href="#">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="https://github.com/ar-iv/star-db">github</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;