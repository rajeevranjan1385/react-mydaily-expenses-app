import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2019');
    const SelectedYearValue = (value) => {
        setFilteredYear(value);
    }
    const filteredExpenses = props.items.filter(year => year.date.getFullYear() == filteredYear);
    return(
        <div>
            <Card className='expenses'>
                <ExpenseFilter selectedYear={SelectedYearValue} filteredYearValue={filteredYear} />
                <ExpenseChart expenses={filteredExpenses}/>
                <ExpenseList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;