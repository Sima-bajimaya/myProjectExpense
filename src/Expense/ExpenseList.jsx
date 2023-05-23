import React from 'react'
import ExpenseDate from './ExpenseDate'
import "./ExpenseList.css"
const ExpenseList = (props) => {
  return (
    <div className="expense-item">
    <ExpenseDate date={props.date} ></ExpenseDate>
   < div className='expense-item-description'>
    
     <h2>{props.title}</h2>
     
     <div className='expense-item-price'>${props.amount}</div>
     
      
    </div></div>
  )
}

export default ExpenseList
