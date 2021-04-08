import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faBuilding, faUniversity } from "@fortawesome/free-solid-svg-icons";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Services = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Services",
    paragraph: "We offer multiple services for every sewer setup. Contact us to see how we can help you!",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div style={{ marginTop: "0px" }} className="center-content">
            <div>
              <div className={tilesClasses}>
                <div className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div
                        style={{ fontWeight: "900", color: "white", padding: "20px 25px", borderRadius: "10px" }}
                        className="features-tiles-item-image mb-16"
                      >
                        <FontAwesomeIcon icon={faHome} style={{ fontSize: "50px" }} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 pt-0 mb-8">Septic Services</h4>
                      <p className="m-0 text-sm">
                        <p>
                          Pumping
                          <br />
                          Maintenance
                          <br />
                          Repair
                          <br />
                          Installation
                        </p>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div
                        style={{ fontWeight: "900", color: "white", padding: "20px 25px", borderRadius: "10px" }}
                        className="features-tiles-item-image mb-16"
                      >
                        <FontAwesomeIcon icon={faBuilding} style={{ fontSize: "50px" }} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">Municipal Services</h4>
                      <p className="m-0 text-sm">Sewer Emergency Services</p>
                    </div>
                  </div>
                </div>

                <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div
                        style={{ fontWeight: "900", color: "white", padding: "20px 25px", borderRadius: "10px" }}
                        className="features-tiles-item-image mb-16"
                      >
                        <FontAwesomeIcon icon={faBuilding} style={{ fontSize: "50px" }} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">Commercial Services</h4>
                      <p className="m-0 text-sm">
                        Grease trap pumping
                        <br />
                        Drain Cleaning
                        <br />
                        Sand Trap Pumping
                        <br />
                        Parking Garage Cleaning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Services.propTypes = propTypes;
Services.defaultProps = defaultProps;

export default Services;
