import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CountryDisplay from './components/CountryDisplay';

const App = () => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/all`).then(response => {
      setCountries(response.data);
    });
  }, []);
  console.log('render', countries.length, 'countries');
  console.log(countries);
  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <p>{display}</p>

      <CountryDisplay
        countries={countries}
        setCountries={setCountries}
        search={search}
        display={display}
        setDisplay={setDisplay}
      />
    </div>
  );
};

export default App;
