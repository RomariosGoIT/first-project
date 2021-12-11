import React from 'react';
import '../css/NewExpense.css';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onGetExpenseData }) => {
  const savedExpanseData = enteredExpanseData => {
    const expanseData = {
      ...enteredExpanseData,
      id: Math.random().toString(),
    };
    onGetExpenseData(expanseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpanseData={savedExpanseData} />
    </div>
  );
};

export default NewExpense;
