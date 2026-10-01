import { useState } from 'react';

import ResultsTable from './components/ResultsTable';
import UserInput from './components/UserInput';

const initialState = {
  initialInvestment: 0,
  annualInvestment: 0,
  expextedReturn: 0,
  duration: 0
}

function App() {
  const [state, setState] = useState({...initialState});

  return (
    <>
      <UserInput />
      <ResultsTable />
    </>
  )
}

export default App
