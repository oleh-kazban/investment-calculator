
const UserInput = () => (
  <div id="user-input" className="user-input">
    <div className="input-group">
      <p>
        <label htmlFor="initial-investment">Initial Investment</label>
        <input id="initial-investment" type="number"/>
      </p>
      <p>
        <label htmlFor="annual-investment">Annual Investment</label>
        <input id="annual-investment" type="number" />
      </p>
    </div>

    <div className="input-group">
      <p>
        <label htmlFor="expected-return">Expected Return</label>
        <input id="expected-return" type="number" />
      </p>
      <p>
        <label htmlFor="duration">Duration</label>
        <input id="duration" type="number" />
      </p>
    </div>
  </div>
);

export default UserInput;
