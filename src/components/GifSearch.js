import React, { useState } from 'react'

function GifSearch({onSubmit}) {
    const [searchText, setSearchText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        onSubmit(searchText);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter a search term:</label>
                <input 
                    type="text" 
                    value={searchText} 
                    onChange={(e) => setSearchText(e.target.value)}>
                </input>

                <button type="submit" className="searchButton">Find Gifs</button>
            </form>
        </div>
    )
}

export default GifSearch;
