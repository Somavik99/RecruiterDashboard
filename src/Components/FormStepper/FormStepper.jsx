import { useState } from "react";
import "./FormStepper.css";

const FormStepper = ({ FormConfig = [] }) => {
  const [CurrentStep, setCurrentStep] = useState(1);

  const [IsComplete, setIsComplete] = useState(false);

  const ComponentIsActive = FormConfig[CurrentStep - 1]?.component;

  const HandleNextComponent = () => {
    setCurrentStep((previousStep) => {
      if (previousStep === FormConfig.length) {
        setIsComplete(true)
        return previousStep;
      } else {
        return previousStep + 1;
      }
    });
  };

  if (!FormConfig.length) {
    return <></>;
  }

  return (
    <div className="Stepper__container">
      <div className="Stepper">
        {FormConfig?.map((step, index) => {
          return (
            <div key={step.name}>
              <div
                className={`SingleStep ${
                  CurrentStep > index + 1 || IsComplete ? "Complete" : ""
                } ${CurrentStep === index + 1 ? "active" : ""}`}
              >
                <div className="StepNumber">
                  {CurrentStep > index + 1 || IsComplete ? (
                    <span>&#10003;</span>
                  ) : (
                    index + 1
                  )}
                </div>
                <span
                  style={{ fontSize: "13px", fontWeight: "700", width: "50px" }}
                >
                  {step.name}
                </span>
              </div>
            </div>
          );
        })}
        <div className="Step__line">
          <div className="progress__bar"></div>
        </div>
      </div>

      <ComponentIsActive />
      {!IsComplete && (
        <button onClick={HandleNextComponent}>
          {CurrentStep === FormConfig.length ? "Submit" : "Continue"}
        </button>
      )}
    </div>
  );
};

export default FormStepper;
