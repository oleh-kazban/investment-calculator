export type InvestmentInputs = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

type AnnualInvestmentData = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
};

export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}: InvestmentInputs): AnnualInvestmentData[] {
  const annualData: AnnualInvestmentData[] = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment,
    });
  }

  return annualData;
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});