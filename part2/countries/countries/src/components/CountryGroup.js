import React, { useState } from 'react';
import Country from './Country';

const CountryGroup = props => {
  console.log('countrygroup', props);
  const [enlarge, setEnlarge] = useState(false);
  const handleClick = () => {
    console.log('button clicked');
    setEnlarge(true);
  };
  if (enlarge === true) {
    return <Country country={props.country} />;
  }
  console.log('enlarge', enlarge);
  return (
    <li>
      {props.country.name} <button onClick={handleClick}>show</button>
    </li>
  );
};

export default CountryGroup;
