import React from 'react';
import './SeacrhStyle.css';

const SearchIndex = ({ value,handleSearchKey, clearSearch, formSubmit }) => {
  return (
    <div className='searchbar-wrap'>
        <form onSubmit={formSubmit}>
            <input type="text" onChange={handleSearchKey}placeholder='Search by blog' value={value}/>
            {value && <span onClick={clearSearch}>X</span>}
            <button>Go</button>
        </form>
    </div>
  )
}

export default SearchIndex