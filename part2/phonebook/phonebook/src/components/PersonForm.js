import React from 'react'
import phoneService from '../services/persons'

const PersonForm = ({
  newName,
  newNumber,
  setNewName,
  setNewNumber,
  setPersons,
  persons,
  setMessage,
  setMessageType,
  message
}) => {
  const addPerson = e => {
    e.preventDefault()

    if (
      persons
        .map(person => person.name.toLowerCase())
        .includes(newName.toLowerCase())
    ) {
      // return alert(`${newName} is already in the phonebook.`);
      const confirmation = window.confirm(
        `${newName} is already in the phone book. Replace the old number with the new one?`
      )
      if (confirmation) {
        const updatePerson = persons.find(person => person.name === newName)
        const changedPerson = {
          ...updatePerson,
          number: newNumber
        }
        return phoneService
          .update(updatePerson.id, changedPerson)
          .then(
            setPersons(
              persons.map(person =>
                person.name === newName ? changedPerson : person
              )
            )
          )
          .then(setMessageType('success'))
          .then(setMessage(`${newName} updated`))
          .then(
            setTimeout(() => {
              setMessage(null)
            }, 2000)
          )
          .catch(error => {
            setMessageType('error')
            setMessage(` '${newName}' was already removed from the phonebook`)
            setTimeout(() => {
              setMessage(null)
            }, 2000)
          })
      } else return
    }

    const personObject = { name: newName, number: newNumber }
    phoneService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        console.log('create still running')
      })
      .then(setMessageType('success'))
      .then(setMessage(`${newName} added`))
      .then(
        setTimeout(() => {
          setMessage(null)
        }, 2000)
      )
      .catch(error => {
        setMessageType('error')
        setMessage(` '${newName}' wasn't added.`)
        setTimeout(() => {
          setMessage(null)
        }, 2000)
      })
  }

  //   axios.post('http://localhost:3001/persons', personObject).then(response => {
  //     setPersons(persons.concat(response.data));
  //     console.log('response', response);
  //     setNewName('');
  //     setNewNumber('');
  //   });
  // };

  const handleNameChange = e => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  const handleNumberChange = e => {
    console.log(e.target.value)
    setNewNumber(e.target.value)
  }
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
  )
}

export default PersonForm
