function BankAccount() {
  this.account = [],
  this.currentId = 0
}
BankAccount.prototype.addUser = function(user) {
  user.id = this.assignId();
  this.account.push(user);
}
  BankAccount.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  }
  function User(inputtedname, inputtedInitDep) {
      this.username = inputtedname,
      this.balance = inputtedInitDep
    }

var totalchange = 0;
var newBal = 0;

//UI
var bankAccount = new BankAccount();
  $(document).ready(function() {
  $("#new-account").submit(function(event){
    event.preventDefault();
    var inputtedname = $("#input-name").val();
    var inputtedInitDep = parseFloat($("#input-initial-deposit").val());
    var newUser = new User(inputtedname, inputtedInitDep)
    bankAccount.addUser(newUser);
    console.log("bankAccount: ", bankAccount);
    $(".display-name").text(bankAccount.account[0].username);
    $(".display-money").text("$"+bankAccount.account[0].balance.toFixed(2));
    $(".initialDiv").slideUp();
    $(".middleDiv").slideDown();

  });
  $("#trans-btn").click(function(){


    var inputtedDeposit = parseFloat($("#deposit-amount").val());
    var inputtedWithdrawl = parseFloat($("#withdrawl-amount").val());

    var startingBal = bankAccount.account[0].balance;

    var newBal = startingBal;

    if (isNaN(inputtedDeposit)) {
      console.log("NaN");
      totalchange = 0 - inputtedWithdrawl;
    }
    else if (isNaN(inputtedWithdrawl)) {
      console.log("NaN");
      totalchange = inputtedDeposit - 0;
    }
    else {
      console.log("Yay!");
      totalchange += (inputtedDeposit - inputtedWithdrawl);
    }

    newBal += totalchange;

    $(".display-money").text(newBal.toFixed(2));
  });
});
