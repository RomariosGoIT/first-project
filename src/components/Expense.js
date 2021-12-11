import React, { useState } from 'react';
import './css/Expense.css';
import Card from './Card';
import ExpensesList from './ExpensesList';

import ExpensesFilter from './NewExpense/ExpensesFilter';

const Expense = props => {
  const [selectedYear, setFilerOption] = useState('All');

  const saveFilterOption = getFilterOption => {
    setFilerOption(getFilterOption);
  };

  const filterExpenses = props.items.filter(({ date }) => {
    if (!selectedYear || selectedYear === 'All') return true;
    return date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onSaveFilterOption={saveFilterOption} />
      <ExpensesList items={filterExpenses} />
    </Card>
  );
};

export default Expense;
