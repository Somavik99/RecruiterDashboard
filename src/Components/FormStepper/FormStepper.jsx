import { useState } from "react";
import "./FormStepper.css";

const FormStepper = ({ FormConfig = [] }) => {
  const [CurrentStep, setCurrentStep] = useState(1);

  const [IsComplete, setIsComplete] = useState(false);

  if (!FormConfig.length) {
    return <></>;
  }

  return (
    <div className="Stepper__container">
      <div className="Stepper">
        {FormConfig?.map((step, index) => {
          return (
            <div key={step.name}>
              <div className="Steps">
                <div className="SingleStep"> {index + 1}</div>
                <span
                  style={{ fontSize: "13px", fontWeight: "700", width: "50px" }}
                >
                  {step.name}
                </span>
                {/* {index < Steps.length - 1 && <div className="Step__line"></div>} */}
              </div>
            </div>
          );
        })}
      </div>

      {!IsComplete && (
        <button>
          {CurrentStep === FormConfig.length ? "Submit" : "Continue"}
        </button>
      )}
    </div>
  );
};

export default FormStepper;
