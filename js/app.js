
// country data loaded
const countryDataLoad = async (inputValue = 'bangladesh') => {
    const url = `https://restcountries.com/v3.1/name/${inputValue}?fullText=true`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data[0]) {
        alert('data not found')
        return
    }
    isSpinner(true)
    setTimeout(() => {
        displayCountryData(data[0]);

    }, 1000)


}


// display country data 
const displayCountryData = (data) => {
    const { capital, name, continents, population, flags, currencies, languages } = data;
    const countryContent = document.getElementById('country-content-container');
    console.log(Object.keys(currencies));
    console.log();
    countryContent.textContent = '';
    countryContent.innerHTML += `
<div>
                    <img class="max-w-full w-40 mx-auto border-2 border-purple-300" src="${flags.svg}" alt="">
                </div>
                <div class="mt-5">
                    <h3 class="text-center font-bold mb-3 text-2xl text-slate-700 font-mono">${name.common}</h3>
                    <p class="font-mono text-base font-semibold text-slate-600">Capital: <span
                            class="text-sm font-normal">${capital ? capital[0] : 'no capital'}</span></p>
                    <p class="font-mono text-base font-semibold text-slate-600">Continent: <span
                            class="text-sm font-normal">${continents ? continents[0] : 'Data not found'}</span></p>
                    <p class="font-mono text-base font-semibold text-slate-600">Population: <span
                            class="text-sm font-normal">${population ? population : 'data not found'}</span></p>
                    <p class="font-mono text-base font-semibold text-slate-600">Currency: <span
                            class="text-sm font-normal">${currencies ? Object.values(currencies)[0].name + "- " + Object.keys(currencies)[0] : 'no data found'}</span></p>
                    <p class="font-mono text-base font-semibold text-slate-600">Common Languages: <span
                            class="text-sm font-normal">${languages ? Object.values(languages).join(', ') : 'no data found'}</span></p>
                </div>

`
    isSpinner(false)
}



countryDataLoad()

// get input data
// get input value 
const inputBtn = document.getElementById('submit-btn');
const inputField = document.getElementById('countryInputValue');

inputBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputValue = inputField.value;

    if (isNaN(inputValue)) {
        const inputCase = inputValue.toLowerCase();
        countryDataLoad(inputCase)
    }
    else {
        alert('enter valid country name')
    }


})

inputField.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        inputBtn.click()
    }
})


// spinner status 
const isSpinner = (value) => {
    const spinnerStatus = document.getElementById('spinnerStatus');
    if (value) {
        spinnerStatus.classList.remove('hidden')
    }
    else {
        spinnerStatus.classList.add('hidden')

    }

}