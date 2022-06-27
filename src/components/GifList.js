import React from 'react'

function GifList({gifs}) {
    const gifsToDisplay = gifs.map(gif => {
        return (
        <li key={gif} className="gif">
            <img src={gif} alt="gif"></img>
        </li>)
    })

    return (
        <div>
            {<ul>
                {gifsToDisplay}
            </ul>}
        </div>
    )
}

export default GifList;
