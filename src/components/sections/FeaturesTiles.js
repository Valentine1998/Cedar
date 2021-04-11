import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Button from "../elements/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCalendarCheck, faTruckMoving } from "@fortawesome/free-solid-svg-icons";
import Image from "../elements/Image";
import { useLocation, BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
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
    "features-tiles section",
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

  const tilesClasses = classNames("tiles-wrap center-content", pushLeft && "push-left");

  const sectionHeader = {
    title: "Why should you pump your septic system regularly?",
    paragraph:
      "Your septic system is not designed to last forever, but regular pumping and maintenance can help to increase the longevity of your drainfield. Keep your septic system healthy, and avoid the cost and headache of replacing it. The average cost of a new septic system is $10,000.",
    secondParagraph:
      "The Minnesota Pollution Control Agency recommends having your system pumped and inspected every 2 – 3 years. For information on septic systems please visit: https://www.pca.state.mn.us/living-green/healthy-septic-systems",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div style={{ paddingTop: "0px" }} className={innerClasses}>
          <div className="center-content">
            <div className="container-xs">
              <h2>Why should you pump your septic system regularly?</h2>
              <p className="m-0" style={{ textAlign: "left" }}>
                Your septic system is not designed to last forever, but regular pumping and maintenance can help to increase the longevity
                of your drainfield. Keep your septic system healthy, and avoid the cost and headache of replacing it. The average cost of a
                new septic system is <strong>$10,000</strong>.
              </p>
              <p className="m-1" style={{ textAlign: "left" }}>
                The Minnesota Pollution Control Agency recommends having your system pumped and inspected every 2 – 3 years. For information
                on septic systems <a href="https://www.pca.state.mn.us/living-green/healthy-septic-systems">check this out</a>.
              </p>
            </div>
          </div>
          <div className="center-content">
            <div className="container-xs">
              <h2>Want to schedule a pumping? It’s Simple!</h2>
              <p className="mb-3" style={{ textAlign: "left" }}>
                Cedar Septic and sewer wants to offer our clients the opportunity to book with us entirely online. You will not need to be
                home during the scheduled maintenance. We will either leave a receipt at your door or sent to you via email.
                <br />
                The day prior to your appointment we will contact you to remind you that we will be out the following day. Our technician
                will pump your septic tanks completely and inspect the system to give a full report on the current condition of them. Your
                report will also come with before and after pictures via text or email.
                <br />
                At Cedar Septic and Sewer we follow all of the state guidelines very closely when it comes to the cleaning and disposal of
                your system.
              </p>
              <Link to="/booking">
                <Button tag="a" color="primary" wideMobile>
                  Book Your Service
                </Button>
              </Link>
            </div>
          </div>

          {/*<div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div
                    style={{ fontWeight: "900", color: "white", padding: "20px 25px", borderRadius: "10px" }}
                    className="features-tiles-item-image mb-16"
                  >
                    <FontAwesomeIcon icon={faCalendarCheck} style={{ fontSize: "50px" }} />
                    {/*<Image
                      src={require("./../../assets/images/feature-tile-icon-01.svg")}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">Step 1</div>
                  <h4 className="mt-0 pt-0 mb-8">Book Your Appointment</h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
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
                    <FontAwesomeIcon icon={faTruckMoving} style={{ fontSize: "50px" }} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">Step 2</div>
                  <h4 className="mt-0 mb-8">We Pump Your Septic</h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
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
                    <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "50px" }} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">Step 3</div>
                  <h4 className="mt-0 mb-8">Completion Email</h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-04.svg")}
                      alt="Features tile icon 04"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Robust Workflow</h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-05.svg")}
                      alt="Features tile icon 05"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Robust Workflow</h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-06.svg")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Robust Workflow</h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                  </div>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
