import React, { useState } from "react";

import "./ExpenseForm.css";

const initialState = {
  title: "",
  amount: "",
  date: "",
};
const ExpenseForm = (props) => {
  const [values, setValue] = useState(initialState);

  const { title, amount, date } = values;

  const handleChange = (e) => {
      setValue({...values, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const dataExpense = {
      title: title,
      amount: amount,
      date: new Date(date)
    }

    props.onSaveExpenseData(dataExpense);

    setValue({title: "", amount: "", date: ""});
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" name="title" value={title} onChange={handleChange} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" name="amount" value={amount} onChange={handleChange} />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" nim="2019-01-01" max="2021-12-31" name="date" value={date} onChange={handleChange} />
        </div>
      </div>
      <button className="new-expense__actions">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
