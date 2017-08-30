var user = prompt("Mark has $100, how much do you want to take?")

var bankAccount = {};

bankAccount["name"] = "Mark";

bankAccount["balance"] = 100;

bankAccount["balance"] -=user

window.alert(bankAccount["balance"])
