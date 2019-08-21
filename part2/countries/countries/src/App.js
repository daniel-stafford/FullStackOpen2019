import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CountryDisplay from './components/CountryDisplay';

const App = () => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

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

      <CountryDisplay countries={countries} search={search} />
    </div>
  );
};

export default App;
