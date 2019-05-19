

$.ajax({
  type: 'GET',
  url: 'http://data.fixer.io/api/latest?access_key=952a1f9628f37994dbe9c185c0747369',
  data: { get_param: 'value' },
  dataType: 'json',
  success: function (data) {
    let rates = Object.keys(data.rates);
    rates.forEach(rate => {
      let option = document.createElement('option');
      option.value = data.rates[rate];
      option.text = rate;
      document.getElementById('fromCurrency').appendChild(option);
      option = document.createElement('option');
      option.value = data.rates[rate];
      option.text = rate;
      document.getElementById('fromCurrency').appendChild(option);
      document.getElementById('toCurrency').appendChild(option);
    })
  }
});

document.getElementById('convertBtn').addEventListener('click', function () {
  let amount = +document.getElementById('amount').value;
  let fromCurrency = document.getElementById('fromCurrency');
  let toCurrency = document.getElementById('toCurrency');
  let fromCurrencyRate = fromCurrency.value;
  let toCurrencyRate = +toCurrency.value;
  let x = '<span>' + amount + ' ' + fromCurrency.options[fromCurrency.selectedIndex].text + ' = </span>' +
    '<h1>' + ((toCurrencyRate / fromCurrencyRate * amount).toFixed(2)) + ' ' +
    toCurrency.options[toCurrency.selectedIndex].text + '</h1';
  document.getElementById('result').innerHTML = x;
  console.log(x);
}
);