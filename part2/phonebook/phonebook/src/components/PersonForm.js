import React from 'react';
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
    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  };

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
