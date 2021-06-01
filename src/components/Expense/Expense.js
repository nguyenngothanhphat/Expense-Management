import React from "react";

import "./Expense.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expense = (props) => {
  return (
    <div>
      <Card className="expenses">
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        /> */}
        {props.items.map((item, index) => {
          return (
            <div key={index}>
              <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
            </div>
          )
        })}
      </Card>
    </div>
  );
};

export default Expense;
