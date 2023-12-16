import * as client from '../googlemaps-service.js';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Results from './results.js';
import { CiSearch } from "react-icons/ci";
import './../styles.css';
import './index.css';
import Details from '../details.js';


function Search() {

    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState(null);
    const [nextPageToken, setNextPageToken] = useState(null);

    const fetchBusinesses = async () => {
        const searchResults = await client.fullTextSearch(searchTerm);
        setNextPageToken(searchResults.nextPageToken);
        setResults(searchResults.results);
        // console.log(searchResults.results);
    };

    useEffect(() => {
        fetchBusinesses("");
    }, []);

    return (
        <div className="container p-page">
            <h1>Search</h1>
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
                    <CiSearch />
                </button>
            </div>
            <div className="col d-flex flex-row flex-wrap">
                {results && results.map((business, index) => (
                    <div data-backgroundcolor={`${business.icon_background_color}`} className="card pw-cards">
                        <Link key={business.place_id}
                            to={`/project/details/${business.place_id}`}
                            className="list-group-item">
                            <img className={`card-img-top img-fluid pw-card-imgs`} src={business.icon} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{business.name}</h5>
                                <div>
                                    {business.opening_hours?.open_now ? "Open right now!" : "Not Open Right Now"}
                                </div>
                                <div className="row justify-content-between">
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            {/* <Results/> */}


        </div>
    );
}

export default Search;