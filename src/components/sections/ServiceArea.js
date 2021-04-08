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

const ServiceArea = ({
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
    title: "Service Area",
    paragraph: "We offer service to these counties:",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div data-reveal-value="20px" data-reveal-delay="800">
            <Image className="has-shadow" src={require("./../../assets/images/minn2.png")} alt="Hero" style={{ margin: "auto" }} />
          </div>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div style={{ marginTop: "0px" }} className="center-content">
            <div className="container-xs">
              <p style={{ marginTop: "-40px" }}>
                Anoka County
                <br /> Isanti County
                <br />
                Ramsey County
                <br />
                Chisago County
                <br />
                Washington County
                <br />
                Hennepin County
                <br />
                Sherburne County
                <br />
                Mille Lacs County
                <br />
                Kannabec County
                <br /> Pine County
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ServiceArea.propTypes = propTypes;
ServiceArea.defaultProps = defaultProps;

export default ServiceArea;
