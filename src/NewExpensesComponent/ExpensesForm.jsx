import React, { useState } from 'react'
import "./ExpensesForm.css"

const ExpensesForm = (props) => {
    const [enteredTitle, setEnteredTitle]= useState('');
    const [enteredAmount, setEnteredAmount]= useState('');
    const [enteredDate, setEnteredDate]= useState('');
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
        console.log(event.target.value);


    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);

    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);

    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const expensesdata={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),

        }
        props.data(expensesdata);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }
  return (
    <form onSubmit={submitHandler}>
        <div className="expense-form">
            <div className="expense-form-item">
             <label>Title</label>
             <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>


            </div>
            <div className="expense-form-item">
             <label>Amount</label>
             <input type="number" value={enteredAmount} onChange={amountChangeHandler}></input>
             </div>
             <div className="expense-form-item">
             <label>Date</label>
             <input type="date" value={enteredDate} onChange={dateChangeHandler}></input>
             </div>
             <div className='expense-form-submit'>
                <button type="submit">Add Items</button>
             </div>


        </div>
    </form>
  )
}

export default ExpensesForm
