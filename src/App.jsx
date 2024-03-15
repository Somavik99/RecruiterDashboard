
import './App.css'
import CandidateRequirement from './Components/CandidateRequirements/CandidateRequirement'
import FormStepper from './Components/FormStepper/FormStepper'
import RecruiterForm from './Components/RecruiterForm/RecruiterForm'

const App = () => {
  return (
    <div>
        <FormStepper/>
      <RecruiterForm/>
    <CandidateRequirement/>
    </div>
  )
}

export default App