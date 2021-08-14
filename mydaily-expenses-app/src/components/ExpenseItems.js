import './ExpenseItems.css';

function ExpenseItem(){
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 300000;
    const expenseDate = new Date(2021, 7, 14);

    return(
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>Rs {expenseAmount}/-</div>
            </div>
        </div>
    )
}

export default ExpenseItem;