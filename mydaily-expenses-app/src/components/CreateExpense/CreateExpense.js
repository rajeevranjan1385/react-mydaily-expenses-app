import React, { useState } from 'react';
import './CreateExpense.css';
import ExpenseForm from './ExpenseForm';

const CreateExpense = (props) => {
    const [showExpenseForm, setShowExpenseForm] = useState(false)
    const saveEnteredExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setShowExpenseForm(false);
    }
    const showHideExpenseForm = () => {
        setShowExpenseForm(true);
    }

    const AddNewExpenseHandler = () =>{
        showHideExpenseForm();
    }

    const CancelButtonHandler = () => {
        setShowExpenseForm(false);
    }
    return(
        <div className='new-expense'>
            {!showExpenseForm && <button onClick={AddNewExpenseHandler}>Add New Expense</button>}
            {showExpenseForm && <ExpenseForm onSaveExpenseData={saveEnteredExpenseData} onCancelButtonClick={CancelButtonHandler} />}
        </div>
    )
}

export default CreateExpense;