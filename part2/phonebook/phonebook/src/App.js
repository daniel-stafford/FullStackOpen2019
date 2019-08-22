import React, { useState, useEffect } from 'react';
import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import phoneService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [newToDisplay, setToDisplay] = useState(persons);

  useEffect(() => {
    phoneService.getAll().then(initialPersons => {
      setPersons(initialPersons);
    });
  }, []);

  let personsToShow = persons;

  const handleDelete = deletePerson => {
    const confirmation = window.confirm(`Delete ${deletePerson.name}?`);
    if (confirmation) {
      phoneService.remove(deletePerson.id);
      setPersons(persons.filter(person => person.id !== deletePerson.id));
    }
  };

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
      <Persons
        personsToShow={personsToShow}
        setPerson={setPersons}
        handleDelete={handleDelete}
        persons={persons}
      />
    </div>
  );
};

export default App;
