import React from 'react';
import './CreateExpense.css';
import ExpenseForm from './ExpenseForm';

const CreateExpense = () => {
    return(
        <div className='new-expense'>
            <ExpenseForm />
        </div>
    )
}

export default CreateExpense;