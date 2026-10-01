import { useState } from "react";

import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";
import { type InvestmentInputs as InvestmentState } from "./util/investment";

const initialState: InvestmentState = {
  initialInvestment: 1000,
  annualInvestment: 100,
  expectedReturn: 0,
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
  const isValid = !!state.duration;

  return (
    <>
      <UserInput investmentState={state} onFormChange={handleFormChange} />
      { isValid && <ResultsTable investments={state}/>}
      { !isValid && <p className="center">The duration can't be negative or 0</p>}
      
    </>
  );
}

export default App;
