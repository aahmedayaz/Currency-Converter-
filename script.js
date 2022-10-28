let sourceList = document.getElementById('source-list');
let generateList = async () => {
    let response = await fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '79ade4caa6msh7116268d2737ae3p1ac564jsn75cf3983274e',
            'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
        }    
    })
    // Code for Generating option Tags :

    // let data = await response.json();
    // let lengthOfSymbols = Object.keys(data.symbols).length;
    // console.log(lengthOfSymbols);
    // let symbolKeys = Object.keys(data.symbols);
    // let symbolValues = Object.values(data.symbols)
    // for(let i = 0; i < lengthOfSymbols; i++){
    //     console.log(`<select value="${symbolKeys[i]}" >${symbolKeys[i]} : ${symbolValues[i]}</select>`);
    // }
}

generateList();


// Object.values() and Object.keys() returns an Array

























