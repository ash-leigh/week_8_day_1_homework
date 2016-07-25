var Bank = require('./bank/bank.js');
var sampleAccounts = require('./sample.json');
var Account = require('./bank/account.js');
var BankView = require('./bank/bankview.js');

window.onload = function(){
  console.log('loaded');
  var bank = new Bank();
  var bankView = new BankView();
 
  for(accountData of sampleAccounts){
    bank.addAccount(new Account(accountData));
  }
  
  bankView.render(bank);

  console.log('We created a new browser bank', bank);
}


