import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faBuilding, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Pricing = ({
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
    title: "Pricing",
    paragraph: "We offer multiple Pricing for every sewer setup. Contact us to see how we can help you!",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container" id="prices">
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
                        <FontAwesomeIcon icon={faWindowMaximize} style={{ fontSize: "50px" }} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 pt-0 mb-8">One Tank</h4>
                      <p>1000 Gallons</p>
                      <p className="m-0 ">
                        <h2 className="m-0" style={{ color: "green" }}>
                          $295
                        </h2>
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
                        <FontAwesomeIcon icon={faWindowMaximize} style={{ fontSize: "50px" }} />
                        &nbsp;
                        <FontAwesomeIcon icon={faWindowMaximize} style={{ fontSize: "50px" }} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 pt-0 mb-8">Two Tanks</h4>
                      <p>2000 Gallons</p>
                      <p className="m-0 ">
                        <h2 className="m-0" style={{ color: "green" }}>
                          $295 <span style={{ color: "white " }}>+</span> $85
                        </h2>
                      </p>
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
                        <FontAwesomeIcon icon={faWindowMaximize} style={{ fontSize: "50px" }} />
                        &nbsp;
                        <FontAwesomeIcon icon={faWindowMaximize} style={{ fontSize: "50px" }} />
                        &nbsp;
                        <FontAwesomeIcon icon={faWindowMaximize} style={{ fontSize: "50px" }} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 pt-0 mb-8">Three Tanks</h4>
                      <p>3000 Gallons</p>
                      <p className="m-0 ">
                        <h3 className="m-0" style={{ color: "green" }}>
                          $295 <span style={{ color: "white " }}>+</span> $85 <span style={{ color: "white " }}>+</span> $85
                        </h3>
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

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;
