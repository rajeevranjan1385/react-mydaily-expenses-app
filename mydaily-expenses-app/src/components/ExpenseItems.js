import './ExpenseItems.css'

function ExpenseItem(){
    return (
        <div className="expense-item">
            <div>Audi New </div>
            <div className='expense-item__description'>
                <h2>Car</h2>
                <div className='expense-item__price'>Rs 64,00,000/-</div>
            </div>
        </div>
    )
}

export default ExpenseItem