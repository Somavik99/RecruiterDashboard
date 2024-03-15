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
        console.log(index + 1);
        return (
          <div key={index}>
            <div className="Steps">
              <div className="SingleStep"> {index + 1}</div>
              <span style={{ fontSize: "13px",fontWeight:"700",width:"50px" }}>{step}</span>
              <div className="Stepper__line"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FormStepper;
