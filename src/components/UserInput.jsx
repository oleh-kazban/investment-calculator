const UserInput = () => (
  <div id="user-input" className="user-input">
    <div className="input-group">
      <p>
        <label htmlFor="initial-investment">Initial Investment</label>
        <input id="initial-investment" />
      </p>
      <p>
        <label htmlFor="annual-investment">Annual Investment</label>
        <input id="annual-investment" />
      </p>
    </div>

    <div className="input-group">
      <p>
        <label htmlFor="expected-return">Expected Return</label>
        <input id="expected-return" />
      </p>
      <p>
        <label htmlFor="duration">Duration</label>
        <input id="duration" />
      </p>
    </div>
  </div>
);

export default UserInput;
