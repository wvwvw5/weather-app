import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input) {
      onSearch(input);
      setInput('');
    }
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Введите город"
      />
      <button onClick={handleSearch}>Поиск</button>
    </div>
  );
};

export default SearchBar;
