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
    paragraph: "Shown below is our pricing for residential septic systems. For all other services contact us for a quote.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container" id="prices">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div style={{ marginTop: "0px" }} className="left-content">
            <div>
              <div className={tilesClasses}>
                <div className="tiles-item reveal-from-bottom pricing" style={{ flexBasis: "450px", maxWidth: "450px" }}>
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 pt-0 mb-8">Tanks and Their Size</h4>
                      <p className="mt-3 mb-0">
                        {" "}
                        Tank 1 - 1000 gallons <span style={{ color: "green" }}>= $320</span>
                      </p>
                      <p className="mb-0">
                        Tank 2 - 1000 gallons <span style={{ color: "green" }}>+ $85</span>
                      </p>
                      <p className="mb-0">
                        Pump Tank <span style={{ color: "green" }}>= $25</span>
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
