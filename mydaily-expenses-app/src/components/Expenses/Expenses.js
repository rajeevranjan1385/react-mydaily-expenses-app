import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2019');
    const SelectedYearValue = (value) => {
        setFilteredYear(value);
    }
    const filteredExpenses = props.items.filter(year => year.date.getFullYear() == filteredYear);
    return(
        <Card className='expenses'>
            <ExpenseFilter selectedYear={SelectedYearValue} filteredYearValue={filteredYear} />
            <ExpenseList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;