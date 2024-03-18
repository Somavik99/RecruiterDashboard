import "./App.css";
import CandidateRequirement from "./Components/CandidateRequirements/CandidateRequirement";
import FormStepper from "./Components/FormStepper/FormStepper";
import InterviewerDetails from "./Components/InterviewerInfo/InterviewerDetails";
import RecruiterForm from "./Components/RecruiterForm/RecruiterForm";

const App = () => {
  const COMPONENT__CONFIG = [
    {
      name: "Basic Details",
      component: () => <RecruiterForm />,
    },
    {
      name: "Candidate Requirements",
      component: () => <CandidateRequirement />,
    },
    {
      name: "Interviewer Details",
      component: () => <InterviewerDetails />,
    },
    {
      name: "Plans ",
      component: () => <div>Checkout The Plans</div>,
    },
  ];

  return (
    <div>
      <FormStepper FormConfig={COMPONENT__CONFIG} />
    </div>
  );
};

export default App;
