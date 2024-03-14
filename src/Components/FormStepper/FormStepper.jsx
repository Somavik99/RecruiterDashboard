const FormStepper = () => {
  let Steps = [
    "Basic Details",
    "Candidate Requirements",
    "Interviewer Info",
    "Plans",
  ];

  return (
    <div>
      {Steps?.map((step, index) => {
        console.log(index+1)
        return (
          <div key={index}>
            <div>
              {index + 1} {step}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FormStepper;
