import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import { useLocation, BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faDesktop } from "@fortawesome/free-solid-svg-icons";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, ...props }) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames("hero-inner section-inner", topDivider && "has-top-divider", bottomDivider && "has-bottom-divider");

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Cedar <span className="text-color-primary">Septic and Sewer</span>
            </h1>
            <div className="container-xs">
              <p className="m-0  reveal-from-bottom" data-reveal-delay="400">
                Licensed – Bonded – Insured
                <br />
                MPCA License #4150
              </p>
              <p
                className="m-0  reveal-from-bottom"
                data-reveal-delay="400"
                style={{ color: "white", fontWeight: "900", margin: "7px 0px 10px 0px" }}
              >
                For regular maintenance and pumping, call, text or book online now. We are available 24/7 for septic emergencies.
              </p>
              <div style={{ marginTop: "25px" }} className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Link style={{ width: "100%", margin: "8px" }} to="/booking">
                    <Button tag="a" color="primary" wideMobile>
                      <FontAwesomeIcon style={{ marginTop: "3px" }} icon={faDesktop} />
                      &nbsp;Book Online
                    </Button>
                  </Link>
                  <Button tag="a" color="primary" wideMobile href="mailto:Cedar.septic@gmail.com">
                    <FontAwesomeIcon style={{ marginTop: "3px" }} icon={faEnvelope} />
                    &nbsp;Email
                  </Button>
                  <Button tag="a" color="primary" wideMobile href="tel:763-218-1397">
                    <FontAwesomeIcon style={{ marginTop: "3px", marginLeft: "0px", marginRight: "0px" }} icon={faPhone} />
                    &nbsp;Call/Text
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a data-video="https://player.vimeo.com/video/174002812" href="#0" aria-controls="video-modal" onClick={openModal}>
              <Image className="has-shadow" src={require("./../../assets/images/truck.jpg")} alt="Hero" width={896} height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
