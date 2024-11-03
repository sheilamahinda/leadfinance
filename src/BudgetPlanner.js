import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BudgetPlanner.css';

const initialCategories = {
  groceries: 0,
  rent: 0,
  utilities: 0,
  entertainment: 0,
  transportation: 0,
  savingsGoal: 0,
};

const BudgetPlanner = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(initialCategories);
  const [savingsGoal, setSavingsGoal] = useState(0);
  const [insights, setInsights] = useState("");

  const totalExpenses = Object.values(expenses).reduce((acc, val) => acc + Number(val || 0), 0);

  const generateInsights = async () => {
    try {
      const response = await axios.post('https://gemini-api-url.com/get-insights', {
        income,
        totalExpenses,
        savingsGoal,
      });
      console.log(response.data); // Check the structure here
      setInsights(response.data.insights); // Adjust based on actual response structure
    } catch (error) {
      console.error("Error fetching insights from Gemini", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        setInsights(`Error: ${error.response.data.message || "Unable to retrieve insights at the moment."}`);
      } else {
        setInsights("Unable to retrieve insights at the moment.");
      }
    }
  };

  const handleExpenseChange = (category, value) => {
    setExpenses((prevExpenses) => ({
      ...prevExpenses,
      [category]: Number(value),
    }));
  };

  useEffect(() => {
    if (income && totalExpenses && savingsGoal) {
      generateInsights();
    }
  }, [income, totalExpenses, savingsGoal]);

  return (
    <div className="budget-planner">
      <h3>Budget Planner</h3>
      <input
        type="number"
        placeholder="Monthly Income"
        onChange={(e) => setIncome(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Savings Goal"
        value={savingsGoal}
        onChange={(e) => setSavingsGoal(Number(e.target.value))}
      />
      <h4>Enter Monthly Expenses:</h4>
      {Object.keys(initialCategories).map(
        (category) =>
          category !== 'savingsGoal' && (
            <div key={category}>
              <label>{category.charAt(0).toUpperCase() + category.slice(1)}:</label>
              <input
                type="number"
                placeholder={`Expense for ${category}`}
                onChange={(e) => handleExpenseChange(category, e.target.value)}
                value={expenses[category]}
              />
            </div>
          )
      )}
      <h4>Insights:</h4>
      <p className="insights">{insights}</p> {/* Updated to include insights class */}
    </div>
  );
};

export default BudgetPlanner;
