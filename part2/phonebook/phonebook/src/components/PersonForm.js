import React from 'react';
import phoneService from '../services/persons';

const PersonForm = ({
  newName,
  newNumber,
  setNewName,
  setNewNumber,
  setPersons,
  persons
}) => {
  const addPerson = e => {
    e.preventDefault();

    if (
      persons
        .map(person => person.name.toLowerCase())
        .includes(newName.toLowerCase())
    )
      return alert(`${newName} is already in the phonebook.`);

    const personObject = { name: newName, number: newNumber };
    phoneService.create(personObject).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson));
      setNewName('');
      setNewNumber('');
    });
  };

  //   axios.post('http://localhost:3001/persons', personObject).then(response => {
  //     setPersons(persons.concat(response.data));
  //     console.log('response', response);
  //     setNewName('');
  //     setNewNumber('');
  //   });
  // };

  const handleNameChange = e => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    console.log(e.target.value);
    setNewNumber(e.target.value);
  };
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default PersonForm;
