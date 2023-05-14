// Variables 

let sourceAmount = document.getElementById('source-amount')
sourceAmount.value = 1;
let amount = 1;
let resultArea = document.getElementById('result-area')
let sourceList = document.getElementById('source-list')
let targetList = document.getElementById('target-list')
let sourceCurrency = sourceList.value;
let targetCurrency = targetList.value;
let currency = document.getElementById('currency')
let swap = document.getElementById('swap')

// Event Listeners

sourceAmount.addEventListener('input' , (e) => {
    amount = parseFloat(sourceAmount.value)
    getRate(sourceCurrency , targetCurrency , amount);
})


sourceList.addEventListener('change' , (e) => {
    sourceCurrency = sourceList.value;
    // console.log(sourceCurrency);
    getRate(sourceCurrency , targetCurrency , amount);
})

targetList.addEventListener('change' , async (e) => {
    targetCurrency = targetList.value;
    // console.log(sourceCurrency);
    await getRate(sourceCurrency , targetCurrency , amount);
    currency.innerHTML = targetCurrency;
})

swap.addEventListener('click' , async (e) => {
    let a = sourceList.value;
    let b = targetList.value;
    sourceList.value = b;
    targetList.value = a;
    sourceCurrency = sourceList.value;
    targetCurrency = targetList.value;
    await getRate(sourceCurrency , targetCurrency , amount);
    currency.innerHTML = targetCurrency;
})



// Function
const getRate = async (sourceCurrencyCode , targetCurrencyCode , amount) => {

    if (sourceCurrencyCode === targetCurrencyCode) {
        resultArea.innerHTML = parseFloat(amount.toFixed(2));
    } 
    else {
        const url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${sourceCurrencyCode}&to=${targetCurrencyCode}&amount=${amount}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '79ade4caa6msh7116268d2737ae3p1ac564jsn75cf3983274e',
                'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
            }
        };

        try {
            if(amount == 0 || isNaN(amount)){
                resultArea.innerHTML = "0"
            }
            else{
                const response = await fetch(url, options);
                const result = await response.json();
                resultArea.innerHTML = parseFloat((result.result).toFixed(2));
                return (result.result);
            }
            
        } catch (error) {
            console.log("Error is : " , error);
        }
    }    
    
}


// Init

getRate(sourceCurrency , targetCurrency , amount)



