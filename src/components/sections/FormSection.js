import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Button from "../elements/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCalendarCheck, faTruckMoving } from "@fortawesome/free-solid-svg-icons";
import Image from "../elements/Image";
import ProgressBar from "react-bootstrap/ProgressBar";
import axios from "axios";
import { useHistory } from "react-router-dom";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FormSection = ({
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
  let history = useHistory();
  const [step, setStep] = useState(1);
  const [data, setData] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (step === 1) {
      if (data.firstName && data.lastName && data.address && data.phoneNumber && data.email) {
        setDisabled(false);
      }
    } else if (step === 2) {
      if (data.firstName && data.lastName && data.address && data.phoneNumber && data.email) {
        setDisabled(false);
      }
    }
  }, [data]);

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

  const setStepForward = () => {
    setStep(step + 1);
  };

  const setStepBack = () => {
    if (step === 1) {
      history.push("/");
    } else {
      setStep(step - 1);
    }
  };

  const submitForm = async () => {
    await axios.post(`https://sheet.best/api/sheets/43261ee9-8094-4217-9380-f0231c31c211`, data);
    setStepForward();
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const form = () => {
    if (step === 1) {
      return (
        <div>
          <ProgressBar striped variant="success" now={35} />

          <h3 style={{ marginTop: "5px" }}>Fill out the information</h3>

          <p className="m-0" style={{ textAlign: "left" }}>
            First Name
            <input placeholder="John" onChange={handleChange} type="text" name="firstName" />
          </p>
          <p className="m-0" style={{ textAlign: "left" }}>
            Last Name
            <input placeholder="Doe" onChange={handleChange} type="text" name="lastName" />
          </p>
          <p className="m-0" style={{ textAlign: "left" }}>
            Address
            <div>
              <textarea onChange={handleChange} placeholder="123 Main Street, Minneapolis, MN 10030" name="address"></textarea>
            </div>
          </p>
          <p className="m-0" style={{ textAlign: "left" }}>
            Email
            <input onChange={handleChange} placeholder="anemail@gmail.com" type="text" name="email" />
          </p>
          <p className="m-0" style={{ textAlign: "left" }}>
            Phone Number
            <input name="phoneNumber" onChange={handleChange} placeholder="(xxx)-xxx-xxxx" type="text" />
          </p>
        </div>
      );
    } else if (step === 2) {
      return (
        <div>
          <ProgressBar striped variant="success" now={70} />
          <h3 style={{ marginTop: "5px" }}>Just a few more questions</h3>
          <p className="mb-2" style={{ textAlign: "left" }}>
            Do you want to be home for the service?
            <div>
              <input onChange={handleChange} type="radio" id="male" name="ownerHome" value="Yes" />
              <label for="male">&nbsp;Yes</label>
              <br />
              <input onChange={handleChange} type="radio" id="female" name="ownerHome" value="No" />
              <label for="male"> &nbsp;No</label>
            </div>
          </p>
          <p className="mb-2" style={{ textAlign: "left" }}>
            Do you want the servicing to be done in the morning or afternoon?
            <div>
              <input onChange={handleChange} type="radio" id="time" name="time" value="Morning" />
              <label for="male">&nbsp;Morning</label>
              <br />
              <input onChange={handleChange} type="radio" id="time" name="time" value="Afternoon" />
              <label for="male"> &nbsp;Afternoon</label>
            </div>
          </p>
          <p className="mb-2" style={{ textAlign: "left" }}>
            Do you have pets?
            <div>
              <input onChange={handleChange} type="radio" id="pets" name="pets" value="Yes" />
              <label for="male">&nbsp;Yes</label>
              <br />
              <input onChange={handleChange} type="radio" id="pets" name="pets" value="No" />
              <label for="male"> &nbsp;No</label>
            </div>
          </p>
          <p className="mb-2" style={{ textAlign: "left" }}>
            What side of the house is your tank(s) located on?
            <div>
              <input onChange={handleChange} type="radio" id="tankLocation" name="tankLocation" value="Right" />
              <label for="male">&nbsp;Right</label>
              <br />
              <input onChange={handleChange} type="radio" id="tankLocation" name="tankLocation" value="Left" />
              <label for="male"> &nbsp;Left</label>
              <br />
              <input onChange={handleChange} type="radio" id="tankLocation" name="tankLocation" value="Front" />
              <label for="male"> &nbsp;Front</label>
              <br />
              <input onChange={handleChange} type="radio" id="tankLocation" name="tankLocation" value="Back" />
              <label for="male"> &nbsp;Back</label>
            </div>
          </p>
          <p className="mb-2" style={{ textAlign: "left" }}>
            Is your tank(s) visible?
            <div>
              <input onChange={handleChange} type="radio" id="male" name="tankVisible" value="Yes" />
              <label for="male">&nbsp;Yes</label>
              <br />
              <input onChange={handleChange} type="radio" id="female" name="tankVisible" value="No" />
              <label for="male"> &nbsp;No</label>
            </div>
          </p>
        </div>
      );
    } else if (step === 3) {
      return (
        <div>
          <ProgressBar striped variant="success" now={100} />
          <h3 style={{ marginTop: "5px" }}>Booking Complete</h3>
          <p className="mb-2" style={{ textAlign: "left" }}>
            You will receive a text/email/call to confirm your service date!
          </p>
        </div>
      );
    }
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div style={{ paddingTop: "0px" }} className={innerClasses}>
          <div className="center-content">
            <div className="container-xs">
              <h5 style={{ marginBottom: "5px" }}>Online Booking</h5>
              {form()}
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#151719",
              display: "block",
              position: "fixed",
              padding: "10px 10px",
              bottom: "0px",
              zIndex: "1",
              width: "100%",
              left: "0%",
              boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div style={{ width: "50%", display: "inline-block", textAlign: "left" }}>
              {step !== 3 ? (
                <Button onClick={setStepBack}>
                  <i className="fas fa-bell" /> Back
                </Button>
              ) : null}
            </div>

            {step === 1 ? (
              <div style={{ width: "50%", display: "inline-block", textAlign: "right" }}>
                <Button disabled={disabled} onClick={setStepForward} color="primary">
                  <i className="fas fa-share" /> Next
                </Button>
              </div>
            ) : (
              <div style={{ width: "50%", display: "inline-block", textAlign: "right" }}>
                <Button disabled={disabled} onClick={submitForm} color="primary">
                  <i className="fas fa-share" /> Submit
                </Button>
              </div>
            )}
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

FormSection.propTypes = propTypes;
FormSection.defaultProps = defaultProps;

export default FormSection;
