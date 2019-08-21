import React, { useState, useEffect } from 'react';
import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [newToDisplay, setToDisplay] = useState(persons);

  useEffect(() => {
    console.log('effect');
    axios.get('http://localhost:3001/persons').then(response => {
      console.log('promise fulfilled');
      setPersons(response.data);
    });
  }, []);
  console.log('render', persons.length, 'persons');

  let personsToShow = persons;

  personsToShow =
    newFilter === ''
      ? (personsToShow = persons)
      : (personsToShow = persons.filter(person =>
          person.name.toLowerCase().includes(newFilter.toLowerCase())
        ));

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          <Filter
            newFilter={newFilter}
            setNewFilter={setNewFilter}
            newToDisplay={newToDisplay}
            setToDisplay={setToDisplay}
          />
        </div>
      </form>
      <h2>To Add</h2>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
