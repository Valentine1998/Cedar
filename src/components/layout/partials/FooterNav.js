import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="/#services">Services</Link>
        </li>
        <li>
          <Link to="/#prices">Prices</Link>
        </li>
        <li>
          <Link to="/#about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
