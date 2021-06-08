import React, {useState} from "react";

import "./Expense.css";

import ExpenseList from './ExpenseList';
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";

const Expense = (props) => {
  const [filteredYears, setFilteredYears] = useState('2021');
  const filterHandleChange = (selectedYear) => {
    setFilteredYears(selectedYear);
  }

  const filterYearEntered = props.items.filter((filter) => {
    return filter.date.getFullYear().toString() === filteredYears;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYears} onChangeFilter={filterHandleChange} />
        <ExpenseChart expenses={filterYearEntered} />
        <ExpenseList items={filterYearEntered} />
      </Card>
    </div>
  );
};

export default Expense;
