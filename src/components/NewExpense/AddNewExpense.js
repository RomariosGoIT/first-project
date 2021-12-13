import React from 'react';
import '../css/AddNewExpense.css';

function AddNewExpense({ onAddNewExpense }) {
  return (
    <div className="add_new-expense__actions">
      <button onClick={onAddNewExpense}>Add New Expense</button>
    </div>
  );
}

export default AddNewExpense;
