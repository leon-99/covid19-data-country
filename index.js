const fetch = require('node-fetch');
const prompt = require('prompt');

function filterCountry(c) {
    let SEARCHED_COUNTRY;
    if (
        c === "America" ||
        c === "america" ||
        c === "Us" ||
        c === "US" ||
        c === "us" ||
        c === "United States" ||
        c === "United states" ||
        c === "united states"
    ) SEARCHED_COUNTRY = 'https://coronavirus-19-api.herokuapp.com/countries/Usa'
    else if (
        c === "korea" ||
        c === "Korea" ||
        c === "South Korea" ||
        c === "south korea" ||
        c === "South korea"
    ) SEARCHED_COUNTRY = 'https://coronavirus-19-api.herokuapp.com/countries/S. Korea'
    else SEARCHED_COUNTRY = `https://coronavirus-19-api.herokuapp.com/countries/${c}`
    return SEARCHED_COUNTRY;
}

prompt.start();
let promptOptions = [{
    name: 'country',
    required: true,
    description: 'Enter the country name'
}];

prompt.get(promptOptions, (err, res) => {
    getData(res.country)
});

async function getData(country) {
    const res = await fetch(filterCountry(country));
    const data = await res.json();
    console.log(data)
}
