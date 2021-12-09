import React from 'react';
import ExpenseItems from './ExpenseItems';
import './css/Expense.css';
import Card from './Card';

function Expense(props) {
  return (
    <Card className="expenses">
      {props.items.map(data => {
        return <ExpenseItems key={data.id} date={data.date} title={data.title} amount={data.amount} />;
      })}
    </Card>
  );
}

export default Expense;
