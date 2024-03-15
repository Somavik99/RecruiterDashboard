import "./App.css";
import CandidateRequirement from "./Components/CandidateRequirements/CandidateRequirement";
import FormStepper from "./Components/FormStepper/FormStepper";
import InterviewerDetails from "./Components/InterviewerInfo/InterviewerDetails";
import RecruiterForm from "./Components/RecruiterForm/RecruiterForm";

const App = () => {
  return (
    <div>
      <FormStepper />
      <RecruiterForm />
      <CandidateRequirement />
      <InterviewerDetails />
    </div>
  );
};

export default App;
