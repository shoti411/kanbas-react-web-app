import * as yelp from './../yelp-service.js';
import { useState } from 'react';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    return ( 
        <div>
            <h1>Search</h1>
            <input
                className="form-control"
                type="text"
                title="Search a business"
                placeholder="Search a business..."
                value={searchTerm}
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }} />
        </div>
     );
}

export default Search;