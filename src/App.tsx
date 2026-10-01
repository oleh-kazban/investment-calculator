import { useState } from "react";

import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";
import { type InvestmentInputs as InvestmentState } from "./util/investment";

const initialState: InvestmentState = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 1,
};

function App() {
  const [state, setState] = useState<InvestmentState>({ ...initialState });
  const handleFormChange = (
    inputIdentifier: keyof InvestmentState,
    newValue: number,
  ): void => {
    setState((currentValue) => ({
      ...currentValue,
      [inputIdentifier]: newValue,
    }));
  };
  const isValid = state.duration >= 1;

  return (
    <>
      <UserInput investmentState={state} onFormChange={handleFormChange} />
      { isValid && <ResultsTable investments={state}/>}
      { !isValid && <p className="center">The duration should be at leat 1 year!</p>}
      
    </>
  );
}

export default App;
