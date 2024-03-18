import { createContext } from "vm";

const StepperContext = createContext();

const ContextStepProvider = ({ children }) => {



  return <StepperContext.provider>{children}</StepperContext.provider>;
};

export default ContextStepProvider;