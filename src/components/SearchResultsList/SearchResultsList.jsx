import React from 'react'
import "./SearchResultsList.css"

export default function SearchResultsList({displayResults}) {
    return (
        <div className='results-list'>

            {
                displayResults.map((result, id) => {
                    return (
                        <div
                            key={id}
                            className='search-result-list'
                            onClick={
                                (e) => {
                                    return (
                                        alert(`You clicked on ${result.name}`)
                                    )
                                }
                            }
                        >{result.name}</div>
                    )
                })
            }
        </div>
    )
}

