function createBankAccount() {
    let balance = 0;
    let transactionHistory = []; 

    return {
        deposit: function (amount) {
            balance += amount;
            transactionHistory.push(`Deposited: ${amount}`);
            console.log("Deposited:", amount);
        },
        withdraw: function (amount) {
            if (amount > balance) {
                console.log("Insufficient balance");
                transactionHistory.push(`Failed withdrawal: ${amount}`);
            } else {
                balance -= amount;
                transactionHistory.push(`Withdrawn: ${amount}`);
                console.log("Withdrawn:", amount);
            }
        },
        checkBalance: function () {
            console.log("Current Balance:", balance);
        },
        getHistory: function () {
            console.log("Transaction History:");
            console.log(transactionHistory);
        }
    };
}

const acc = createBankAccount();
acc.deposit(500);
acc.withdraw(200);
acc.withdraw(400);
acc.getHistory();
