// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// --------------------------------------- 1st Method ------------------------------------------------------ 
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

// let sourceList = document.getElementById('source-list');
// let generateList = async () => {
//     let response = await fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols', {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '79ade4caa6msh7116268d2737ae3p1ac564jsn75cf3983274e',
//             'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
//         }    
//     })
    // Code for Generating option Tags :

    // let data = await response.json();
    // let lengthOfSymbols = Object.keys(data.symbols).length;
    // console.log(lengthOfSymbols);
    // let symbolKeys = Object.keys(data.symbols);
    // let symbolValues = Object.values(data.symbols)
    // for(let i = 0; i < lengthOfSymbols; i++){
    //     console.log(`<select value="${symbolKeys[i]}" >${symbolKeys[i]} : ${symbolValues[i]}</select>`);
    // }
// }

// generateList();


// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// --------------------------------------- 2nd Method ------------------------------------------------------ 
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------


let generateList2 = async () => {
    
    // Code For Symbols
    let keys;
    let currencyCodeArray = [];
    let finalArray = [];
    try {
        let response = await fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '79ade4caa6msh7116268d2737ae3p1ac564jsn75cf3983274e',
                'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
            }
        });
        
        
        let data = await response.json();
        let dataObject = data.symbols;
        keys = Object.keys(dataObject); // We will compare this Array with Countryinfo Array iso-codes
        let values = Object.values(dataObject);
        // Object.values() and Object.keys() returns an Array

    } catch (err) {
        console.log(err);
    }
    
    // Code for Country Info

    try {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '79ade4caa6msh7116268d2737ae3p1ac564jsn75cf3983274e',
                'X-RapidAPI-Host': 'country-info1.p.rapidapi.com'
            }
        };
        let response = await fetch('https://country-info1.p.rapidapi.com/', options);
        let finalData = await response.json();
        finalData.forEach((data) => {
            currencyCodeArray.push(data);
        })
    } 
    catch (err) {
        console.log(err);
    }

    keys.forEach((symbol) => {
        currencyCodeArray.forEach((country) => {
            if(symbol == country.CurrencyCode){
                finalArray.push({
                    countryName : country.COUNTRY ,
                    currencyName : country.CurrencyName ,
                    currencyCode : country.CurrencyCode ,
                    isoCode :country["ISO CODE 2|3"].split(" / ")[1]
                });
            }
        })
    })

    let sortedArray = finalArray.sort((a, b) => {
        let fa = a.countryName.toLowerCase(),
            fb = b.countryName.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    

    let optionTags = '';
    finalArray.forEach((data) => {
        optionTags +=(`<option value = "${data.currencyCode}" data-isoCode = "${data.isoCode}">${data.currencyCode} - ${data.countryName}</option>\n`)
    })

    // console.log(optionTags);
}

generateList2();

