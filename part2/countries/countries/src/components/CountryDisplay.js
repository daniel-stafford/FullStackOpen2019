import React from 'react';
import Country from './Country';
import CountryGroup from './CountryGroup';

const CountryDisplay = ({ countries, setCountries, search, setDisplay }) => {
  let display = countries;

  display = countries.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  if (display.length === 1)
    return (display = <Country country={display[0]} key={display[0].name} />);

  if (display.length > 10)
    return (display = (
      <p>I've found {display.length} countries. Narrow your search.</p>
    ));

  display = display.map(country => (
    <CountryGroup country={country} key={country.name} />
  ));

  return <div>{display} </div>;
};

export default CountryDisplay;
