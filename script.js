//  All DOM Elements

let sourceAmount = document.getElementById('source-amount');
let SourceCurrency = document.getElementById('source-list')
let TargetCurrency = document.getElementById('target-list')
let resultArea = document.getElementById('result-area')

//  Required Variables
sourceAmount.value = 1;
let currentSourceCurrency = 'USD'
let currentTargetCurrency = 'PKR'
let currentAmount = 1;
let currentRate = 0;
resultArea.innerHTML = currentRate;
let currentResult = 0;

// Event Listeners

// ========== To Change Source Currency ========== 
SourceCurrency.addEventListener('change' , (e) => {
    currentSourceCurrency = e.target.value;
})

// ========== To Change Target Currency ========== 
TargetCurrency.addEventListener('change' , (e) => {
    currentTargetCurrency = e.target.value;
})

// Functions

// ========== To Update All Data ==========

let updateData = async () => {
    try {
        let response = await fetch(`https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${currentSourceCurrency}&to=${currentTargetCurrency}&amount=1`, 
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '79ade4caa6msh7116268d2737ae3p1ac564jsn75cf3983274e',
                'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
            }
        })
        console.log(currentSourceCurrency);
        console.log(currentTargetCurrency);
        
        let data = await response.json();
        currentRate = data.result;
        if(currentResult == 0){
            resultArea.innerHTML = currentRate;
        }
    } catch (err) {
        console.log(err);
    }
}

updateData();

// ========== To Update Result Area ==========
let updateResultArea = (currentAmount) => {
    currentResult = currentAmount * currentRate;
    resultArea.innerHTML = currentResult;
}


// ========== To Get Input Amount ========== 
sourceAmount.addEventListener('input' , (e) => {
    if(e.target.value == NaN || e.target.value == ''){
        resultArea.innerHTML = parseInt(0);
    }
    else{
        currentAmount = parseFloat(e.target.value);
        updateResultArea(currentAmount);
    } 
})

