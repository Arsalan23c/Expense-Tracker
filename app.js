  
//   Inspired and Helped By Our Team Caps Sarim Bhai
var totalAmount = 0;
var remainingAmount = 0;
var expenses = [];
var incomes = [];

function setTotalAmount() {
    var totalAmountInput = document.getElementById('total-amount').value;
    if (totalAmountInput !== '') {
        var newTotalAmount = parseFloat(totalAmountInput);
        totalAmount += newTotalAmount;
        remainingAmount += newTotalAmount;
        incomes.push(newTotalAmount);
        document.getElementById('remaining-amount').innerText = 'PKR ' + remainingAmount.toFixed(2);
        document.getElementById('total-amount').value = '';
        updateIncomeHistory();
    }
}

function addExpense() {
    var expenseAmountInput = document.getElementById('expense-amount').value;
    if (expenseAmountInput !== '') {
        var expense = parseFloat(expenseAmountInput);
        if (expense <= remainingAmount) {
            expenses.push(expense);
            remainingAmount -= expense;
            updateDisplay();
            document.getElementById('expense-amount').value = '';
        } else {
            alert('Insufficient amount');
        }
    }
}

function updateDisplay() {
    document.getElementById('remaining-amount').innerText = 'PKR ' + remainingAmount.toFixed(2);
    var expenseHistory = document.getElementById('expense-history');
    expenseHistory.innerHTML = '';
    expenses.forEach((expense, index) => {
        var listItem = document.createElement('li');
        listItem.innerText = `Expense ${index + 1}: PKR ${expense.toFixed(2)}`;
        expenseHistory.appendChild(listItem);
    });
}

function updateIncomeHistory() {
    var incomeHistory = document.getElementById('income-history');
    incomeHistory.innerHTML = '';
    incomes.forEach((income, index) => {
        var listItem = document.createElement('li');
        listItem.innerText = `Income ${index + 1}: PKR ${income.toFixed(2)}`;
        incomeHistory.appendChild(listItem);
    });
}
