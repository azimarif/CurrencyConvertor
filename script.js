let data ={"success":true,"timestamp":1546581246,"base":"EUR","date":"2019-01-04","rates":{"AED":4.184691,"AFN":85.935336,"ALL":123.34705,"AMD":549.733989,"ANG":2.010833,"AOA":351.937668,"ARS":42.65921,"AUD":1.622919,"AWG":2.05065,"AZN":1.939574,"BAM":1.953643,"BBD":2.267563,"BDT":95.134771,"BGN":1.954942,"BHD":0.429435,"BIF":2031.339627,"BMD":1.13925,"BND":1.548016,"BOB":7.828242,"BRL":4.279132,"BSD":1.13295,"BTC":0.000298,"BTN":79.573213,"BWP":12.25434,"BYN":2.47365,"BYR":22329.299059,"BZD":2.283569,"CAD":1.536564,"CDF":1856.977158,"CHF":1.124633,"CLF":0.028535,"CLP":790.406642,"CNY":7.820724,"COP":3669.353208,"CRC":685.412591,"CUC":1.13925,"CUP":30.190124,"CVE":110.147196,"CZK":25.655796,"DJF":202.467627,"DKK":7.467134,"DOP":57.420496,"DZD":134.927072,"EGP":20.400556,"ERN":17.088413,"ETB":31.937752,"EUR":1,"FJD":2.432752,"FKP":0.888581,"GBP":0.901774,"GEL":3.036082,"GGP":0.901694,"GHS":5.466178,"GIP":0.888581,"GMD":56.335362,"GNF":10324.349171,"GTQ":8.760092,"GYD":236.644959,"HKD":8.920612,"HNL":27.634219,"HRK":7.433836,"HTG":87.93646,"HUF":321.120718,"IDR":16248.552441,"ILS":4.245977,"IMP":0.901694,"INR":79.525373,"IQD":1351.833993,"IRR":47968.119433,"ISK":133.805186,"JEP":0.901694,"JMD":144.67326,"JOD":0.808407,"JPY":123.289999,"KES":116.425634,"KGS":79.574792,"KHR":4578.072768,"KMF":492.44041,"KPW":1025.411377,"KRW":1280.813595,"KWD":0.345569,"KYD":0.944045,"KZT":431.502117,"LAK":9698.094204,"LBP":1708.590594,"LKR":207.207167,"LRD":180.059019,"LSL":16.324949,"LTL":3.363909,"LVL":0.689121,"LYD":1.575928,"MAD":10.863316,"MDL":19.497159,"MGA":3956.78652,"MKD":61.676698,"MMK":1749.775666,"MNT":3027.203897,"MOP":9.139176,"MRO":406.712016,"MUR":39.064688,"MVR":17.601141,"MWK":826.087262,"MXN":22.3563,"MYR":4.717663,"MZN":70.001221,"NAD":16.32516,"NGN":414.687289,"NIO":36.774421,"NOK":9.892654,"NPR":127.208511,"NZD":1.70315,"OMR":0.438571,"PAB":1.132842,"PEN":3.814607,"PGK":3.817,"PHP":59.884663,"PKR":158.435383,"PLN":4.291726,"PYG":6774.660021,"QAR":4.148126,"RON":4.662718,"RSD":118.356646,"RUB":78.250638,"RWF":1012.069784,"SAR":4.273498,"SBD":9.322828,"SCR":15.542755,"SDG":53.94064,"SEK":10.253711,"SGD":1.552285,"SHP":1.504834,"SLL":9769.068088,"SOS":660.764965,"SRD":8.496519,"STD":23981.894595,"SVC":9.911873,"SYP":586.713686,"SZL":16.469569,"THB":36.547608,"TJS":10.686053,"TMT":3.998767,"TND":3.450504,"TOP":2.59669,"TRY":6.204242,"TTD":7.681274,"TWD":35.195415,"TZS":2620.274969,"UAH":31.147086,"UGX":4219.952667,"USD":1.13925,"UYU":36.732862,"UZS":9444.046558,"VEF":11.378264,"VND":26425.472262,"VUV":131.112728,"WST":2.97421,"XAF":655.239375,"XAG":0.072114,"XAU":0.000879,"XCD":3.078879,"XDR":0.819951,"XOF":655.239295,"XPF":119.131393,"YER":285.097322,"ZAR":16.269458,"ZMK":10254.625918,"ZMW":13.594727,"ZWL":367.242931}}

document.getElementById('convertBtn').onclick = function() {
  let amount = +document.getElementById('amount').value;
  let fromCurrency = document.getElementById('fromCurrency');
  let toCurrency = document.getElementById('toCurrency');
  let fromCurrencyRate = fromCurrency.value;
  let toCurrencyRate = +toCurrency.value;
  let x =
    '<span>' +
    amount +
    ' ' +
    fromCurrency.options[fromCurrency.selectedIndex].text +
    ' = </span>' +
    '<h1>' +
     calculateAmount(amount, fromCurrencyRate, toCurrencyRate) +
    ' ' +
    toCurrency.options[toCurrency.selectedIndex].text +
    '</h1';
  document.getElementById('result').innerHTML = x;
};

const calculateAmount = function (amount, fromCurrencyRate, toCurrencyRate) {
  return ((toCurrencyRate / fromCurrencyRate) * amount).toFixed(2);
}

window.onload = function() {
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
    option.innerHTML = ''
  });
};

$('document').ready(()=>{
  console.log('hello');
})