import type { InvestmentInputs } from '../util/investment';

type UserInputProps = {
  investmentState: InvestmentInputs,
  onFormChange: (inputIdentifier: keyof InvestmentInputs, newValue: number) => void;
};

const UserInput = ({ investmentState, onFormChange }: UserInputProps) => {
  return (
    <div id="user-input" className="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input defaultValue={investmentState.initialInvestment} id="initial-investment" type="number" onChange={event => { onFormChange('initialInvestment', Number(event?.target.value))}} />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input defaultValue={investmentState.annualInvestment} id="annual-investment" type="number" onChange={event => { onFormChange('annualInvestment', Number(event?.target.value))}}/>
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input defaultValue={investmentState.expectedReturn} id="expected-return" type="number" onChange={event => { onFormChange('expectedReturn', Number(event?.target.value))}}/>
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input defaultValue={investmentState.duration} id="duration" type="number" onChange={event => { onFormChange('duration', Number(event?.target.value))}}/>
        </p>
      </div>
    </div>
  );
};

export default UserInput;