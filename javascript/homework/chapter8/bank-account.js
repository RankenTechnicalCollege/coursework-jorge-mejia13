function BankAccount(accountHolder, initialBalance) {
    this.accountHolder = accountHolder;
    let balance = initialBalance;

    // Privileged method to deposit money
    this.deposit = function(amount) {
        if (amount > 0) {
            balance += amount;
        } else {
            return "Deposit amount must be over $0.";
        }
    }

    // Privileged method to withdraw money
    this.withdraw = function(amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        } else {
            return "You don't have enough to make this withdrawal.";
        }
    }

    // Privileged method to get current balance
    this.getBalance = function() {
        return `Balance: $${balance}`;
    }
}

// Prototype method to transfer money
BankAccount.prototype.transfer = function(amount, targetAccount) {
    this.withdraw(amount);
    targetAccount.deposit(amount);
}

let jorge = new BankAccount("Jorge", 500);
let leo = new BankAccount("Leo", 300);

console.log(`Jorge's balance: ${jorge.getBalance()}`);
jorge.deposit(200);
console.log(jorge.getBalance());
jorge.withdraw(100);
console.log(jorge.getBalance());
jorge.transfer(200, leo);
console.log(jorge.getBalance());

console.log(`Leo's balance: ${leo.getBalance()}`);
