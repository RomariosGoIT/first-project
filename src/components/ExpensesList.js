import React from 'react';
import ExpenseItems from './ExpenseItems';
import './css/ExpenseList.css';

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map(({ id, date, title, amount }) => {
        return <ExpenseItems key={id} date={date} title={title} amount={amount} />;
      })}
    </ul>
  );
}

export default ExpensesList;
