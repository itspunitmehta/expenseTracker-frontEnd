const loginToken = localStorage.getItem('token');
function addExpense(event){
    event.preventDefault();
    const form = new FormData(event.target);

    const expenseDetails = {
        amount: form.get("expenseamount"),
        description: form.get("description"),
        category: form.get("category")

    }
    console.log(expenseDetails);
    axios.post('http://localhost:8000/user/addexpenses',expenseDetails,{headers: {authorization:loginToken} })
    .then(response=>{
        if(response===201){
            addNewExpensetoDOM(res.data.expense);
        }else{
            throw new Error('Failed')
        }
    })
    .catch(err=>{
        console.log(err);
    })
}

function addNewExpensetoDOM(expense){
    const parentElement = document.getElementById('listOfExpenses');
    const expenseElemId = `expense-${expense.id}`;
    parentElement.innerHTML += `
        <li id=${expenseElemId}>
            ${expense.amount} - ${expense.category} - ${expense.description}
            <button onclick='deleteExpense(event, ${expense.id})'>
                Delete Expense
            </button>
        </li>`
}

window.addEventListener('load',()=>{
    axios.get('http://localhost:8000/user/getexpenses',{headers: {authorization:loginToken} })
    .then(response=>{
        if(response.status===200){
            response.data.expenses.forEach(expense => {
                addNewExpensetoDOM(expense)
            })
        }else{
            console.log(response.status);
            throw new Error('Failed To Load')
        }
    })
    .catch(err=>{
        console.log(err);
        alert('Please Log-In First');
        window.location.href = "../login/login.html"
    })
})