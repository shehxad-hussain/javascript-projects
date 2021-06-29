document.getElementById('load-form').addEventListener('submit',function(e) {
    //hide result
    document.getElementById('results').style.display = 'none';

    //show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);
 
    e.preventDefault();
});

function calculateResults() {
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principle = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principle*x*calculatedInterest)/(x-1);

if(isFinite(monthly)) {
   
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principle.toFixed(2)) 

      //hide result
      document.getElementById('results').style.display = 'block';

      //show loader
      document.getElementById('loading').style.display = 'none';

}else{

    showError('Plzz Chk You Numbrs')
}

   
}

function showError(error) {

    document.getElementById('results').style.display = 'none';
    
    const errorDiv = document.createElement('div');

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(error));


    card.insertBefore(errorDiv,heading)


    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}