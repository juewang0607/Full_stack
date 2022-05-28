const INTEREST_RATE = 0.2;

class Account {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  widthraw(amount) {
    this.balance -= amount;
  }
}

module.exports.interest = INTEREST_RATE;
module.exports.Account = Account;