import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

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
            <div className="container-xs">
              <h5 style={{ marginTop: "-30px", marginBottom: "0", textDecoration: "underline" }}>Sewer Services</h5>
              <p>
                Pumping
                <br />
                Maintenance
                <br />
                Repair
                <br />
                Installation
              </p>
              <h5 style={{ marginBottom: "0", textDecoration: "underline" }}>Municipal Services</h5>
              <p>
                Lift Station Cleaning
                <br />
                Sewer Emergency Services
              </p>
              <h5 style={{ marginBottom: "0", textDecoration: "underline" }}>Commercial Services</h5>
              <p>
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
    </section>
  );
};

Services.propTypes = propTypes;
Services.defaultProps = defaultProps;

export default Services;
