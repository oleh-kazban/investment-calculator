import { calculateInvestmentResults, formatter } from '../util/investment';

const ResultsTable = () => {
  const initialInvestment = 15000;
  const annualInvestment = 0;
  const investmentResults = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn: 6,
    duration: 10,
  });

  return (
    <div id="result" className="center">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {investmentResults.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;
            const totalInvested =
              initialInvestment + yearData.annualInvestment * yearData.year;

            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;