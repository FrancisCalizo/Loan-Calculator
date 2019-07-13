const loanForm = document.getElementById('loan-form');
const amountInput = document.getElementById('amount');
const interestInput = document.getElementById('interest');
const yearsInput = document.getElementById('years');
const calculate = document.getElementById('calculate');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

calculate.addEventListener('click', e => {
  let amount = amountInput.value;
  let interest = interestInput.value;
  let years = yearsInput.value;

  monthlyPayment.value = getMonthlyPayment(amount, interest, years);
  totalPayment.value = getTotalPayment(monthlyPayment.value, years);

  e.preventDefault();
});

// Formula found here: https://www.thebalance.com/loan-payment-calculations-315564
function getMonthlyPayment(amt, int, yrs) {
  let periodPayments = yrs * 12;
  let periodicInterest = int / 100 / 12;
  let discountFactor =
    (Math.pow(1 + periodicInterest, periodPayments) - 1) /
    (periodicInterest * Math.pow(1 + periodicInterest, periodPayments));

  return (amt / discountFactor).toFixed(2);
}

function getTotalPayment(monthPay, yrs) {
  return (monthPay * yrs * 12).toFixed(2);
}
