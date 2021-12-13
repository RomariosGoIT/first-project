import React, { useState } from 'react';
import '../css/NewExpense.css';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';
import AddNewExpense from './AddNewExpense';

const NewExpense = ({ onGetExpenseData }) => {
  const [showExpForm, setShowExpForm] = useState(false);

  const savedExpanseData = enteredExpanseData => {
    const expanseData = {
      ...enteredExpanseData,
      id: Math.random().toString(),
    };
    onGetExpenseData(expanseData);
    setShowExpForm(false);
  };

  const showExpenseFormHandler = () => {
    setShowExpForm(true);
  };

  const hideExpenseFormHandler = () => {
    setShowExpForm(false);
  };

  return (
    <div className="new-expense">
      {showExpForm ? (
        <ExpenseForm onSaveExpanseData={savedExpanseData} onCancelClick={hideExpenseFormHandler} />
      ) : (
        <AddNewExpense onAddNewExpense={showExpenseFormHandler} />
      )}
    </div>
  );
};

export default NewExpense;
