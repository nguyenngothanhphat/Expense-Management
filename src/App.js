import React, {useState} from 'react';

import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense'
import './App.css';

const dummy_expenses = [
  {id: "ex1", title: "Toilet Paper", amount: 94.12, date: new Date(2021, 5, 1)},
  {id: "ex2", title: "New TV", amount: 85.26, date: new Date(2021, 5, 3)},
  {id: "ex3", title: "New Desk", amount: 50.24, date: new Date(2021, 5, 8)}
]

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [...prevExpense, expense]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
