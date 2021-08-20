import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItems';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2019');
    const SelectedYearValue = (value) => {
        setFilteredYear(value);
    }
    let expensesContent = <p>There are no rows to display</p>;
    const filteredExpenses = props.items.filter(year => year.date.getFullYear() == filteredYear);
    if(filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map(expense => 
            (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))
    }

    return(
        <Card className='expenses'>
            <ExpenseFilter selectedYear={SelectedYearValue} filteredYearValue={filteredYear} />
            {expensesContent}
        </Card>
    );
}

export default Expenses;