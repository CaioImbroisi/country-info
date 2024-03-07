import React, { useEffect, useState } from 'react'
import { CSVLink } from 'react-csv'

interface LocalStorageItems {
    countryName: string
    searchLink: string
}

const CountryHistory = () => {
    const [history, setHistory] = useState<LocalStorageItems[]>()

    const csvHeaders = [
        {
            label: "Country Name",
            key: "countryName"
        },
        {
            label: "Map Link",
            key: "searchLink"
        }
    ]
const csvData = history?.map(item => ({
    countryName: item.countryName,
    searchLink: item.searchLink
})) || []

    const getLocalStorageItems = () => {
        const result: LocalStorageItems[] = []
        Object.keys(localStorage).forEach((key) => {
            const data = {
                countryName: key,
                searchLink: "Go!"
            }
            result.push(data)
            setHistory(result)
        })
    }
    useEffect(() => {
        getLocalStorageItems()
    }, [])

    return (
        <>
        <div className='text-2xl mb-2 text-white mt-5 text-center'>
            <h3>Search History</h3>
        </div><CSVLink className="bg-sky-500 rounded-sm p-1 text-sm font-bold" filename="history_table.csv" data={csvData} headers={csvHeaders}>
                Export to CSV
            </CSVLink><div className="flex justify-center text-white">
                <table className="w-full table-fixed mb-5  text-center">
                    <thead className='border-solid border-4 border-sky-500'>
                        <tr>
                            <th>Country</th>
                            <th>Hotlink</th>
                        </tr>
                    </thead>
                    <tbody className='border-solid border-4 border-sky-500'>
                        {history?.map((item, index) => {
                            return (
                                <>
                                    <tr className='border-solid border-2 border-sky-500' key={index}>
                                        <td>{item.countryName}</td>
                                        <td><a href={`/?s=${item.countryName}`}>{item.searchLink}</a></td>
                                    </tr>
                                </>
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div>
            </>
    )
}

export default CountryHistory