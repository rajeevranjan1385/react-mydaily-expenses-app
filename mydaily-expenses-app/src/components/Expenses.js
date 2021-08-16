import './Expenses.css';
import ExpenseItem from './ExpenseItems';

function Expenses(props){
    return(
        <div className='expenses'>
            <ExpenseItem title={props.item1.title} amount={props.item1.amount} date={props.item1.date}></ExpenseItem>
            <ExpenseItem title={props.item2.title} amount={props.item2.amount} date={props.item2.date}></ExpenseItem>
            <ExpenseItem title={props.item3.title} amount={props.item3.amount} date={props.item3.date}></ExpenseItem>
            <ExpenseItem title={props.item4.title} amount={props.item4.amount} date={props.item4.date}></ExpenseItem>
        </div>
    );
}

export default Expenses;