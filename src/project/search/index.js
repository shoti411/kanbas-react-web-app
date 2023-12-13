import * as yelp from '../yelp-service.js';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { API_KEY } from '../client.js';


function Search() {
    
    const [searchTerm, setSearchTerm] = useState('');
    return ( 
        <div>
            <h1>Search</h1>
            {API_KEY}
            <div className="d-flex">
                <input
                    className="form-control w-75"
                    type="text"
                    title="Search a business"
                    placeholder="Search a business..."
                    value={searchTerm}
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} />
                    <button className="btn btn-info">
                        <CiSearch/>
                    </button>
            </div>
            

        </div>
     );
}

export default Search;