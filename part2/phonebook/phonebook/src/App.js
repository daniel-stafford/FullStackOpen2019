import React, { useState } from 'react';
import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [newToDisplay, setToDisplay] = useState(persons);

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
      <h2>to Add</h2>
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
