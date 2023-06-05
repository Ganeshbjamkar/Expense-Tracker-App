// Load saved expenses from local storage
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Function to save expenses to local storage
function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Function to render expenses on the screen
function renderExpenses() {
    const expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";

    expenses.forEach((expense, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${expense.name} - &#8377;${expense.amount}</span>
        <button onclick="editExpense(${index})">Edit</button>
        <button onclick="deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(li);
    });
}

// Function to add an expense
function addExpense(event) {
    event.preventDefault();

    const expenseName = document.getElementById("expenseName").value;
    const expenseAmount = document.getElementById("expenseAmount").value;

    const expense = {
        name: expenseName,
        amount: expenseAmount
    };

    expenses.push(expense);
    saveExpenses();
    renderExpenses();

    // Reset the form
    document.getElementById("expenseForm").reset();
}

// Function to edit an expense
function editExpense(index) {
    const newName = prompt("Enter new expense name:");
    const newAmount = prompt("Enter new expense amount:");

    expenses[index].name = newName;
    expenses[index].amount = newAmount;
    saveExpenses();
    renderExpenses();
}

// Function to delete an expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    saveExpenses();
    renderExpenses();
}

// Initial rendering of expenses
renderExpenses();

// Event listener for adding an expense
document.getElementById("expenseForm").addEventListener("submit", addExpense);
