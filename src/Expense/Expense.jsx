import React,{useState} from 'react'
import Expenses from './Expenses';
import NewExpenses from '../NewExpensesComponent/NewExpenses';

const Dummy_expenses=[{id:'a1',title:"Car", amount:1000, date:new Date(2020,8,14)},
{id:'a2',title:"Rent", amount:900, date:new Date(2021, 8, 15)},
{id:'a3',title:"Groceries", amount:50, date:new Date(2022, 8, 18)},
{id:'a4',title:"School", amount:50, date:new Date(2019, 8, 10)}
];

const Expense = () => {
  const [expenses, setExpenses]=useState(Dummy_expenses);
  const addExpense=(expenseData)=>{
    setExpenses((preValue)=>{
      return [expenseData, ...preValue]

    })
   

  }
  return (
  <div>
        {/* <h1>Helllo</h1> */}
        <NewExpenses addExpense={addExpense}/>
        <Expenses items={expenses}/>
     
    </div>
  )
}

export default Expense
