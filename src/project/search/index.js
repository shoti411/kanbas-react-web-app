import * as client from '../yelp-service.js';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Results from './results.js';
import { CiSearch } from "react-icons/ci";


function Search() {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState(null);

    const fetchBusinesses = async () => {
        // try {
        // const searchResults = await client.fullTextSearch(searchTerm);
        // setResults(searchResults);
        // }
        // catch (error) {
        //     console.log(error);
        // }
        const searchResults = await client.fullTextSearch(searchTerm);
        setResults(searchResults);
    };

    useEffect(() => {
        fetchBusinesses("");
    }, []);

    return ( 
        <div className="container">
            <h1>Search</h1>
            {client.KEY}
            <div className="d-flex container-fluid">
                <input
                    className="form-control w-75"
                    type="text"
                    title="Search a business"
                    placeholder="Search a business..."
                    value={searchTerm}
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} />
                    <button onClick={fetchBusinesses} className="btn btn-info">
                        <CiSearch/>
                    </button>
            </div>
            
            {JSON.stringify(results, null, 2)}
            {/* <Results/> */}
            

        </div>
     );
}

export default Search;