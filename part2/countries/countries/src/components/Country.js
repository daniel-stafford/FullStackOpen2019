import React from 'react';

const Country = ({ country }) => {
  const languages = country.languages.map(language => <li>{language.name}</li>);
  const flag = country.flag;
  const alt = `flag of ${country.name}`;

  console.log(country);
  return (
    <div>
      <div>
        <h3>{country.name}</h3>
      </div>
      <div>
        <p>capital city: {country.capital}</p>
        <p>population: {country.population}</p>
      </div>
      <div>
        <h3>languages</h3>
        <ul>{languages}</ul>
      </div>
      <div>
        <img src={flag} alt={alt} width={75} height={50} />
      </div>
    </div>
  );
};

export default Country;
