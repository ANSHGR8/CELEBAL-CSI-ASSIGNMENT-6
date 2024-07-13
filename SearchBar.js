import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMusic } from '../../redux/actions/musicActions';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchMusic(query));
  };

  return (
    <div>
      <input type="text" placeholder="Search for songs, artists..." onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
