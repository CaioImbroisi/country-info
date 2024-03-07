// componente de exibicao dos cards / tabela de resultados de busca

import React, { useState } from 'react';
import { Country } from "../../utils/getCountries.tsx"
import CountryHistory from './CountryHistory.tsx';

const CountryCards: React.FC<Country> = (country) => {
    const [showTable, setShowTable] = useState<boolean>(false)

    return (
        <>
            <div className='flex justify-center fixed-top  text-white'>
                <label>
                    <input
                        type="radio"
                        value="Table"
                        checked={showTable}
                        onChange={() => setShowTable(true)}
                    />
                    Table
                </label>
                <label>
                    <input className='ml-10'
                        type="radio"
                        value="Card"
                        checked={!showTable}
                        onChange={() => setShowTable(false)}
                    />
                    Card
                </label>
            </div>
            
            {country.name ? (
                !showTable ? (
                    <div className="flex  bg-gray-700">
                        <img className="w-7/12" src={country.flags} alt={country.name} />
                        <div className="flex flex-col text-white">
                            <p className="mr-1 p-1 px-2 font-bold">Name: {country.name}</p>
                            <p className="mr-1 p-1 px-2 font-bold">Capital: {country.capital}</p>
                            <p className="mr-1 p-1 px-2 font-bold">Currency: {country.currencies}</p>
                            <p className="mr-1 p-1 px-2 font-bold">Population: {country.population}</p>
                            <p className="mr-1 p-1 px-2 font-bold">Language: {country.language}</p>
                            <a className="text-yellow-500 mt-16 p-1 px-2 font-bold underline" href={country.maps}> Check on map</a>
                        </div>

                    </div>
                ) : (
                    <>
                        <div className='flex justify-center mb-5'>
                            <img className="m-w-7/12" src={country.flags} alt={country.name} />
                        </div>
                        <div className="flex justify-center text-white">
                            <table className="w-full table-auto mb-5  text-center">
                                <thead className='table-auto border-solid border-4 border-sky-500'>
                                    <tr>
                                        <th>Name</th>
                                        <th>Capital</th>
                                        <th>Currency</th>
                                        <th>population</th>
                                        <th>Language</th>
                                        <th>Map</th>
                                    </tr>
                                </thead>
                                <tbody className='border-solid border-4 border-sky-500'>
                                    <tr className='border-solid border-2 border-sky-500'>
                                        <td>{country.name}</td>
                                        <td>{country.capital}</td>
                                        <td>{country.currencies}</td>
                                        <td>{country.population}</td>
                                        <td>{country.language}</td>
                                        <td><a href={country.maps} className="text-yellow-400">Go to Map!</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div></>
                )
            ) : ("")}
                    <CountryHistory />
        </>
    )
}

export default CountryCards