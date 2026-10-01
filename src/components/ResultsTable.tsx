import { calculateInvestmentResults, formatter, InvestmentInputs } from '../util/investment';
import ResultsTableRow from './ResultsTableRow';

type ResultsTableProps = {
  investments: InvestmentInputs,
};

const ResultsTable = ({investments}: ResultsTableProps) => {
  const result = calculateInvestmentResults(investments);

  return (
    <table id="result">
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
        {result.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            investments.initialInvestment;
          const totalInvested =
            investments.initialInvestment + yearData.annualInvestment * yearData.year;

          return (
            <ResultsTableRow yearData={yearData} totalInterest={totalInterest} totalInvested={totalInvested} key={yearData.year} />
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;