import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './css/ExpenseItems.css';
import Card from './Card';

const ExpenseItems = props => {
  const [title, setTitle] = useState(props.title);

  const onClickHandler = () => setTitle('Clicked');

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description ">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={onClickHandler}>Button</button>
    </Card>
  );
};

export default ExpenseItems;
