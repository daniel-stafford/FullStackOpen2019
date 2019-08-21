import React from 'react';
import Person from './Person';

const Persons = ({ personsToShow }) => {
  const rows = () =>
    personsToShow.map(person => <Person person={person} key={person.name} />);

  return (
    <div>
      <ul>{rows()}</ul>
    </div>
  );
};

export default Persons;
