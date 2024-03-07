import axios from 'axios';

export interface Country {
    name: string;
    capital: string[];
    population: string;
    currencies: string[];
    language: string[];
    flags: string;
    maps: string;
}

const getCountries = async (countryName) => {
    try {
        const response = await axios.get<Country>(`https://restcountries.com/v3.1/name/${countryName}`);
        const countries = Object.values(response.data).map((country) => ({
            name: country.name.common,
            capital: country.capital,
            population: country.population.toLocaleString(),
            currencies: Object.values(country.currencies).map((c: any) => c.name),
            language: Object.values(country.languages),
            flags: country.flags.png,
            maps: country.maps.googleMaps
        }));
        return countries;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default getCountries