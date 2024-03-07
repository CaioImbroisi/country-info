import React, { useState, useEffect } from "react"
import getCountries from "../../utils/getCountries.tsx"
import { Country } from "../../utils/getCountries.tsx"
import CountryCards from "./CountryCards.tsx"
import { useNavigate, Router, Route, Link, useLocation, useSearchParams } from 'react-router-dom';

const SearchCountries = () => {
    const [inputValue, setInputValue] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [country, setCountry] = useState<Country>({
        name: "",
        capital: [],
        population: "",
        currencies: [],
        language: [],
        flags: "",
        maps: "",
    })

    const navigate = useNavigate();
    const location = useLocation()
    const handleInput = (event) => {
        setInputValue(event.target.value);
    };

    const search = async () => {
        try {
            setErrorMsg("")
            const URLParams = new URLSearchParams(location.search);
            const [response]: any = await getCountries(!inputValue && location.search ? (URLParams.get('s')) : (inputValue))
            setCountry(response)
            if (inputValue) {
                navigate(`/?s=${inputValue}`)
            }
        } catch (error) {
            console.log(error)
            setErrorMsg("Digite um nome de país válido")
        }
    }

    useEffect(() => {
        if (location.search) {
            search()
        }
    }, [])

    useEffect(() => {
        if (country.name) {
            const newDate = new Date()
            const date = newDate.toString().slice(4, 25)
            localStorage.setItem(country.name, date)
            setInputValue("")
        }
    }, [country, location.search])
    return (
        <div className="max-w-4xl mx-auto mb-10">
            <label htmlFor="country-search" className="mb-2 text-sm font-medium text-gray-900 sr-only text-gray-300">Search</label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500  text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="country-search" value={inputValue} onChange={handleInput} className="block p-4 pl-10 w-full text-sm rounded-lg border border-gray-300 bg-gray-700  border-gray-600  placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search for countries..." />
                <button type="submit" onClick={search} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Go find!</button>
            </div>
            <div className="text-xl bg-red-500 rounded-xl mt-5 text-white text-center mb-5">
                <p>{errorMsg}</p>
            </div>
            <CountryCards {...country} />
        </div>
    )
}

export default SearchCountries