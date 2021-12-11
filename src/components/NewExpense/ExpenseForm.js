import React, { useState } from 'react';

import '../css/ExpenseForm.css';

const ExpenseForm = ({ onSaveExpanseData }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChgHandler = e => {
    setEnteredTitle(e.target.value);
  };

  const amountChgHandler = e => {
    setEnteredAmount(e.target.value);
  };

  const dateChnHandler = e => {
    setEnteredDate(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    if ((enteredTitle || enteredAmount) !== '' && enteredDate) {
      onSaveExpanseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    } else {
      console.log('ERROR');
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChgHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChgHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChnHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
