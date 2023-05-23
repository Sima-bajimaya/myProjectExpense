import React from 'react'
import ExpensesForm from './ExpensesForm'
import "./NewExpenses.css"

const NewExpenses = (props) => {
    const getExpenseData=(data)=>{
        const expenseData={
            ...data,
            id: Math.random().toString()
        }
        console.log(expenseData);

props.addExpense(expenseData);
    }
    
  return (
    <div className='new-expense'>
      <ExpensesForm data={getExpenseData}/>
    </div>
  )
}

export default NewExpenses
