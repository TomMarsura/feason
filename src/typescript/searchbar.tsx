import React from 'react';
import '../css/bootstrap.min.css';
import '../css/style.css';

function SearchBar() {
    return (
        <div className="input-group w-100 mx-auto d-flex">
            <input
                type="search"
                className="form-control p-3"
                placeholder="rechercher"
                aria-describedby="search-icon-1"
            />
            <span id="search-icon-1" className="input-group-text p-3">
                <i className="fa fa-search"></i>
            </span>
        </div>
    );
}

export default SearchBar;