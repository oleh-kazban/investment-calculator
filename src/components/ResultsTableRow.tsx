import { formatter } from '../util/investment';

type YearData = {
  year: number,
  valueEndOfYear: number,
  interest: number,
}
type ResultsTableRowProps = {
  yearData: YearData,
  totalInterest: number,
  totalInvested: number
}

const ResultsTableRow = ({yearData, totalInterest, totalInvested}: ResultsTableRowProps) => {
  return (
    <tr key={yearData.year}>
      <td>{yearData.year}</td>
      <td>{formatter.format(yearData.valueEndOfYear)}</td>
      <td>{formatter.format(yearData.interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(totalInvested)}</td>
    </tr>
  );
};

export default ResultsTableRow;
