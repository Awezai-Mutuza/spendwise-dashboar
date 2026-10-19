
/* SpendWise - JavaScript Foundation */

// 1. Variables to store budget information
let budget = 0;
let expenses = 0;
let remainingBalance = 0;

// 2. Function to calculate the remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// 3. Function to display the budget summary
function displayResults(budget, expenses, remainingBalance) {
    console.log("===== SpendWise Budget Summary =====");
    console.log("Total Budget: KSh " + budget.toFixed(2));
    console.log("Total Expenses: KSh " + expenses.toFixed(2));
    console.log("Remaining Balance: KSh " + remainingBalance.toFixed(2));

    if (remainingBalance > 0) {
        console.log("Status: You are within your budget.");
    } else if (remainingBalance === 0) {
        console.log("Status: You have used your entire budget.");
    } else {
        console.log("Status: You have exceeded your budget.");
    }
}

// 4. Collect user input
let budgetInput = prompt("Enter your total budget in KSh:");
let expensesInput = prompt("Enter your total expenses in KSh:");

// 5. Check and convert the input
if (
    budgetInput === null ||
    expensesInput === null ||
    budgetInput.trim() === "" ||
    expensesInput.trim() === "" ||
    !Number.isFinite(Number(budgetInput)) ||
    !Number.isFinite(Number(expensesInput)) ||
    Number(budgetInput) < 0 ||
    Number(expensesInput) < 0
) {
    console.log("Error: Please enter valid, non-negative numbers.");
} else {
    budget = Number(budgetInput);
    expenses = Number(expensesInput);

    // 6. Calculate and display the result
    remainingBalance = calculateBalance(budget, expenses);
    displayResults(budget, expenses, remainingBalance);
}
