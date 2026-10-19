
# SpendWise - JavaScript Foundation

## Project Description

SpendWise is a simple budget-tracking application. It allows users to enter their total budget and expenses, calculates the remaining balance, and displays the results in the browser console.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## JavaScript Concepts Implemented

### 1. Variables and Data Types

The variables `budget`, `expenses`, and `remainingBalance` store numerical budgeting information. The `let` keyword allows their values to change.

The `budgetInput` and `expensesInput` variables collect user input as strings. The `Number()` function converts these strings into numbers.

### 2. User Input

The JavaScript `prompt()` function asks users to enter their total budget and expenses in Kenyan shillings (KSh).

The application checks that the inputs are valid, non-negative numbers.

### 3. Budget Calculations

The application calculates the remaining balance using this formula:

Remaining Balance = Total Budget - Total Expenses

For example:

- Total Budget: KSh 40,000
- Total Expenses: KSh 12,000
- Remaining Balance: KSh 28,000

### 4. Reusable Functions

The `calculateBalance()` function calculates the remaining balance.

The `displayResults()` function displays the budget summary and status in the browser console.

Functions help organize the code and make it easier to maintain and reuse.

### 5. Conditional Statements

The application uses `if`, `else if`, and `else` statements to determine whether the user is within budget, has used the entire budget, or has exceeded the budget.

### 6. Console Output

The `console.log()` function displays clearly labelled budget results in the browser developer console.

## How to Run the Project

1. Open the project folder in Visual Studio Code.
2. Make sure all four project files are in the same folder.
3. Open `index.html` in a browser, or use the Live Server extension.
4. Enter your total budget when prompted.
5. Enter your total expenses when prompted.
6. Open the browser developer tools using F12.
7. Select the Console tab to view the results.

## Project Files

- `index.html` - Contains the webpage structure.
- `style.css` - Styles the webpage and supports responsive layouts.
- `script.js` - Collects input, validates values, performs calculations, and displays results.
- `README.md` - Explains the project and its JavaScript concepts.

## Author

SpendWise JavaScript Foundation Assignment
