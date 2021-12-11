import React, { useState } from 'react';
import ExpenseItems from './ExpenseItems';
import './css/Expense.css';
import Card from './Card';

import ExpensesFilter from './NewExpense/ExpensesFilter';

const Expense = props => {
  const [selectedYear, setFilerOption] = useState('All');

  const saveFilterOption = getFilterOption => {
    setFilerOption(getFilterOption);
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onSaveFilterOption={saveFilterOption} />
      {props.items
        .filter(({ date }) => {
          if (!selectedYear || selectedYear === 'All') return true;
          return date.getFullYear().toString() === selectedYear;
        })
        .map(data => {
          return <ExpenseItems key={data.id} date={data.date} title={data.title} amount={data.amount} />;
        })}
    </Card>
  );
};

export default Expense;
