import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Map from "./Map";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "About Us",
    paragraph:
      "Working with sewage might not always be glamorous but we take as much pride in our work as possible. We will respect your property and always leave it in the same condition it was in when we arrived. You have our word to never drive on your lawn, as our truck is equipped with enough hose to reach your tanks from either your driveway or the road.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container" id="about">
        <div className={innerClasses}>
          <div className={splitClasses}>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">Offering services to these counties</div>
                <h3 className="mt-0 mb-12">Our Service Area</h3>
                <p className="m-0">
                  Anoka County, Isanti County, Ramsey County, Chisago County, Washington County, Hennepin County, Sherburne County, Mille
                  Lacs County, Kannabec County, Pine County
                </p>
              </div>
              <div
                className={classNames("split-item-image center-content-mobile reveal-from-bottom", imageFill && "split-item-image-fill")}
                data-reveal-container=".split-item"
              >
                <Map />
              </div>
            </div>

            {/*<div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">Lightning fast workflow</div>
                <h3 className="mt-0 mb-12">Data-driven insights</h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div
                className={classNames("split-item-image center-content-mobile reveal-from-bottom", imageFill && "split-item-image-fill")}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/features-split-image-02.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">Lightning fast workflow</div>
                <h3 className="mt-0 mb-12">Data-driven insights</h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div
                className={classNames("split-item-image center-content-mobile reveal-from-bottom", imageFill && "split-item-image-fill")}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/features-split-image-03.png")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
  </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
