function addExpense(event){
    event.preventDefault();
    const form = new FormData(event.target);

    const expenseDetails = {
        amount: form.get("expenseamount"),
        description: form.get("description"),
        category: form.get("category")

    }
    console.log(expenseDetails);
    const loginToken = localStorage.getItem('token');
}

function addNewExpensetoUI(expense){
    const parentElement = document.getElementById('listOfExpenses');
    // const expenseElemId = `expense-${expense.id}`;
    const expenseElemId = `expense-${expense.category}`;
    parentElement.innerHTML += `
        <li id=${expenseElemId}>
            ${expense.expenseamount} - ${expense.category} - ${expense.description}
            <button onclick='deleteExpense(event, ${expense.id})'>
                Delete Expense
            </button>
        </li>`
}