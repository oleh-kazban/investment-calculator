import { useState } from "react";

import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";
import { type InvestmentInputs as InvestmentState } from "./util/investment";

const initialState: InvestmentState = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
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

  return (
    <>
      <UserInput investmentState={state} onFormChange={handleFormChange} />
      <ResultsTable investments={state}/>
    </>
  );
}

export default App;
