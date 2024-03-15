import "./FormStepper.css";

const FormStepper = () => {
  let Steps = [
    "Basic Details",
    "Candidate Requirements",
    "Interviewer Details",
    "Plans",
  ];

  return (
    <div className="Stepper">
      {Steps?.map((step, index) => {
        return (
          <div key={index}>
            <div className="Steps">
              <div className="SingleStep"> {index + 1}</div>
              <span
                style={{ fontSize: "13px", fontWeight: "700", width: "50px" }}
              >
                {step}
              </span>
              {index < Steps.length - 1 && <div className="Step__line"></div>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FormStepper;
