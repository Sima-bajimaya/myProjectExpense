import React from 'react'
import ExpenseList from './ExpenseList'
import "./Expenses.css"

const Expenses = (props) => {
  return (
    <div className="expenses">
     {
      props.items.map((expense)=>(
        <ExpenseList title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
        
      ))
     } 
     {/* //this is static */}
     {/* <ExpenseList title={props.items[0].title}
      amount={props.items[0].amount} 
      date={props.items[0].date}/>
       <ExpenseList title={props.items[1].title}
      amount={props.items[1].amount} 
      date={props.items[1].date}/>
       <ExpenseList title={props.items[2].title}
      amount={props.items[2].amount} 
      date={props.items[2].date}/> */}
    </div>
  )
}

export default Expenses
