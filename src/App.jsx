import React, { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [years, setYears] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const principal = parseFloat(amount);
    const time = parseFloat(years);
    const rate = 0.045;

    if (!principal || !time) {
      setResult("Please enter valid values.");
      return;
    }

    const finalAmount = principal * Math.pow(1 + rate, time);
    setResult(`Final Amount after ${time} years: $${finalAmount.toFixed(2)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-6 shadow-lg rounded-2xl">
        <h1 className="text-2xl font-bold text-center mb-4">Compound Interest Calculator</h1>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Total Amount ($)</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Years</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            placeholder="Enter number of years"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Calculate
        </button>

        {result && <div className="mt-4 text-center text-lg">{result}</div>}
      </div>
    </div>
  );
}
