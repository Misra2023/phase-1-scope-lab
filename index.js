// Write your solution in this file!
var customerName;

function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'definitely not bob';
}

const leastFavoriteCustomer = 'Joe';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Steve'; // TypeError: Assignment to constant variable.
}
