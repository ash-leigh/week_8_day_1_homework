var BankView = function(){}

BankView.prototype = {
  displayTotal: function(bank){
    var totalDisplay = document.getElementById('total');
    totalDisplay.innerText = bank.totalCash().toFixed(2);
  },
  displayAccounts: function(bank){
    var personalAccountList = document.getElementById('personalAccounts');
    var businessAccountList = document.getElementById('businessAccounts');

    personalAccountList.innerHTML = "";
    businessAccountList.innerHTML = "";

    bank.accounts.forEach(function(account){
      if(account.type === 'personal'){
        var li = document.createElement('li');
        li.innerText = account.owner + ': £' + account.amount.toFixed(2);
        personalAccountList.appendChild(li);
      }
      else if(account.type === 'business'){
        var li = document.createElement('li');
        li.innerText = account.owner + ': £' + account.amount.toFixed(2);
        businessAccountList.appendChild(li);
      }
    })
  },
  addInterest: function(bank){
    var button = document.getElementById('addInterest');
    button.onclick = function(){
      bank.addInterest();
      this.displayTotal(bank);
      this.displayAccounts(bank);
    }.bind(this);
  }, 
  render: function(bank){
    this.displayTotal(bank);
    this.displayAccounts(bank);
    this.addInterest(bank);
  }
}

module.exports = BankView;