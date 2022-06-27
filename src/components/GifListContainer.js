import React, { useState, useEffect } from 'react'

import GifList from './GifList';
import GifSearch from './GifSearch';

// This is my API key that goes in the http request after 'api_key='
// const myGiphyAPIKey = "8BzhKiQFQlAdabL4dILfqOkbqPJBMTNz";
// const APIurl = `https://api.giphy.com/v1/gifs/search?api_key=${myGiphyAPIKey}&q=${query}&limit=3&offset=0&rating=g&lang=en`;


function GifListContainer({url}) {
    const [gifs, setGifs] = useState([]);
    const [userQuery, setUserQuery] = useState("");

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=8BzhKiQFQlAdabL4dILfqOkbqPJBMTNz&q=${userQuery}&limit=3&offset=0&rating=g&lang=en`)
        .then(response => response.json())
        // .then(({data}) => setGifs(data.map(gif => ({ url: gif.images.original.url }))))
        .then((returnedGifs) => {
            setGifs(returnedGifs.data.map(item => item.images.original.url))
        })
    }, [userQuery]);


    function handleSubmit(searchText) {
        setUserQuery(searchText);
    }


    return (
        <div>
            <GifSearch onSubmit={handleSubmit}/>

            <GifList gifs={gifs}/>
        </div>
    )
}

export default GifListContainer;
