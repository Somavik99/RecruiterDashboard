import { useEffect, useRef, useState } from "react";
import "./FormStepper.css";

const FormStepper = ({ FormConfig = [] }) => {
  const [CurrentStep, setCurrentStep] = useState(1);

  const [IsComplete, setIsComplete] = useState(false);

  const [StepperMargin, setStepperMargin] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const StepperRef = useRef([]);

  const ComponentIsActive = FormConfig[CurrentStep - 1]?.component;

  const HandleNextComponent = () => {
    setCurrentStep((previousStep) => {
      if (previousStep === FormConfig.length) {
        setIsComplete(true);
        return previousStep;
      } else {
        return previousStep + 1;
      }
    });
  };

  const HandleBackComponent = () => {
    setCurrentStep((prevStep) => {
      setIsComplete(false)
      return prevStep - 1;
    });
  };

  const ProgressBarWidth = () => {
    return ((CurrentStep - 1) / (FormConfig.length - 1)) * 100;
  };

  useEffect(() => {
    setStepperMargin({
      marginLeft: StepperRef.current[0].offsetWidth / 5,
      marginRight: StepperRef.current[FormConfig.length - 1].offsetWidth / 5,
    });
  }, [StepperRef, FormConfig]);

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
                ref={(element) => (StepperRef.current[index] = element)}
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
        <div
          className="Step__line"
          style={{
            width: `calc(100%-${
              StepperMargin.marginLeft + StepperMargin.marginRight
            }px)`,
          }}
        >
          <div
            className="progress__bar"
            style={{ width: `${ProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>

      <ComponentIsActive />
      <div className="Button">
        {CurrentStep > 1 ? <button onClick={HandleBackComponent} className="Back">Back</button> : null}
        {!IsComplete && (
          <button onClick={HandleNextComponent} className="Continue">
            {CurrentStep === FormConfig.length ? "Submit" : "Continue"}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormStepper;
