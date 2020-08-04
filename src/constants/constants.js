
export const BASE_API_URL = "https://restcountries.eu/rest/v2"


export const getAllCountries = () =>{
    return fetch(BASE_API_URL+ '/all')
        .then(handleResponse)
}

export const handleResponse = response =>{
    if(!response.ok) throw response
    return response.json()
}

export const numberFormater = number =>
    new Intl.NumberFormat('en').format(number)

export const srcSelectorByTheme = (lightTheme, asset) => `${asset}-${lightTheme ?'light':'dark'}.svg`

export const allWorldRegions = () => ['','Africa','Americas','Asia','Europe','Oceania']