# Investment Calculator

![Investment Calculator logo](public/investment-calculator-logo.png)

A React and TypeScript investment calculator that projects an investment year by year using an initial investment, annual contribution, expected annual return, and duration.

## Results

The results table shows the investment value, interest earned during each year, total interest earned, and total invested capital. The calculation applies annual interest to the current balance, then adds that year's contribution.

## Requirements

- Node.js
- npm

## Getting Started

Install dependencies and start the Vite development server:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run lint` | Check the project with ESLint. |
| `npm run lint:fix` | Apply ESLint autofixes. |
| `npm run typecheck` | Run the TypeScript compiler without emitting files. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |

Husky runs `npm run lint:fix` before each commit.

## Project Structure

- `src/App.tsx` - Application state and component composition.
- `src/components/` - Investment input and results table components.
- `src/util/investment.ts` - Investment projection calculation and currency formatting.
- `src/index.tsx` - React application entry point.
- `public/` - Static assets, including the application logo.
