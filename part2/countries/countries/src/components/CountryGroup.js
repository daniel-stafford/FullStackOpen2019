import React from 'react';

const CountryGroup = props => {
  console.log('countrygroup', props);
  return (
    <div>
      <p>{props.country.name}</p>
    </div>
  );
};

export default CountryGroup;
