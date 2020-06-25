import React from 'react';

import './SearchBar.css';
//User Name can be made into a sepearte component for user auth 
const searchBar = () => {

    const onClickButton = (event) => {
        event.preventDefault();
    }

    return(
        <div className="topnav">
            <div className="search-container">
            <form >
                <button type="submit" onClick={onClickButton}><i className="fa fa-search"></i></button>
                <input type="text" placeholder="Search.." name="search" />
            </form>
            </div>
            <h3>User Name</h3> 
        </div>
    );
}

export default searchBar;